import { useContext } from 'react';
import { mycontext } from '../Context Folder/Context';

import './header.css'


function Header(props) {
const islogin=useContext(mycontext).islogin

    return (

        <header>
            <div className="container">
                <div className="headerWrapper">
                    <div className="logo">Ajio</div>
                    <nav>
                        <a href="#">Login</a>
                            
                       {islogin==true &&  <button onClick={props.logout} className="logout">Logout</button>}
                    </nav>
                    
                </div>

            </div>
        </header>

    )


}
export default Header;