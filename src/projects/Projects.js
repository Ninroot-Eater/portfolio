import ProjectsStyles from "./Projects.module.css";
import {useParams, Link, Outlet} from "react-router-dom";

import FourOFour from "../errorpage/FourOFour"

import ComingSoon from "./ComingSoon"



let projects = [
    {
        name: "Schedjuice4",
        tools: [
            "Python",
            "Django REST Framework",
            "Microsoft Graph API",
            "Celery"
        ],
        link: "schedjuice4",
        description: "A REST API for a CMS for my school/work. With integration with Microsoft services."

    },
    {
        name: "Duwin",
        tools: [
            "Python",
            "GraphQL",
            "django-graphene",
            "Django REST framework"
        ],
        link: "duwin",
        description: "A GraphQL API (also has some REST endpoints) for an e-library. The source code is very experimental."

    },
    {
        name: "Certify",
        tools: [
            "Python",
            "Pillow"
        ],
        link: "certify",
        description: "A certificate-generating Python desktop app."
    },
    {
        name: "CAE Bot",
        tools: [
            "Python",
            "discord.py"
        ],
        link: "cae-bot",
        description: "A game discord bot I built for fun."
    }

]


function Projects(){
    let s = ProjectsStyles;
    let p = useParams();

    let pro = projects.filter(c=>c.link==p.projectName) 
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

export {Projects, projects};