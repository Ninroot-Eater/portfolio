import React, {useState} from "react";

import TabsStyles from "./Tabs.module.css"

function Tabs(props){
    const [active, setActive] = useState(0)
    const [page, setPage]= useState(0)
    let per_page = 3;
    let pages = [];
    for(let i=0;i<Math.ceil(props.titles.length/per_page); i++){
        pages.push(i)
    }
    let titles = props.titles
    
    function changePage(i){
        setPage(i)
        setActive(i*per_page)
    }

    return(
        <div className={TabsStyles.container}>
            <div className={TabsStyles["title-container"]}>
                {
                    titles.filter(i=>(
                        i.page==page
                    ))
                    .map(i=>(

                            <div
                                key={i.name} 
                                className={titles.indexOf(i)==active ? `${TabsStyles.title} ${TabsStyles.active}`: TabsStyles.title}
                                onClick={()=>{setActive(titles.indexOf(i))}}>
                                <p>{i.name}</p>
                            </div>

                    ))
                }
            </div>
            <div className={TabsStyles["content-n-page"]}>
            <div className={TabsStyles["content-container"]}>
                {
                    titles.filter(i=>(titles.indexOf(i) == active)).map(
                        i=>(
                            <div>
                                <h4>{i.title}</h4>
                                <p className={TabsStyles.secondary}><i>{i.secondary}</i></p>
                                <div className={TabsStyles.content}><p>{i.content}</p></div>
                            </div>
                        )
                    )
                }
            </div>
            <div className={TabsStyles["page-container"]}>
                
                {
                    pages.map(i=>(

                            <p key={i} 
                        onClick={()=>{ changePage(pages.indexOf(i)) }} 
                        className={pages.indexOf(i)==page ? `${TabsStyles.page} ${TabsStyles["active-page"]}`: TabsStyles.page}>{i}</p>

                    ))
                }
            </div>
            </div>
        </div>
    )
}


export default Tabs;