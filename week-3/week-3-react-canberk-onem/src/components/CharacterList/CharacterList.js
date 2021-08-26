import React from 'react'
import CharacterCard from "../CharacterCard/CharacterCard"

function CharacterList({characterData}) {
    return (
        
        <div className="cardContainer">
          {
            
            characterData.map((data) => {
              return (
                <CharacterCard key={data.id} data={data}/>)
            })
          }
        </div>
        
    )
}

export default CharacterList
