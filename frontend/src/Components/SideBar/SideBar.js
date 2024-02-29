import './sidebar.css'
import FilterInput from "./FilterInput"
import sideBarIcon from '../../Images/sideBarIcon.png'
import { useContext, useEffect } from 'react'
import { SelectedFilters } from '../../contexts/SelectedFilters'
import UserContext from '../../contexts/userContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const SideBar = ({ ChangeFilterShow, filterShow }) => {
    const { filters, setFilters } = useContext(SelectedFilters)
    const { user, token } = useContext(UserContext)
    const { category } = useParams()

    useEffect(()=>{
        async function getCates() {
            const myCates = await axios.get(`http://localhost:5000/api/type_category?type=${category}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            let cates = {}
            myCates.data.typecategories.categories.map(one => {
                cates[one.category] = true
                return one
            })
            setFilters(one => ({ ...cates, ...one }))
        }
        try {
            getCates()
        } catch (error) {
            console.log(error)
        }
    }, [category])

    return (
        <div className={`sideBar offcanvas offcanvas-start ${filterShow}`} data-bs-scroll="true" >
            <div className="offcanvas-header filterSideBar">
                <div className='filterHeading'>Filter</div>
                <div className='filterIcon'>
                    <img
                        src={sideBarIcon}
                        alt='side-bar-icon'
                        onClick={ChangeFilterShow}
                    />
                </div>
            </div>
            <div className='offcanvas-body'>
                <form >
                    {filters && Object.keys(filters).map((categoryType, index) => {
                        return (
                            <FilterInput
                                key={index}
                                categoryType={categoryType}
                            />
                        )
                    })}
                </form>

            </div>
        </div>
    )
}

export default SideBar