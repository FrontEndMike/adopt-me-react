import React from 'react'
import Pet from './Pet'

const Results = ({ pets }) => {
  return (
    <div className="search grid w-full grid-cols-1 justify-items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets
          .map((pet) => (
            <Pet
              id={pet.id}
              name={pet.name}
              animal={pet.animal}
              images={pet.images}
              location={`${pet.city}, ${pet.state}`}
              breed={pet.breed}
              key={pet.id}
            />
          ))
          .slice(0, 9)
      )}
    </div>
  )
}

export default Results
