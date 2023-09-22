import Part from './Part'

function Content({parts}) {
  console.log(parts);

  return (
    <>
      {parts.map((part, i) => <Part key={i} part={part.name} exercise={part.exercises}/> )}
    </>
  )
}

export default Content