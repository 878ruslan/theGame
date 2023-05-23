import { Button, Form, Input, Modal, notification } from 'antd';
import styles from './styles.module.scss';
import { useRef, useState, useEffect } from 'react';
import { hideQuestion } from '../../../store/gameSlice';
import { useDispatch } from 'react-redux';
import { updateStats } from '../../../store/statsSlice';

export const Row = (props) => {
  const { title, questions } = props;
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(10); 
  const dispatch = useDispatch();
  const currentQuestion = useRef({});

  useEffect(() => {
    let countdownTimer = null;

    if (show) {
      countdownTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(countdownTimer);
    };
  }, [show]);

  const onQuestionsClick = (question) => {
    currentQuestion.current = question;
    setShow(true);
    setTimer(10); 
  };

  const onFormFinish = (values) => {
    const { answer } = values;
    const correct = currentQuestion.current.answer;

    if (answer === correct) {
      notification.success({ message: 'Ответ правильный' });
      dispatch(updateStats({ isCorrect: true }));
      dispatch(hideQuestion({ question: currentQuestion.current, title }));
    } else {
      notification.error({ message: 'Ответ неверный' });
      dispatch(updateStats({ isCorrect: false }));
    }

    setShow(false);
  };

  useEffect(() => {
    if (timer === 0 && show) {
      setShow(false);
      notification.warning({ message: 'Время истекло' });
      dispatch(updateStats({ isCorrect: false }));
    }
  }, [timer, show, dispatch]);

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
          <h3>Ограничение по времени - 10 секунд</h3>
          <p>Осталось времени: {timer} секунд</p>
          <Form.Item name="answer">
            <Input placeholder="Введите ваш ответ" />
          </Form.Item>
          <Button htmlType="submit" type="primary">
            Ответить
          </Button>
        </Form>
      </Modal>
    </>
  );
};

