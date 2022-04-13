import "./Title.css"
import Contacts from "./Contacts"
import SectionTitle from "../components/SectionTitle";


function Title(){
    return(
        
            <div className="heading-container">
                <div className="title-container">
                <h1 className="name">Thiha Swan Htet</h1>
                <br/>
                <p className="tagline">Junior backend developer.</p>
                <Contacts/>
                
                </div>
                <p className="heading-tagline">
                I am Thiha Swan Htet, a passionate and aspiring CS student from Myanmar.
                This is my story. 
                </p>
                <SectionTitle hash="highlights" title="Highlights"/>
                <div className="highlight-row">
                    <div className="highlight-column">
                        <p className="highlight-item">
                            Project: Schedjuice4
                        </p>
                    </div>
                    <div className="highlight-column">
                        <p className="highlight-item">
                            Blog: How to flirt with older women
                        </p>
                    </div>
     
                </div>
            </div>

    )
}

export default Title;