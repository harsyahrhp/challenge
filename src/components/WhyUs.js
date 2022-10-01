import { Container} from "react-bootstrap";
import '../style/WhyUs.css'
import frame1 from '../asset/photo/Frame1.png'
import frame2 from '../asset/photo/Frame 99.png'
import frame3 from '../asset/photo/Frame 100.png'
import frame4 from '../asset/photo/Frame 101.png'

const WhyUs = () => {
    return(
    <Container>
        <div className="textwhy">
            <h1>Why Us?</h1>
            <h2>Mengapa harus pilih binar Car rental?</h2>
        </div>

        <div className="frame">
            <img src={frame1} height="150" width={250}></img>
            <img src={frame2} height="150" width={250}></img>
            <img src={frame3} height="150" width={250}></img>
            <img src={frame4} height="150" width={250}></img> 
        </div>
    </Container>
    )
}
export default WhyUs