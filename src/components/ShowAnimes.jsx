import React, { useState, useContext, useEffect } from 'react'
import AnimeContext from '../context/AnimeContext'
import "../styles/AnimeForm.css"

export const ShowAnimes = () => {

    const {animeState, setAnimeState} = useContext(AnimeContext);
    const [thereIsAnime, setThereIsAnime] = useState(false)

    const [editingName, setEditingName] = useState(null);
    const [editSinopsis, setEditSinopsis] = useState('');
    const [editFecha, setEditFecha] = useState('');
    const [editOpinion, setEditOpinion] = useState('');

    const handleEdit = (name) => {
        const item = animeState.find((item) => item.name === name);
        setEditingName(name);
        setEditSinopsis(item.sinopsis);
        setEditFecha(item.fechaEstreno);
        setEditOpinion(item.opinion);
    };

    const handleSave = (name) => {
        const newData = animeState.map((item) => {
          if (item.name === name) {
            return { 
                ...item, 
                sinopsis: editSinopsis,
                fecha: editFecha,
                opinion: editOpinion
            };
          }
          return item;
        });
        setAnimeState(newData);
        setEditingName(null);
        setEditSinopsis('');
        setEditFecha('');
        setEditOpinion('');
    };

    useEffect(() => {
      if(animeState.length > 0){
        setThereIsAnime(true)
      }
      else {
        setThereIsAnime(false)
      }
    }, [animeState])
    

  return (
    <>
        <ul>

            { thereIsAnime 
            ? 
                animeState.map( anime => {
                    return (
                        <div className='item'>
                            <li>{anime.name}</li>
                            <p>
                                {editingName === anime.name ? (
                                    <input
                                        type="text"
                                        value={editSinopsis}
                                        onChange={(e) => setEditSinopsis(e.target.value)}
                                    />
                                    ) : (
                                    anime.sinopsis
                                )}
                            </p>
                            <p>
                                {editingName === anime.name ? (
                                    <input
                                        type="text"
                                        value={editFecha}
                                        onChange={(e) => setEditFecha(e.target.value)}
                                    />
                                    ) : (
                                    anime.fechaEstreno
                                )}
                            </p>
                            <p>
                                {editingName === anime.name ? (
                                    <input
                                        type="text"
                                        value={editOpinion}
                                        onChange={(e) => setEditOpinion(e.target.value)}
                                    />
                                    ) : (
                                    anime.opinion
                                )}
                            </p>

                            {editingName === anime.name ? (
                                <button
                                    className='buttonIcon'
                                    onClick={() => handleSave(anime.name)} >
                                    Guardar
                                </button>
                                ) : (
                                <button
                                    className='buttonIcon'
                                    onClick={() => handleEdit(anime.name)} >
                                    Editar
                                </button>
                            )}

                            <button onClick={ () => { setAnimeState(animeState.filter(item => item.name !== anime.name));} }>
                                Eliminar
                            </button>

                        </div>
                    )
                })
            :
                <h4>No hay animes agregados</h4>
            }


        </ul>
    </>
  )
}
