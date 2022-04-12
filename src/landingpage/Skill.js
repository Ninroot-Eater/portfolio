import "./Skill.css"

function Skill(props){
    return(
        <div className="skill">
            
            <p>{props.i}. {props.skill.name} ({props.skill.level})</p>
        </div>
    )
}

export default Skill;