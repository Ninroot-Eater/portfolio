import "./Contacts.css"

let contactList = [
    {
        image: "github.png",
        href: "https://github.com/Ninroot-Eater"
    },
    {
        image: "linkedin.png",
        href: "https://www.linkedin.com/in/thiha-swanhtet-679811214/"
    },
    {
        image: "email.png",
        href: "mailto:misterjames.thiha@gmail.com"
    }
]


function Contacts(){
    return (
                <div id="contacts" className="contact-container">
                {
                    contactList.map(c=>(
                        <a href={c.href} target="_blank">
                            <div className="image-container">
                                <img className="image" src={"/images/logos/" + c.image}width="40" height="40"></img>
                            </div>
                        </a>
                    ))
                }

                
            </div>
    )
}


export default Contacts;