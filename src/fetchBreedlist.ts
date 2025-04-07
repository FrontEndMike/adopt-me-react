import { QueryFunction } from '@tanstack/react-query'
import { Animal, BreedListAPIResponse } from './APIResponsesTypes'

const fetchBreedlist: QueryFunction<
  BreedListAPIResponse,
  ['breeds', Animal]
> = async ({ queryKey }) => {
  const animal = queryKey[1]
  if (!animal) {
    throw new Error('Animal type is required to fetch breeds.')
  }
  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
  )
  console.log(apiRes, 'api fetched')
  if (!apiRes.ok) {
    throw new Error(`breeds/${animal} fetch not ok`)
  }

  return apiRes.json()
}

export default fetchBreedlist
