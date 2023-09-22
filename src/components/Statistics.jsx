const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad
  return (
    <div>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <h1>Statics</h1>
          <div>good {good}</div>
          <div>neutral {neutral}</div>
          <div>bad {bad}</div>
          <div>all {good + neutral + bad}</div>
          <div>average {isNaN((good - bad) / (good + neutral + bad)) ? 0 : (good - bad) / (good + neutral + bad)}</div>
          <div>positive {isNaN((good) / (good + neutral + bad)) ? 0 : (good) / (good + neutral + bad)}</div>
        </div>
      )}
    </div>)
}

export default Statistics;
