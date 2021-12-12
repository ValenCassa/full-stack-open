const Part = (props) => {
    return (
      <p>
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }

export const Content = ({ course }) => {
    return (
      <div>
          {course.parts.map((part, i) => {
              return(
                <Part key={i} part={part} />
              )
          })}
      </div>
    )
  }

export default Content