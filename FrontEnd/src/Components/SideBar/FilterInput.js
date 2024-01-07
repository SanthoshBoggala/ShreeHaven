

const FilterInput = ({categoryType, onChange})=>{

    const isCheckBoxInput = (x)=>{
        if(x.name === 'sortOrder' || x.name ===  'priceUnder') {
            return false
        }
        return true
    }

    return (
        <>
            {  isCheckBoxInput(categoryType) && (
                <>  
                    <div className="filterInput">
                        <input 
                            className = 'styleInput'
                            type = "checkbox"
                            name = {categoryType.name}
                            checked = {categoryType.isChecked}
                            onChange = {(e)=> onChange(e)}
                        /> 
                        <label className="styleLabel">  
                        {categoryType.name} 
                        </label>
                        <br />
                    </div>
                </>
            )
            }
            {  categoryType.name === 'priceUnder' && (
                <>
                    <div className="filterInput">
                        <label className="priceLabel"> Price Under </label> <br/>
                        <input 
                            className = 'stylePrice'
                            type = "number"
                            name = {categoryType.name}
                            value = {categoryType.price}
                            onChange = {(e)=> onChange(e)}
                        /> 
                        <br />
                    </div>
                </>
            )
            }
            {  categoryType.name === 'sortOrder' && (
                <>
                    <div className="filterInput">
                        <label className="priceLabel"> Order </label> <br/>
                        <input 
                            className = 'styleInput'
                            type = "radio"
                            name = {categoryType.name}
                            value = "lowToHigh"
                            defaultChecked
                            onChange = {(e)=> onChange(e)}
                        />
                        <label className="styleLabel">Low to High </label> 
                        <br />
                        <input 
                            className="styleInput"
                            type = "radio"
                            name = {categoryType.name}
                            value = 'highToLow'
                            onChange = {(e)=> onChange(e)}
                        /> 
                        <label className="styleLabel"> High to Low </label> 
                        <br />
                    </div>
                </>
            )
            }
        </>
    )
}

export default FilterInput