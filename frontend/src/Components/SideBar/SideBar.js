import './sidebar.css'
import FilterInput from "./FilterInput"
import sideBarIcon from '../../Images/sideBarIcon.png'


const SideBar = ({ filter, onChange, rating, ratingHandle, ChangeFilterShow, filterShow }) => {

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
                    {filter && filter.map((categoryType) => {
                        return (
                            <FilterInput
                                key={filter.indexOf(categoryType)}
                                categoryType={categoryType}
                                onChange={(e) => onChange(e)}
                            />
                        )
                    })}
                    <div className="filterInput">
                        <label className="customerRatings"> CustomerRatings </label> <br />
                        <input type='radio' className='' name='rating' value={'4'} checked={rating === '4'} onChange={ratingHandle} /> 4 <span className='star'>★</span>& above <br /> 
                        <input type='radio' className='' name='rating' value={'3'} checked={rating === '3'} onChange={ratingHandle} /> 3 <span className='star'>★</span>& above <br />
                        <input type='radio' className='' name='rating' value={'2'} checked={rating === '2'} onChange={ratingHandle} /> 2 <span className='star'>★</span>& above <br />
                        <input type='radio' className='' name='rating' value={'1'} checked={rating === '1'} onChange={ratingHandle} /> 1 <span className='star'>★</span>& above <br />
                    </div>
                </form>

            </div>
        </div>
    )
}

export default SideBar