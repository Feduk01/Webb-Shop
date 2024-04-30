import {useState} from 'react'
function DropDown ({onSelectCategory}) {
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

function HeaderBot({onCategoryChange }){

    const [showDropdown, setShowDropdown] = useState(false);
    return(
       <section className="header-bot-container">
            <div className="header-bot-btn">
                    <button>Filter</button>
                    <button className='category' onClick={() => setShowDropdown(!showDropdown)}>Kategori</button>
                {showDropdown && <DropDown onSelectCategory={(category) => {
                    onCategoryChange(category);
                    setShowDropdown(false);
                }} />}
            </div>
                <input type="text" placeholder="Hej! Vad letar du efter?" />
       </section>
    )
}




export default HeaderBot