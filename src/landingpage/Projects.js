import s from "./Projects.module.css"

import {projects} from "../projects/Projects"
import Tabs2 from "../components/Tabs2"

import SectionTitle from "../components/SectionTitle"


function Projects(){
    projects.map(c=>(
        c.content=c.description,
        c.nav=c.name,
        c["primary-link"] = "/"+c.link,
        c["primary"] = "Read the case study on "+c.name
    ))


    return(
        <div className={s.wrapper}>
            <SectionTitle title="Projects" hash="projects"/>
            <div className={s.container}>
                <Tabs2 items={projects} scroll="/#about-me"/>
            </div>

        </div>
    )
}


export default Projects