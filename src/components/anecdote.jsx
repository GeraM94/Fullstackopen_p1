import PropTypes from 'prop-types'  


const Anecdote = ({ anecdote }) => <p>{anecdote}</p>;
Anecdote.propTypes = {
    anecdote: PropTypes.string.isRequired
  }
export default Anecdote
