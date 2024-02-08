import './sidebar.css'
import FilterInput from "./FilterInput"

const SideBar = ({ filter , onChange})=>{

    return (
        <div className="col-lg-2 col-md-3 col-4 sideBar">
            <div className='filter filterInput'>Filter</div>
            <form >
                {filter && filter.map((categoryType)=>{
                    return (
                        <FilterInput 
                            key={filter.indexOf(categoryType)} 
                            categoryType={categoryType}
                            onChange = {(e)=> onChange(e)}
                        />
                    )
                })}
            </form>
        </div>
    )
}

export default SideBar