import { QueryStatus, useQuery } from '@tanstack/react-query'
import fetchBreedlist from './fetchBreedlist'
import { Animal } from './APIResponsesTypes'

const useBreedList = (animal: Animal): [string[], QueryStatus] => {
  const results = useQuery(['breeds', animal], fetchBreedlist, {
    enabled: Boolean(animal && animal.length > 0),
  })

  return [results?.data?.breeds ?? [], results.status]
}

export default useBreedList
