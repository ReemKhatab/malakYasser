import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/uefa.jpeg'
import './homepage.css'
import Button from '../componets/Button';
import {componentArray} from "../helpers/stadiumSeats.js"
import { useState } from 'react';
import SeatsButton from '../componets/seatsButton.jsx';





function Homepage()
{
  const[seats , setSeats] = useState(componentArray);
  const handleClick = (name) => {
    setSeats((prevprops)=> {
      const newSeats = prevprops.map((seat) => 
        seat.seatName === name ? {...seat , booked : !seat.booked} : seat
      );
      return newSeats; 
      })
  }

  const coloumns = 5;



  console.log(seats)
  return(
    <div style={{display:"flex" , justifyContent:"center"}}>
    <div className='seats-grid' >
    {seats.map((item,index) => {
      return <SeatsButton
      key={index}
      coloums={coloumns}
      id={index}
      booked={item.booked}
      text={item.seatName}
      onClick={()=>{handleClick(item.seatName)}}
    />
    })}
    </div>
  </div>
  );
}
export default Homepage;