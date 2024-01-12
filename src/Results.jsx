import React from 'react';
import Meaning from './Meaning';
import Phonetcis from './Phonetics';
import './Results.css';

export default function Results(props) {
  if(props.results) {
    return(
      <div className='Results'>
      <section>
      <h2>{props.results.word}</h2>
        {props.results.phonetics.map(function (phonetics, index) {
        return(
          <div key={index}>
            <Phonetcis phonetics={phonetics} />
          </div>
          
        );
        })}
      </section>
        {props.results.meanings.map(function (meaning, index) {
        return(
          <section key={index}>
          <Meaning meaning={meaning} />
          </section>
        )
        })}
      </div>
    )
  }
}