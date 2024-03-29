import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
//import * as BsIcons from 'react-icons/bs';
import {SidebarData} from './Data/SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons'

function Navbar(){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
            <IconContext.Provider value={{color:'#ffg'}}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    
                </div>
                
                <nav className={sidebar? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbare-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar}/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                            {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>


    )
}

export default Navbar;
