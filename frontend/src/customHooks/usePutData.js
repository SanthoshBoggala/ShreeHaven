import axios from "axios"
import { useState } from "react"

const usePutData = () => {
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)

  const sendData = ({ url, body, token = "" }) => {
    setSending(true)

    return new Promise((resolve, reject) => {    
      axios
        .put(url, { ...body }, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          resolve(res.data)
        })
        .catch((err) => {
          setError(err)
          reject(err)
        })
        .finally(() => {
          setSending(false)
        })
    })
  }

  return { sending, error, sendData }
}

export default usePutData
