import React from 'react'
import { useState, useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import fetchSearch from './fetchSearch'
import useBreedList from './useBreedList'
import Results from './Results'
import AdoptedPetContext from './AdoptedPetContext'

const ANIMALS = ['bird', 'cat', 'dog', 'reptile']

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: '',
    animal: '',
    breed: '',
  })

  const [animal, setAnimal] = useState('')
  const [breeds] = useBreedList(animal)
  const [adoptedPet] = useContext(AdoptedPetContext)

  const results = useQuery(['search', requestParams], fetchSearch)
  const pets = results?.data?.pets ?? []

  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 place-items-center items-start px-4 md:gap-8">
      <form
        className="mb-10 flex h-auto w-full max-w-[400px] flex-col gap-4 rounded-lg bg-gray-200 p-10 shadow-lg md:col-span-2"
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target)
          const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
          }
          setRequestParams(obj)
        }}
      >
        {adoptedPet ? (
          <div className="">
            <div className="carousel-smaller">
              <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
            </div>
            <h2>{adoptedPet.name}, is ready to meet you!</h2>
          </div>
        ) : null}
        <label className="form-label" htmlFor="location">
          Location
          <input
            className="form-input"
            type="text"
            name="location"
            id="location"
            placeholder="Location"
          />
        </label>
        <label className="form-label" htmlFor="Animal">
          Animal
          <select
            name="animal"
            id="animal"
            className="form-select"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value)
            }}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label className="form-label" htmlFor="Animal">
          Breed
          <select
            className="form-select"
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button className="mx-auto w-full max-w-[10rem] rounded-lg bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 px-4 py-2 text-center text-white shadow-lg">
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  )
}

export default SearchParams
