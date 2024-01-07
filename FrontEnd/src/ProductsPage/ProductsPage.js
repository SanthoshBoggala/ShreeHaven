import React, { useEffect, useState } from "react"
import SideBar from "../Components/SideBar/SideBar"
import Products from "../Components/Products/Products"

const ProductPage = ()=>{
    const [filter , setFilter] = useState(null)

    useEffect(()=>{
        function getCategories(){
            let categories = ['Shirts', 'Pants', 'Hoodies', 'Shoes', 'Cargos' ] 

            const categories1 = categories.map((c)=>{
                return { name: c , isChecked: true }
            }) 
            const allCategories = [
                ...categories1, 
                {name : 'priceUnder', price : ''},
                {name : 'sortOrder', sortOption : 'lowToHigh' }
                ]
            setFilter(allCategories)
        }
        getCategories()
    }, [])
    
    const handleFilter = (e)=>{
        const { name, value , type} = e.target

        setFilter((prev)=>
            prev.map(item => {
                if(item.name === name && type === 'number'){
                    return {...item, price : value}
                }
                if(item.name === name && type === 'radio'){
                    return {...item, sortOption : value}
                }
                if(item.name === name && type === 'checkbox'){
                    return { ...item, isChecked : !item.isChecked }
                }   
                else{
                    return item
                }
            })
        )
    }

    console.log(filter)
    return (
        <>
        <div className="row">
            <SideBar 
                filter = {filter}
                onChange = {(e)=> handleFilter(e)}        
            />
            <Products />
        </div>
        </>
    )
}

export default ProductPage