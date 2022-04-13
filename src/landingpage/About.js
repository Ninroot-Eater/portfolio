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

            
            <h3 className={AboutStyles["inner-heading"]}>What I do mostly (these days)</h3>
            <p className={AboutStyles["about-para"]}>
                &emsp; These days, I mostly work on the backend (which would explain the 
                extremely simple design of this site). I develop REST and GraphQL APIs
                with Python using the <a href="https://www.djangoproject.com/">Django</a> framework.
                I am also learning <a href="https://reactjs.org/">React</a> (this is made using React)
                and <a href="https://go.dev/">Go</a>.

            </p>
            <h3 className={AboutStyles["inner-heading"]}>How I started programming</h3>
            <p className={AboutStyles["about-para"]}>
                &emsp; Since I was a kid, systems have always fascinated me. 
                Like most people starting out programming, I wanted to make video games. 
                So, I tried to get into programming once I finished high school (which was 
                in 2020 March). Initially, I thought I was not smart enough to become a programmer.
                I did not even know how to use a computer that well. But, with the help 
                of <a href="https://www.sololearn.com/">Sololearn</a> and <a href="https://openbookproject.net/thinkcs/python/english3e/">
                    How to Think Like a Computer Scientist
                </a> (one of my favourite books), I found myself tinkering at my computer days and nights,
                 and I decided that this was what I wanted to do for the rest of my life.
            </p>


        </div>
        </div>
    )
}

export default About;