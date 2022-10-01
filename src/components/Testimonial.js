import { Container} from "react-bootstrap";
import '../style/Testimonial.css'
import testi from '../asset/photo/testi.png'
import testi1 from '../asset/photo/testi (1).png'
import testi2 from '../asset/photo/testi (2).png'

const Testimonial = () => {
    return(
        
    <Container>
        <div className="texttesti">
            <h1>Testimonial</h1>
            <h2>Berbagai review positif dari para pelanggan kami</h2>
        </div>

        <div className="testiimg">
            <img src={testi}></img> 
            <img src={testi2}></img>
            <img src={testi1}></img> 
        </div>

        <div className="kotak">
            <div className="textkotak">
                <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h2>
                <button className="buttonsewa">
                Mulai Sewa Mobil
            </button>
            </div>
           
        </div>



    </Container>

)
}
export default Testimonial