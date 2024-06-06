import "./Sidibar.scss"
import Telefon from "../../Assets/Images/telefon.svg"
import img1 from "../../Assets/Images/freame.png"


export default function Sidibar() {
    return (
        <div className="container">
            <div className="sidibar">
                <img className="sidibar__logo" src={Telefon} alt="" />
                <img className="sidibar__logo1" src={img1} alt="" />
            </div>
        </div>
    )
}