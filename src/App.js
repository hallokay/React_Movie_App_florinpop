import React, { useEffect, useState } from 'react';
import Movie from './conponents/Movie';
// import './App.css';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&page=1&query";


function App() {
const [movies, setMovies] = useState([]);

useEffect(() => {
  fetch(FEATURED_API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results)
    })

}, []);

  return (
    <div className="movie_container">
    {/* 무비스의 각각을 무비로 받아서 
    무비 컴포넌트를 적용 */}
    <header>
      <input type="text" className="search" placeholder="Search..."/>
    </header>

   { movies.map(movie => (

     <Movie key={movie.id} {...movie}/>
    //  키를 꼭 줘야함 
    // {...date} 쓰면 데이터의 각각
   )) };
   </div>
  );
}

export default App;
