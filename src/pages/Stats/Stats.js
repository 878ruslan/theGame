import{ Card, Layout, Row } from 'antd';
import { Header } from '../../components';
import styles from './styles.module.scss';

export const Stats = () => {
    return (
        <Layout>
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.Content>
                <Row justify='center' className={styles.row}>
                    <Card title='Никнейм' className={styles.card}>
                        Value
                    </Card>
                </Row>

                <Row justify='center' className={styles.row}>
                    <Card title='Кол-во сыгранных вопросов' className={styles.card}>
                     Value
                    </Card>
                    <Card title='Кол-во верных ответов' className={styles.card}>
                     Value
                    </Card>
                </Row>
                
                <Row justify='center' className={styles.row}>
                    <Card title='Кол-во неверных ответов' className={styles.card}>
                     Value
                    </Card>
                    <Card title='Сумма баллов' className={styles.card}>
                     Value
                    </Card>
                </Row>            
            </Layout.Content>
        </Layout>
    );
};