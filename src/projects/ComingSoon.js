import {Link, useLocation} from "react-router-dom"

function ComingSoon(props){
    let l = useLocation();


    window.scrollTo(0,0)


    return(
        <div style={{textAlign: "center", marginTop: "100px"}}>
            <h1>Case study on <span style={{textDecoration:"underline"}}>{props.project}</span> is coming soon!</h1>
            <Link to="/" state={{scroll: l.state?.scroll}} style={{textDecoration:"underline"}}>go back</Link>.
        </div>
    )
}

export default ComingSoon;