import React from "react";
import { movies } from "../data";

function Movies(  ) {

  return(

    movies.map((movie,index)=>{
     
  
      return (
      <div>
    
      <h1>Movies Page</h1>
      <ul>
        <li key={index}>{movie.title}</li>
        <li key={index}>{movie.time}</li>
        <li key={index}>
          {movies.genres.map(()=>{
          return(
            <li key={index}>{movie.genres[index]}</li>
          );
        })}
        </li>
      </ul>
      
      
      
     </div>
      );}));}
    
      
    
  
  

export default Movies;
