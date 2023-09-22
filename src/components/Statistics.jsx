
const Statistics = (props) => {
    const { good, neutral, bad } = props;
    return (
        <div>
            <h1>Statics</h1>
            <div>good {good}</div>
            <div>neutral {neutral}</div>
            <div>bad {bad}</div>
        </div>
    );
};

export default Statistics;
