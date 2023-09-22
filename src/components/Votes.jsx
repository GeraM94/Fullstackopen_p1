import PropTypes from 'prop-types'  

const Votes = ({ votes }) => <p>has {votes} votes</p>;
Votes.propTypes = {
    votes: PropTypes.number
  }
export default Votes