
import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom'; 
import LoginForm from './Components/LoginForm';

import Home from './Components/Home'; 
import HomeDetails from './Components/HomeDetails';

import Courses from './Components/Courses';
import CoursesDetails from './Components/CoursesDetails';

import Movies from './Components/Movies';
import MoviesDetails from './Components/MoviesDetails';

import Trending from './Components/Trending';
import TrendingDetails from './Components/TrendingDetails';

import Games from './Components/Games';
import GameDetails from './Components/GameDetails';

import Sports from './Components/Sports';
import  SavedVideos from './Components/SavedVideos';




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />  
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/videos/:id" element={<HomeDetails/>} />

        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/courses/:id" element={<CoursesDetails/>} />
      
        <Route exact path="/movies" element={<Movies/>} />
        <Route exact path="/movies/:id" element={<MoviesDetails/>} />

        <Route exact path="/trending" element={<Trending/>} />
        <Route exact path="/trendVideos/:id" element={<TrendingDetails />} />

        <Route exact path="/games" element={<Games/>} />
        <Route exact path="/games/:id" element={<GameDetails/>} />

        <Route  exact path="/sports" element={<Sports/>}/>
        <Route exact path="/saved-videos" element={<SavedVideos />} />

        
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;



