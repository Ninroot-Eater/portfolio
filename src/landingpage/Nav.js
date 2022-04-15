import "./Nav.css"

let navItems = [
    {
        text: "Contacts",
        href: "#contacts"
    },
    {
        text: "Highlights",
        href: "#highlights"
    },
    {
        text: "Skills",
        href: "#programming-skills"
    },
    {
        text: "Projects",
        href: "#projects"
    },
    {
        text: "About",
        href: "#about-me"
    }
]


function Nav(){
    return(
        <div className="nav-wrapper">
            {
                navItems.map(c=>(
                    <a href={c.href}><div className="nav-container"><p>{c.text}</p></div></a>
                ))
            }
            

            
        </div>
    )
}


export {
    Nav,
    navItems
};