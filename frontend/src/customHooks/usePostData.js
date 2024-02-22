import axios from "axios"
import { useState } from "react"

const usePostData = ({url, body, authorization = ''}) => {
    const [sending, setSending] = useState(null)
    const [data, setData] = useState({})
    const [error, setError] = useState(null)

    const sendData = async () => {
        try {
            setSending(true)
            const response = await axios.post(url,{ ...body } ,{
                headers: {
                    authorization
                }
            })
            setData(response.data)
            setError(null)
        } catch (error) {
            console.error("Error fetching data:", error)
            setError(error)
        } finally {
            setSending(false)
        }
    }

    return { sending, data, error, sendData }
}

export default usePostData
