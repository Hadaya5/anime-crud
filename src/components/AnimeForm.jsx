import React, { useState, createContext, useContext} from 'react'
import '../styles/AnimeForm.css'
import { ShowAnimes } from './ShowAnimes'
import AnimeContext from '../context/AnimeContext'


export const AnimeForm = () => {

    const {animeState, setAnimeState} = useContext(AnimeContext);

    const handleSubmit = (e) => {
        e.preventDefault()

        setAnimeState([...animeState, {
            name: e.target.name.value,
            sinopsis: e.target.sinopsis.value,
            fechaEstreno: e.target.fechaEstreno.value,
            opinion: e.target.opinion.value,
        }])

        
        //console.log(animeState)

        
    }

  return (
    <div>
        <form onSubmit={handleSubmit} id="container">
            <h2>Agregar anime visto</h2>
            <label htmlFor="">
                Nombre: 
                <input className='inp' type="text" name='name' id='name'/>
            </label>
            <label htmlFor="">
                Sinopsis: 
                <textarea className='inp' id='sinopsis' name="sinopsis" cols="30" rows="5"></textarea>
            </label>
            <label htmlFor="">
                Fecha de estreno: 
                <input className='inp' id="fechaEstreno" type="date" name='estreno'/> 
            </label>
            <label htmlFor="">
                Opinión: 
                <textarea className='inp' id="opinion" name="opinion" cols="30" rows="5"></textarea>
            </label>
            
            <input type="submit" value="Agregar"/>

        </form>

    </div>
  )
}
