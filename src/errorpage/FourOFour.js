import errorStyles from "./error.module.css"

import {Link} from "react-router-dom";


function FourOFour(){
    return(
        <div className={errorStyles.container}>
            <p>Error 404. Page not found. &nbsp;&nbsp;&nbsp;&nbsp;</p>

            <Link to="/" style={{textDecoration:"underline"}}>go back</Link>.
        </div>
    )
}

export default FourOFour;