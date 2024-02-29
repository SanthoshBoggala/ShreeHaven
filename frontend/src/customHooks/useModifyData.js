import axios from "axios"
import { useState } from "react"

const useModifyData = ({ url, method = "POST", token = "" }) => {
    const [state, setState] = useState({
        data: {},
        isSending: false,
        error: ""
    })
    let modifyData
    if(method === "POST"){
        modifyData = async (data) => {
            try {
                setState({ isSending: true, error: "", data: {} })
                const res = await axios.post(url,{...data}, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setState({ isSending: false, error: "", data: res.data })
            } catch (error) {
                setState({ isSending: false, error, data: {} })
            }
        }
    }
    else if(method === "PUT"){
        modifyData = async (data) => {
            try {
                setState({ isSending: true, error: "", data: {} })
                const res = await axios.put(url,{...data}, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setState({ isSending: false, error: "", data: res.data })
            } catch (error) {
                setState({ isSending: false, error, data: {} })
            }
        }
    }
    else if(method === "DELETE"){
        modifyData = async (data) => {
            try {
                setState({ isSending: true, error: "", data: {} })
                const res = await axios.delete(url,{...data}, {
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                setState({ isSending: false, error: "", data: res.data })
            } catch (error) {
                setState({ isSending: false, error, data: {} })
            }
        }
    }
    return { modifyData,...state }
}

export default useModifyData