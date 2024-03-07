import './header.css'
import logo from '../../assets/logo2.png'

const Header = ()=>{

    return(
        <nav className="navbar">
            <div className='info_div'>
                <button>650814245</button>
                <button>nyaah73@gmail.com</button>
                <button>Kamer Motors</button>
            </div>
            <img
                src={logo}
                alt="logo" 
                id="logo"
            />
            <button id="sell_btn">Sell Cars</button>
        </nav>
    )
}

export default Header