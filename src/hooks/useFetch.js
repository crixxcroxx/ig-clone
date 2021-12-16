import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(endpoint) {
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/${endpoint}`)
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [endpoint])

  return { data, loading, error };
}
