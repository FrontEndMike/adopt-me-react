import React, { Suspense } from 'react'
import { useState, lazy } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedPetContext from './AdoptedPetContext'
import Loader from './Loader'

const Details = lazy(() => import('./Details'))
const SearchParams = lazy(() => import('./SearchParams'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null)
  return (
    <div
      className="mt-0 pb-8 pt-0"
      style={{
        background: 'url(https://pets-images.dev-apis.com/pets/wallpaperB.jpg)',
      }}
    >
      <AdoptedPetContext.Provider value={adoptedPet}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <header className="mb-10 w-full bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 p-7 text-center text-white">
              <Link to="/">
                <h1 className="text-4xl hover:text-gray-200">Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </AdoptedPetContext.Provider>
    </div>
  )
}

export default App
