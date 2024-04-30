import {useState} from 'react'
import {useStore} from '../../data/store.js'

function DropDownCategory ({onSelectCategory}) {
    return(
        <div className="dropdownCategory">
            <ul className='ul-container'>
                <li onClick={() => onSelectCategory('Vattenpistol')}>Vattenpistol</li>
                <li onClick={() => onSelectCategory('Sandlåda leksaker')}>Sandlåda leksaker</li>
                <li onClick={() => onSelectCategory('Flygande leksaker')}>Flygande leksaker</li>
                <li onClick={() => onSelectCategory('Badleksaker')}>Badleksaker</li>
                <li onClick={() => onSelectCategory('Utomhusspel')}>Utomhusspel</li>
                <li onClick={() => onSelectCategory('Vattenspridare')}>Vattenspridare</li>
            </ul>
        </div>
    )
}

function DropDownFilter ({onSelectFilter}){
    return(
        <div className="dropdownFilter">
            <ul className='ul-container'>
                <li onClick={() => onSelectFilter('Price')}>Pris</li>
                <li onClick={() => onSelectFilter('Alphabet')}>Alfabet A-Ö</li>
            </ul>
        </div>
    )
}

function HeaderBot(){

    const [showDropdownCategory, setShowDropdownCategory] = useState(false);
    const [showDropdownFilter, setShowDropdownFilter] = useState(false);
    const {setSelectedCategory,setSelectedFilter, setSearchedProduct} = useStore(state =>({
        setSelectedFilter: state.setSelectedFilter,
        setSelectedCategory: state.setSelectedCategory,
        setSearchedProduct: state.setSearchedProduct
    }));
    return(
       <section className="header-bot-container">
            <div className="header-bot-btn">
                    <button className='filter' onClick={() => setShowDropdownFilter(!showDropdownFilter)}>Filter</button>
                    {showDropdownFilter && <DropDownFilter onSelectFilter={(filter) =>{setSelectedFilter(filter); setShowDropdownFilter(false) }}/>}
                    <button className='category' onClick={() => setShowDropdownCategory(!showDropdownCategory)}>Kategori</button>
                    {showDropdownCategory && <DropDownCategory onSelectCategory={(category) => {setSelectedCategory(category); setShowDropdownCategory(false)}} />}
            </div>
                <input type="text" placeholder="Hej! Vad letar du efter?" onChange={(e) => setSearchedProduct(e.target.value)} />
       </section>
    )
}




export default HeaderBot