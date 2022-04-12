import "./Title.css"
import Contacts from "./Contacts"

function Title(){
    return(
        
            <div className="title-container">
            <h1 className="name">Thiha Swan Htet</h1>
            <br/>
            <p className="tagline">Junior backend developer.</p>
            <Contacts/>
            </div>

    )
}

export default Title;