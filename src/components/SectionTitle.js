import SectionTitleStyles from "./SectionTitle.module.css"

function SectionTitle(props){

    return (
            <a href={"#"+props.hash}>
                <h2 className={SectionTitleStyles.title} id={props.hash}>{props.title}</h2>
            </a>
    )
}

export default SectionTitle;