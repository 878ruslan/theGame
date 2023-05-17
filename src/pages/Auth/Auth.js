import { Button, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import styles from './styles.module.scss';

export const Auth = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        localStorage.setItem('nickname', values.nickname);
        navigate('/game');
    };

    return (
        <div className={styles.wrapper}>
            <Form onFinish={onSubmit}>
                <Form.Item label='Никнейм' name='nickname'>
                    <Input required placeholder="Введите ваш никнейм" />
                </Form.Item>
                <Row justify='center'>
                    <Button htmlType="submit" type='primary'>
                        Сохранить
                    </Button>
                </Row>
            </Form>
        </div>
    );
};