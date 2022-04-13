import SectionTitleStyles from "./SectionTitle.module.css"

function SectionTitle(props){

    return (
            
                <h2 className={SectionTitleStyles.title} id={props.hash}>
                    <a className={SectionTitleStyles.text} href={"#"+props.hash}>{props.title}</a>
                    </h2>
    )
}

export default SectionTitle;