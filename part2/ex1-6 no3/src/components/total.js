const Total = ({ course }) => {
    
    let total = 0
    const num = course.parts.forEach(num => {
        total += num.exercises
    });
    
    return(
      <p><b>Number of exercises {total}</b></p>
    ) 
  }

export default Total