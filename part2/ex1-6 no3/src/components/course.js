import Total from "./total";
import Header from "./header";
import Content from "./content";

const Course = ({ courses }) => {
    return (
    <>
    {courses.map((cor) => {
        return(
        <>
        <Header key={cor.id} course={cor} />
        <Content key={cor.id} course={cor} />
        <Total key={cor.id} course={cor} />
        </>
        )
    })}

    </>
    )
}

export default Course