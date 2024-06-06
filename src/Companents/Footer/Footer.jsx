import "./Footer.scss"
import Logtip from "../../Assets/Images/Logo1.svg"
import Vaqt from "../../Assets/Images/boxvaqt.png"
import Img1 from "../../Assets/Images/Vector.png"
import Apple from "../../Assets/Images/Apple.svg"

export default function Footer() {
    return (
        <div className="container">
            <div className="footer">
                <div className="footer__list">
                    <img src={Logtip} alt="" />
                    <div className="footer__list--item1">
                        <li className="footer__list--item"><a className="footer__item--link" href="#">Доставка и оплата</a></li>
                        <li className="footer__list--item"><a className="footer__item--link" href="#">Новости</a></li>
                        <li className="footer__list--item"><a className="footer__item--link" href="#">Личный кабинет</a></li>
                        <li className="footer__list--item"><a className="footer__item--link" href="#">Политика конфиденциальности</a></li>
                    </div>
                </div>
                <div className="footer__list">
                    <h6 className="footer__list--head">ООО «Шеф Хаус» © 2023 </h6>
                    <div className="footer__list--item1">
                        <li className="footer__bottom--item1"><img className="footer__bottom--img" src={Vaqt} width={18} height={18} alt="" /><p className="footer__bottom--text">ежедневно с 10.00 до 23.00</p></li>
                        <li className="footer__bottom--item"><img className="footer__bottom--img1" src={Img1} alt="" /></li>
                        <li className="footer__bottom--item"><img className="footer__bottom--img1" src={Img1} alt="" /></li>
                    </div>
                    <div className="footer__apple">
                        <div className="footer__apple--left">
                            <img src={Apple} alt="" />
                        </div>
                        <div className="footer__apple--right">
                            <p className="footer__app--head">Загрузите в</p>
                            <h6 className="footer__app--text">App Store</h6>
                        </div>
                    </div>
                    <div className="footer__apple">
                        <div className="footer__apple--left">
                            <img src={Apple} alt="" />
                        </div>
                        <div className="footer__apple--right">
                            <p className="footer__app--head">Загрузите в</p>
                            <h6 className="footer__app--text">App Store</h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}