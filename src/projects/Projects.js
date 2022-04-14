import ProjectsStyles from "./Projects.module.css";
import {useParams, Link, Outlet} from "react-router-dom";

import FourOFour from "../errorpage/FourOFour"

import ComingSoon from "./ComingSoon"
import Schedjuice4 from "./schedjuice4/index"


let projects = [
    {
        name: "schedjuice4",
        tools: ["Python", "Django"],

    },
    {
        name: "duwin",
        tools: ["Python", "GraphQL"],

    }
]


function Projects(){
    let s = ProjectsStyles;
    let p = useParams();

    let pro = projects.filter(c=>c.name==p.projectName) 
    return(
        pro.length == 0 ? <FourOFour/> : 
        <div className={s["big-div"]}>

            <div className={s["big-container"]}>
            {
                pro[0].element ? 
                pro[0].element :
                <ComingSoon project={pro[0].name}/>
            }
            </div>


        </div>
    )
}

export default Projects;