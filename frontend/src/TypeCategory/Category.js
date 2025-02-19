import React, {useContext} from 'react'
import './typeCategory.css'
import useModifyData from '../customHooks/useModifyData'
import UserContext from '../contexts/userContext'
import { toast, ToastContainer } from 'react-toastify'
import TypesCatesContext from '../contexts/TypesCatesContext'

const Category = ({type, category }) => {
  const { token } = useContext(UserContext)
  const { refreshCategories } = useContext(TypesCatesContext)
  const url = `${process.env.REACT_APP_BACKEND_URL}api/type_category`

  const { modifyData } = useModifyData({url, method: "PUT", token})
  const removeCategory = async()=>{
    try {
        await modifyData({category, type})
        
        toast.success("Successfully deleted category")
        refreshCategories()
        
    } catch (error) {
        toast.error("Failed to delete one!")
    }
  }

  return (
    <div className='category col-lg-2 col-md-3 col-sm-4 col-6'>
      {category}
      {<span
        onClick={removeCategory}
        className='addSpan'
      >🚫
      </span>}
      <ToastContainer />
    </div>
  )
}

export default Category
