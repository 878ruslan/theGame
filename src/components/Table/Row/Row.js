import { Button, Form, Input, Modal, notification } from 'antd';
import styles from './styles.module.scss';
import { useRef, useState } from 'react';
import { hideQuestion } from '../../../store/gameSlice'
import { useDispatch } from 'react-redux';

export const Row = (props) => {
    const { title, questions } = props;
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const currentQuestion = useRef({});

    const onQuestionsClick = (question) => {
        currentQuestion.current = question;
        setShow(true);
    }; 

    const onFormFinish = (values) => {
        const { answer } = values;

        const correct = currentQuestion.current.answer;

        if (answer === correct) {
            notification.success({ message: 'Ответ правильный' });
            dispatch(hideQuestion({question: currentQuestion.current, title}));            
        } else {
            notification.error({ message: 'Ответ неверный' });
        }

        setShow(false);
    };

    return (
        <>
           <div className={styles.row}>
             <h1>{title}</h1>            
             {questions.map((question, i) => {
              return (
                <div onClick={() => !question.isAnswered && onQuestionsClick(question)} key={i}>
                    {question.isAnswered ? '' : question.value}
                </div>
              );
             })}   
            </div>
        <Modal open={show} onCancel={() => setShow(false)} footer={false}>
            <Form onFinish={onFormFinish}>
             <h2>{currentQuestion.current.question}</h2>
             <h3>Ограничение по времени - 45 секунд</h3>
             <Form.Item name='answer'>
                 <Input placeholder='Введите ваш ответ' />
             </Form.Item>
             <Button htmlType='submit' type='primary'>
                Ответить
             </Button>
            </Form>            
         </Modal>
        </>
    );
};