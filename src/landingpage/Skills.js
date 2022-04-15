import s  from "./Skills.module.css"


import SectionTitle from "../components/SectionTitle"
import Tabs from "../components/Tabs"

import skills from "../data" 


function whatToRender(obj){
    if (obj.image){
        return (
            <img className={s["logo-image"]} src={"/images/logos/"+obj.image}/>
        )
    }
    return(<p className={s["logo-text"]}>{obj.text}</p>)
}



function Skills(){

    return(
        <div>
            <SectionTitle hash="programming-skills" title="Programming skills"/>
            <div className={s["image-wrapper"]}>
                {
                    skills.map(c=>(
                        <div>
                            {whatToRender(c)}
                        </div>
                    ))
                }
            </div>

            <Tabs titles={skills}/>
                
        </div>
    )
}

export default Skills;