import React from "react";
import { Button } from "react-bootstrap";
import "../style/navbar.css"

const NavigationBar = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="left">
                    <div className="button">
                     <Button>Binar</Button>
                     </div>
                </div>

            <div className="right"> 
                <div className="menu">
                <a className="nav-link" href="OurService">Our Service</a> 
                <a className="nav-link" href="MyList">My List</a>
                <a className="nav-link" href="Testimonial">Testimonial</a>
                <a className="nav-link" href="Faq">Faq</a>
                </div>
            </div>


            </div>

        </header>
          
    )
}

export default NavigationBar