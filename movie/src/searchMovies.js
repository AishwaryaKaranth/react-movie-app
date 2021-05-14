import React from "react";
import {useState} from "react";

const searchMovies=()=>{
    const searchMovie=async(e)=>{
        e.preventDefault();
        const movie= e.target.value;
        const apiURL=``;
        try{
            const url=await fetch(apiURL);
            const res=await url.json();
            console.log(res.values);
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div className="movies">
            <form className="form">
                <label className="movie-query" htmlFor="query">
                    <input type="text" className="query" placeholder="Type in a movie name" onChange={searchMovie}/>
                </label>
                <button className="submit" type="submit">Search</button>
            </form>
        </div>
    )
}