import { Container} from "react-bootstrap";
import Mercy from '../asset/photo/img_car.png'
import '../style/ContainHeader.css'
import servis from '../asset/photo/Services.png'

const ContainHeader = () => {
    return(
    <Container>
    <div className="intro">
    <div className="left1">
         <div className="textRental">
         <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
         <h4>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h4>
         <button className="buttonsewa">
                Mulai Sewa Mobil
            </button>
         </div>
         
    </div>

    <div className="right1">
        <div className="mercy">
        <img src={Mercy} height="335" width={505}></img>
        </div>
        
    </div>

</div>

<div className="servis">
    <img src={servis} width="850"></img>
</div>



</Container>
)
}

export default ContainHeader