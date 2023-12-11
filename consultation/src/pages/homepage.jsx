import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/uefa.jpeg'
import './homepage.css'
function Homepage()
{
  return(

    <figure class="movie">
  <div class="movie__hero">
    <img src={logo} alt="Rambo" class="movie__img"/>
  </div>
  <div class="movie__content">
    <div class="movie__title">
      <h1 class="heading__primary">First Blood Part II <i class="fas fa-fire"></i></h1>
      <div class="movie__tag movie__tag--1">#action</div>
      <div class="movie__tag movie__tag--2">#thriller</div>
    </div>
    <p class="movie__description">
      First Blood is a 1982 American action film directed by Ted Kotcheff, and co-written by Sylvester
      Stallone, who also stars as Vietnam War veteran John Rambo.
    </p>
    <div class="movie__details">
      <p class="movie__detail"><span class="icons icons-red"><i class="fas fa-camera-retro"></i> </span>Buzz
        Feitshans</p>
      <p class="movie__detail"><span class="icons icons-grey"><i class="fas fa-clock"></i> </span>1h 33m</p>
      <p class="movie__detail"><span class="icons icons-yellow"><i class="fas fa-file-invoice-dollar"></i>
        </span>$12.52 crores</p>
    </div>
  </div>
  <div class="movie__price">$12.56</div>
</figure>

  );
}
export default Homepage;