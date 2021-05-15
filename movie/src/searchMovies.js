import React from "react";
import {useState} from "react";
import { Box } from "@chakra-ui/react"
import { Image , Button} from "@chakra-ui/react"

const SearchMovies=()=>{
    const [query, setQuery]=useState('');
    const [movie, setMovie]=useState([]);
    const searchMovie=async(e)=>{
        e.preventDefault();
        
        const apiURL=`https://api.themoviedb.org/3/search/movie?api_key=577d27a2fca8187fc695adcb215b7c12&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            const url=await fetch(apiURL);
            const res=await url.json();
            console.log(res);
            setMovie(res.results)
        }catch(err){
            console.log(err);
        }
    }
    return(
        /*<div className="movies">
            <form className="form" onSubmit={searchMovie}>
                <label className="movie-query" htmlFor="query">
                    <input type="text" className="query" placeholder="Type in a movie name" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                </label>
                <button className="submit" type="submit">Search</button>
             </form>
            <div>
                 {movie.map(m=>(
                     <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                     <div className="card" key={m.id}>
                     <img className="card--image"
                         src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}
                         />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>: {movie.release_date}</small></p>
                        </div>

                    </div>
                    </Box>
                 ))}
             </div>    
        </div>*/
        <div>
        <form className="form" onSubmit={searchMovie}>
                <label className="movie-query" htmlFor="query">
                    <input type="text" className="query" placeholder="Type in a movie name" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                </label>
                <button className="submit" type="submit">Search</button>
        </form>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            {movie.map(m=>(
                <>
                <Image src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`}/>
            
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Button colorScheme="teal" size="xs">Bookmark</Button>
                    <Button colorScheme="teal" size="xs">Notes</Button>
                </Box>
            </Box>
            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
            >
                {m.title}
            </Box>

            <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {m.vote_average} reviews
            </Box>
            </>
            ))}
        </Box>
    </div>
  )

    
}

export default SearchMovies