import s from "./Tabs2.module.css";
import {useState} from "react";

import {Link} from "react-router-dom";


function Tabs2(props){
    
    const [active, setActive] = useState(0)


    let items = props.items;
    
    return (
        <div className={s.wrapper}>
            <div className={s["nav-container"]}>
                {
                    items.map(c=>(
                        <div onClick={()=>setActive(items.indexOf(c))}
                        className={active==items.indexOf(c) ? `${s["nav-item-container"]} ${s.active}` : s["nav-item-container"]}>
                            {c.nav}
                        </div>
                    ))
                }
            </div>
            <div className={s["content-container"]}>
                <div className={s.content}>
                {
                    items.filter(c=>(
                        items.indexOf(c) == active
                    )).map(c=>(
                        <div>
                            {c.content}
                        </div>           
                    ))
                }
                </div>
                <div><a className={s["primary-link"]}>
                    {
                        <Link to={items.filter(c=>(items.indexOf(c)==active))[0]["primary-link"]}
                        state={{scroll: props.scroll}}>
                            {items.filter(c=>(items.indexOf(c)==active))[0]["primary"]}
                        </Link>
                    }
                </a></div>
            </div>
            
            
        </div>
    )
}


export default Tabs2;