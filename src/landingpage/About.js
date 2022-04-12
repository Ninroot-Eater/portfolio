import AboutStyles from "./About.module.css"
import SectionTitle from "../components/SectionTitle"



function About(){
    return(
        <div className={AboutStyles["outer-container"]}>
            
            <div className={AboutStyles["nav-container"]}>
                <div className={AboutStyles["about-title"]}>
                <SectionTitle hash="about-me" title="About me" />
                
                </div>

            </div>

            
            <div className={AboutStyles["inner-container"]}> 

            

            <p className={AboutStyles["about-para"]}>
                &emsp; I am Thiha Swan Htet, a passionate and aspiring CS student from Myanmar.
                This is my story.
            </p>
            <h3 className={AboutStyles["inner-heading"]}>How I started programming</h3>
            <p className={AboutStyles["about-para"]}>
                Since I was a kid, <b>systems</b> have always fascinated me.
            </p>


        </div>
        </div>
    )
}

export default About;