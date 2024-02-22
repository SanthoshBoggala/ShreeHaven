import { createContext, useState } from "react";

const UserContext = createContext()

export default UserContext

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        username: 'santhosh',
        type: 'admin',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyZmNjNTczZDg2MjQyYTU0ZTIzNGUiLCJlbWFpbCI6InNAZ21haWwuY29tIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzA4NTc2OTg2LCJleHAiOjE3MTExNjg5ODZ9.ebt_pur_g986K8Hu1cg2eU0zhaROBA4WN2VTVBd4tNY'
    })
    return (
        <UserContext.Provider value={ {user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
