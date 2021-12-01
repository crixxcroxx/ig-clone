import { useEffect, useState } from 'react';

export default function useFetch(route) {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    let res = await fetch(`${baseUrl}/${route}`).catch(err => console.error(err))
    let resData = await res.json().catch(err => console.error(err))

    setData(resData)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { isLoading, data };
}

