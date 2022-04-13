import "./Skills.css"


import SectionTitle from "../components/SectionTitle"
import Tabs from "../components/Tabs"

import skills from "../data" 




function Skills(){
    console.log(skills)
    return(
        <div>
            <SectionTitle hash="programming-skills" title="Programming skills"/>

            <Tabs titles={skills}/>
                
        </div>
    )
}

export default Skills;