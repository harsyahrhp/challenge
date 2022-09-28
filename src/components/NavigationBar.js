import React from "react";
import "../style/navbar.css"

const NavigationBar = () => {
    return(
        <header>
            <div className="wrapper">
                <div className="left">
                    <div className="button">
                     <button>      </button>
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

            {/* <div className="mercy">
            <img src={mercyImage} height='300'></img>
            </div>

            <div className="textRental">
             <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
             <h4>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
         </div> */}

        </header>
          
    )
}

export default NavigationBar