import React from 'react';
import './Phonetics.css';

export default function Phonetics(props) {
  return(
    <div className='Phonetics'>
    <div className='text'>{props.phonetics.text}</div>
    <div>
    <audio controls src={props.phonetics.audio} >
     not support <code>audio</code>
       
</audio></div>
    </div>
  );
}