import React from 'react'
import styles from "./charactercard.module.css";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";



function CharacterCard({data}) {
    return (
        <div className={styles.card}>
            <div>
            <Link to={`character/${data.id}`}><img src={data.image} alt={data.name}/></Link>
                <h2>{data.name}</h2>
            </div>
            <div className={styles.cardInfo}>
                <p><strong>Status:</strong> {data.status}</p>
                <p><strong>Species:</strong> {data.species}</p>
                <p><strong>Location:</strong> {data.location.name}</p>
                <p><strong>Origin:</strong> {data.origin.name}</p>
            </div>
            
            
        </div>
    )
}

export default CharacterCard
