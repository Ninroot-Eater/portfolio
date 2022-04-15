import s from "./Projects.module.css"

import {projects} from "../projects/Projects"
import Tabs2 from "../components/Tabs2"

import SectionTitle from "../components/SectionTitle"
import {useRef, useState, useEffect} from "react";

function Projects(){

    let x = useRef();

    const [pos, setPos] = useState(null);
    
    useEffect(()=>{
        setPos(x.current.offsetTop)
    })

    function temp(){
        return pos
        
    }
    projects.map(c=>(
        c.content=c.description,
        c.nav=c.name,
        c["primary-link"] = "/"+c.link,
        c["primary"] = <>Read the case study on <span style={{textDecoration: "underline"}}>{c.name}</span></>
    ))


    return(
        <div className={s.wrapper} ref={x} >
            <SectionTitle title="Projects" hash="projects"/>
            <div className={s.container}>
                <Tabs2 items={projects} scroll={temp()}/>
            </div>

        </div>
    )
}


export default Projects