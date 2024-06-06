import "./Main.scss"
import Icon from "../../Assets/Images/Iconbox.svg"
import Opshi from "../../Assets/Images/opshi.png"


export default function Main() {
    return (
        <div className="container">
            <div className="main">
                <div className="main__list">
                    <img className="main__logo" src={Icon} width={47} height={47} alt="" />
                    <p className="main__text">Мы предлагаем качественную продукцию от проверенных поставщиков. Следим за сроком годности и документами</p>
                </div>
                <img className="main__boottom--logo" src={Opshi} alt="" />
            </div>
        </div>
    )
}