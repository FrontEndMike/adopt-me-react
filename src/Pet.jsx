import React from 'react'
import { Link } from 'react-router-dom'

const Pet = ({ name, animal, breed, images, location, id }) => {
  let hero = 'http://pets-images.dev-apis.com/pets/none.jpg'
  if (images.length) {
    hero = images[0]
  }
  return (
    <Link
      to={`/details/${id}`}
      className="pet mb-8 grid w-full grid-cols-1 overflow-hidden rounded-2xl shadow-lg"
    >
      <div className="image-container col-span-1">
        <div className="overflow-hidden">
          <img className="" src={hero} alt={name} />
        </div>
      </div>
      <div className="info col-span-1 bg-white p-4 transition-colors duration-300 hover:bg-slate-100">
        <h2 className="mb-2 text-2xl">{name}</h2>
        <h3 className="text-lg capitalize">{animal}</h3>
        <h3 className="text-lg capitalize">{breed}</h3>
        <h3 className="text-lg capitalize">{location}</h3>
      </div>
    </Link>
  )
}

export default Pet
