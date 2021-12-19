import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(params) {
  //const RANDOM_USER_URL = `https://randomuser.me/api/?seed=${arg}`;
  //"http://hipsum.co/api/?type=hipster-centric&sentences=1"

  const RANDOM_USERS_URL = `https://randomuser.me/api/?results=${params}`
  const RANDOM_TEXT_URL = "https://baconipsum.com/api/?type=meat-and-filler&sentences=1";
  let url = params ? RANDOM_USERS_URL : RANDOM_TEXT_URL

//   const BASE_URL = "https://dummyapi.io/data/v1/"
//   const header = {
//     headers: {
//       'app-id': '61beacbffc0a8238be761966'
//     }
//   }

//   const {
//     users
//   } = params

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error };
}
