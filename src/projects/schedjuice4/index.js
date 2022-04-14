import Title from "../../landingpage/Title";
import { Link } from "react-router-dom";


function Schedjuice4(){
    return(
        <div className="bigdiv">
          <div className="big-container">
            <div className="inner-container" style={{marginBottom: "30%"}}>
                <h1>Case study on <span style={{textDecoration: "underline"}}>Schedjuice4</span> is coming soon!</h1>
                <Link to="/" style={{textDecoration:"underline"}}>go back</Link>.
            </div>
            
          </div>

        </div>
    )
}

export default Schedjuice4;