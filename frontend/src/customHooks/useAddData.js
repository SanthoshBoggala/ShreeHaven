import { useState } from "react"

const useAddData = ()=>{
    const [data, setData] = useState(null);

    async function addData() {
        
    }

    try {
        addData()
    } catch (error) {
        console.log(error)
    }
}