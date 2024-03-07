import './header.css'
import logo from '../../assets/logo2.png'
import email from '../../assets/email.png'
import call from '../../assets/call.png'
import facebook from '../../assets/facebook.png'


const Header = ()=>{

    return(
        <nav className="navbar">
            <div className='info_div'>
                <button><img src={call} alt='.' id='top_icon'/>650814245</button>
                <button><img src={email} alt='.' id='top_icon'/>nyaah73@gmail.com</button>
                <button><img src={facebook} alt='.' id='top_icon'/>Kamer Motors</button>
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