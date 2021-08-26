import React, {useState, useEffect} from 'react'
import styles from "./characterdetails.module.css"

import {
    BrowserRouter as Router,
    useParams,
    Link
  } from "react-router-dom";

function CharacterDetails() {
    const { id } = useParams()
    const [characterData, setCharacterData] = useState([])
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then(res => res.json())
          .then(
            (result) => {
              setCharacterData(result);
              setEpisodes(result.episode)
            },  
          )
          
      }, [])
      
      const lastFiveEpisodesLinks = episodes.slice(Math.max(episodes.length - 5, 0))
      const lastFiveEpisodes = lastFiveEpisodesLinks.map(episode => episode.replace(/(https:\/\/rickandmortyapi.com\/api\/episode\/)/g, ""))

    return (
        <div className={styles.detailContainer}>
            <Link to="/"><button className={styles.homeBtn}>BACK HOME</button></Link>

            <h1>{characterData.name}</h1>
            <div>
                <img src={characterData.image} alt={characterData.name}/>
            </div>

            
            <ul>
                <li><strong>Status:</strong> {characterData.status}</li>
                <li><strong>Species:</strong> {characterData.species}</li>
                <li><strong>Gender:</strong> {characterData.gender}</li>
                <li><strong>Origin:</strong> {{...characterData.origin}.name}</li>
                <li><strong>Location:</strong> {{...characterData.location}.name}</li>
           
            </ul>
            <p><strong>Last episodes:</strong>
              <ul className={styles.episodesList}>
                {lastFiveEpisodes.map(episode => <li>{episode}</li>)}
              </ul>
            </p>
            
        </div>
    )
}

export default CharacterDetails
