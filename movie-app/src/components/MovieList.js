import MovieCard from "./MovieCard";

const MovieList = (props)=>{
    return(
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"center", gap:"20px", margin:"10px"}} >
    {props.films.map((film, index)=>(
        <MovieCard key={index} {...film}/>
    ))}
    </div>
    )
}
export default MovieList