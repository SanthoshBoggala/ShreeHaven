import { createContext, useState } from "react";

const TypesCatesContext = createContext()

export default TypesCatesContext

export const TypesCatesContextProvider = ({children}) => {
    const [typesCates, setTypesCates ] = useState([
        {
          type: "Men",
          categories: [
            {
              category: "Shirts",
            },
            {
              category: "T-Shirts",
            },
            {
              category: "Winter Wear",
            },
            {
              category: "Jeans & Trousers",
            },
            {
              category: "Shorts",
            },
            {
              category: "Formal-Shirts",
            },
            {
              category: "Watches",
            }
          ]
        },
        {
          type: "Women",
          categories: [
            {
              category: "Sarees",
            },
            {
              category: "Dresses",
            },
            {
              category: "Jeans",
            },
            {
              category: "T-shirts",
            },
            {
              category: "Trousers",
            },
            {
              category: "Kurtas",
            },
            {
              category: "Winter Wear",
            },
            {
              category: "Watches",
            }
          ]
        }
      ])

    return (
        <TypesCatesContext.Provider value = {{ typesCates, setTypesCates }}>
            {children}
        </TypesCatesContext.Provider>   
    )
}