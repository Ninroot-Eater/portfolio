import {useState} from "react";
import MenuStyles from "./Menu.module.css"
import {navItems} from "../landingpage/Nav"


function Menu(){

    const [isActive, setActive] = useState(false)
    
    function expand(){
        setActive(!isActive)
    }

    return(
        <div>
            <div 
            className={!isActive ? MenuStyles.wrapper : `${MenuStyles.wrapper} ${MenuStyles.active}`}>
            
            <div onClick={expand}
            className={!isActive ? MenuStyles.menu : `${MenuStyles.menu} ${MenuStyles["menu-active"]}`}>
                {isActive ? <div className={MenuStyles["button"]}><b>CLOSE MENU</b></div> : <div className={MenuStyles["button"]}><b>OPEN MENU</b></div> }
            </div>

                {
                    navItems.map(c=>(
                        <div className={
                            isActive ? `${MenuStyles["menu-item"]} ${MenuStyles["item-active"]}` : MenuStyles["menu-item"]
                        }><p><a onClick={expand} href={c.href}>{c.text}</a></p></div>
                    ))
                }
       

        </div>
      
        </div>
    )
}

export {Menu};