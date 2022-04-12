import "./Skills.css"

import Skill from "./Skill"

let skillList = [
    {
        name: "Python",
        level: "very good",
    },
    {
        name: "Django",
        level: "very good",
    },
    {
        name: "REST API development",
        level: "very good",

    },
    {
        name: "Microsoft Graph API",
        level: "good",
    },
    {
        name: "Git",
        level: "good"
    },
    {
        name: "GraphQL development",
        level: "good"
    },
    {
        name: "JavaScript",
        level: "good"
    },
    {
        name: "Flask",
        level: "good"
    },
    {
        name: "Vue",
        level: "good"
    },
    {
        name: "PostgreSQL",
        level: "good"
    },
    {
        name: "Linux (Ubuntu) (good)",
        level: "good"
    },
    {
        name: "Nginx",
        level: "good"
    },
    {
        name: "HTML, CSS",
        level: "good"
    },
    {
        name: "React",
        level: "learning"
    },
    {
        name: "Go",
        level: "learning"
    },
    {
        name: "FastAPI",
        level: "basic understanding"
    }
]

function indexMaker(i){


    if ((i+1).toString().length > 1){
        return i+1
    }
    return "0"+(i+1)
}

function Skills(){

    return(
        <div>
            <h2 id="programming-skills" className="skill-title">Programming skills</h2>
            {
            skillList.map(
                
                c=> (<Skill skill={c} i={indexMaker(skillList.indexOf(c))} key={c.name}/>)
                
                
            )}
        </div>
    )
}

export default Skills;