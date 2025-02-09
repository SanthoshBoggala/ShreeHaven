import axios from "axios"
import { createContext, useEffect, useState } from "react"

const TypesCatesContext = createContext()

export default TypesCatesContext

export const TypesCatesContextProvider = ({children}) => {
    const [typesCates, setTypesCates ] = useState([])

    useEffect(()=>{
      async function getCates(){
        const url = `${process.env.REACT_APP_BACKEND_URL}api/type_category`

        const res = await axios.get(url)

        setTypesCates(res.data.typecategories)
      }

      try {
        getCates()
      } catch (error) {
        console.log(error)
      }
    }, [])

    return (
        <TypesCatesContext.Provider value = {{ typesCates, setTypesCates }}>
            {children}
        </TypesCatesContext.Provider>   
    )
}