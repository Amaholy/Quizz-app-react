import questions from '../data/questions'

function Result({ correct }) {
  return (
    <div className="result">
      <img src="../img/free-icon-party.png" />
      <h2>
        You answered {correct} questions out of {questions.length} correctly
      </h2>
      <a href="/">
        <button>Try again</button>
      </a>
    </div>
  )
}
export default Result
