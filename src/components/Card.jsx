import React from 'react'

const Card = ({nombre, animal}) => {
  return (
    <div className='card'>
      <p>
        Hola {nombre}
      </p>
      <p>
        Sabemos que tu mascota favorita es 
      </p>
      <p>
      {animal}
      </p>
    </div>
  )
}

export default Card