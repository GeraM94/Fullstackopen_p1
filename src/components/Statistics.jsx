import StatisticLine from "./StatisticLine"
const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  // pendiente hacer la evaluacion con if else statement
  // if (myVariable === "valor") {
  //   elementToRender = <p>El valor es igual a "valor"</p>;
  // } else {
  //   elementToRender = <p>El valor no es igual a "valor"</p>;
  // }
  return (
    <div>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>Statistics</h1>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={good + neutral + bad} />
          <StatisticLine text="average" value={isNaN((good - bad) / (good + neutral + bad)) ? 0 : (((good - bad) / (good + neutral + bad)*100)).toFixed(2)} />
          <StatisticLine text="positive" value={isNaN((good) / (good + neutral + bad)) ? 0 : (((good) / (good + neutral + bad))*100).toFixed(2)} />
        </div>
      )}
    </div>)
}

export default Statistics;
