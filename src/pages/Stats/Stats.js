import { useSelector } from 'react-redux';
import { Card, Layout, Row } from 'antd';
import { Header } from '../../components';
import styles from './styles.module.scss';

export const Stats = () => {
  const username = useSelector(state => state.user.username);
  const playedQuestions = useSelector(state => state.stats.played);
  const correctAnswers = useSelector(state => state.stats.correct);
  const wrongAnswers = useSelector(state => state.stats.wrong);
  const points = useSelector(state => state.stats.points);

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content>
        <Row justify='center' className={styles.row}>
          <Card title='Никнейм' className={styles.card}>
            {username}
          </Card>
        </Row>

        <Row justify='center' className={styles.row}>
          <Card title='Кол-во сыгранных вопросов' className={styles.card}>
            {playedQuestions}
          </Card>
          <Card title='Кол-во верных ответов' className={styles.card}>
            {correctAnswers}
          </Card>
        </Row>

        <Row justify='center' className={styles.row}>
          <Card title='Кол-во неверных ответов' className={styles.card}>
            {wrongAnswers}
          </Card>
          <Card title='Сумма баллов' className={styles.card}>
            {points}
          </Card>
        </Row>
      </Layout.Content>
    </Layout>
  );
};
