import './header-top.css'
import HeaderTop from "./HeaderTop"
import HeaderBot from "./HeaderBot"

function Header(){
    return(
        <header className='header-container' style={{backgroundColor: 'red'}}>
            <HeaderTop />
            <HeaderBot />
        </header>
    )
}




export default Header