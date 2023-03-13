import {Link, NavLink} from "react-router-dom"
import "./navBar.css"

const icon = [
    {
        id: 1,
        src: '+37415700000'
    },
    {
        id: 2,
        src: <i className="fa-solid fa-heart"></i>
    },
    {
        id: 3,
        src: <i className="fa-sharp fa-solid fa-basket-shopping"> </i>
    },
    {
        id: 4,
        src: <i className="fa-regular fa-user"> </i>
    },
    {
        id: 5,
        src: <i className="fa-sharp fa-solid fa-arrow-down"></i>
    },
    {
        id: 6,
        src: <i className="fa-solid fa-bars"></i>
    },


]

function Nav() {
    return (
        <div className="hadr">
            <Link to="/" className="logo"><img src=' https://www.mobilecentre.am/assets/img/logo.svg' className="poto"/></Link>
            <div className="input-div">
                <input className="input-div-div" type='text' placeholder="Որոնում"/>
            </div>
            <nav>
                <ul className="nav">
                    {
                        icon.map(({id, src, to}) => (
                            <NavLink key={id} to={to} className='nav-li'> {src}  </NavLink>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Nav 


