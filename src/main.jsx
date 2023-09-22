import { useState } from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';
import Header from './components/headers';
import Button from './components/button';
import Anecdote from './components/anecdote';
import Votes from './components/votes';

// const Header = ({text}) => <h1>{text}</h1>
// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;
// const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;
// const Votes = ({ votes }) => <p>has {votes} votes</p>;


const App = () => {
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const getRandomInt = () =>setSelected(Math.floor(Math.random() * Math.floor(anecdotes.length)));

  const voteForAnecdote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

    // find the highest value in the array of votes
    const highestVotes = Math.max(...votes);
    // set a value with the correct anecdote based on the index of the value with the most votes
    const winningAnecdote = anecdotes[votes.indexOf(highestVotes)];

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Votes votes={votes[selected]}/>
      <Button onClick={voteForAnecdote} text='vote'/>
      <Button onClick={getRandomInt}text='Next Anecdote'/>
      <Header text="Anecdote with most votes" />
      <Anecdote anecdote={winningAnecdote} />
      <Votes votes={highestVotes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

// ReactDOM.render(
//   <App anecdotes={anecdotes} />,
//   document.getElementById('root')
// )

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App anecdotes={anecdotes} />);

