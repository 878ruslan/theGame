import styles from './styles.module.scss';

export const Row = (props) => {
    const { title, questions } = props;

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {questions.map((question, i) => {
                    return <li key={i}>{question.value}</li>;
                })}
            </ul>
        </div>
    );
};