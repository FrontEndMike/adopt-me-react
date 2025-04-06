import React from 'react'
import { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'
import fetchPet from './fetchPet'
import Carousel from './Carousel'
import ErrorBoundary from './ErrorBoundary'
import Loader from './Loader'
import Modal from './Modal'
import { PetAPIResponse } from './APIResponsesTypes'

const Details = () => {
  const { id } = useParams()
  if (!id) {
    throw new Error('missing ID')
  }
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext)
  const results = useQuery<PetAPIResponse>(['details', id], fetchPet)

  if (results.isLoading) {
    console.log('loading')
    return (
      <div className="loading-pane">
        <Loader />
      </div>
    )
  }

  const pet = results?.data?.pets[0]
  if (!pet) {
    throw new Error('No Pet')
  }

  return (
    <div className="details p-4">
      <div className="mx-auto mb-8 max-w-[768px] rounded-2xl border-[1px] border-black bg-white p-4 shadow-lg">
        <Carousel images={pet.images} />
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-3xl">{pet.name}</h1>
          <h2 className="capitalize">{pet.animal}</h2>
          <h2>{pet.breed}</h2>
          <h2>
            {pet.city}, {pet.state}
          </h2>
          <p className="">{pet.description}</p>
          <div className="my-4">
            <button
              className="button mx-auto"
              onClick={() => setShowModal(true)}
            >
              Adopt {pet.name}
            </button>
          </div>
          {showModal ? (
            <Modal>
              <div className="w-full max-w-[400px] p-4">
                <h3 className="mb-4">Would you like to adopt {pet.name}?</h3>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet)
                      navigate('/')
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  )
}

export default DetailsErrorBoundary
