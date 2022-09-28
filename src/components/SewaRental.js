// import React from "react";
// import mercyImage from "../asset/photo/mercy.png";
import { Container} from "react-bootstrap";
import Mercy from '../asset/photo/Mercy.png'

const SewaRental = () => {
    <Container>
        <div className="intro">
        <div className="left">
             <div className="textRental">
             <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
             <h4>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
             </div>
        </div>

        <div className="right">
            <div className="mercy">
            <img src={Mercy} height='300'></img>
            </div>
            
        </div>

    </div>



    </Container>

}
export default SewaRental