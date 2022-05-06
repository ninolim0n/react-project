import React from 'react'
import SpinnerCss from './SpinnerCss'

const Card = ({dog, loading, updateDog}) => {
  if(loading) return <SpinnerCss />


  return (
    <div className='card' onClick={() => updateDog(dog.breed.id)}>
        <img
        src={dog.image}
        alt='dog'        
        />
        <p>
            {dog.breed.name}
        </p>
        
    </div>
  )
}

export default Card;
