import React from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Details from './Details'
import SearchParams from './SearchParams'
import AdoptedPetContext from './AdoptedPetContext'

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
      className="mt-0 pt-0"
      style={{
        background: 'url(https://pets-images.dev-apis.com/pets/wallpaperB.jpg)',
      }}
    >
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="mb-10 w-full bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 p-7 text-center text-white">
              <Link to="/">
                <h1 className="text-4xl hover:text-gray-200">Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
