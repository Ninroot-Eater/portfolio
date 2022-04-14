import "./Title.css"
import Contacts from "./Contacts"
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";

import { useState } from "react";



function Title(){


    return(
        
            <div className="heading-container">
                <div className="title-container">
                <div className="title-wrapper">
                    <h1 className="name">Thiha Swan Htet</h1>
                    <br/>
                    <p className="tagline">Junior backend developer.</p>
                </div>
                
                
                </div>
                <div className="contacts-and-menu">
                <Contacts/>
                
                </div>
                <p className="heading-tagline">
                I am Thiha Swan Htet, a passionate and aspiring CS student from Myanmar.
                This is my story. 
                </p>
                <SectionTitle hash="highlights" title="Highlights"/>
                <div className="highlight-row">
                    <Link to="/schedjuice4">
                        <div className="highlight-column">
                            <p className="highlight-item">
                                Project: Schedjuice4
                            </p>
                        </div>
                    </Link>
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