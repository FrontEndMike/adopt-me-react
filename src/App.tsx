import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import AdoptedPetContext from './AdoptedPetContext'
import Details from './Details'
import SearchParams from './SearchParams'
// import Loader from './Loader'
import { Pet } from './APIResponsesTypes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
})

const App = () => {
  const adoptedPet = useState(null as Pet | null)
  return (
    <div
      className="mt-0 pb-8 pt-0"
      style={{
        background: 'url(https://pets-images.dev-apis.com/pets/wallpaperB.jpg)',
      }}
    >
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <header className="mb-10 w-full bg-gradient-to-b from-blue-400 via-blue-700 to-blue-900 p-7 text-center text-white">
              <Link to="/">
                <h1 className="text-4xl hover:text-gray-200">Adopt Me!</h1>
              </Link>
            </header>
            <Routes>
              <Route path="details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  )
}

const container = document.getElementById('root')

if (!container) {
  throw new Error('no container to render')
}
const root = createRoot(container)
root.render(<App />)
