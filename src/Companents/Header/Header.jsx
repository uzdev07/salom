import "./Header.scss";

import logo from "../../Assets/Images/Logo.svg";
import logo1 from "../../Assets/Images/Logo1.svg";
import Img1 from "../../Assets/Images/Img1.png";
import Img2 from "../../Assets/Images/Img2.png";
import Img3 from "../../Assets/Images/Img3.png";
import Img4 from "../../Assets/Images/Img4.png";

export default function Header() {
    return (
        <>
            <section className="section_1">
                <div className="container">
                    <header className="header">
                        <div className="header__top">
                            <img
                                className="header__top--logo"
                                src={logo}
                                width={67}
                                height={22}
                                alt=""
                            />
                            <ul className="header__top--list">
                                <li className="header__top--item">Доставка и оплата</li>
                                <li className="header__top--item">Новости</li>
                                <li className="header__top--item">
                                    ежедневно с 10.00 до 23.00
                                </li>
                            </ul>
                        </div>
                    </header>
                </div>
            </section>
            <section className="section_2">
                <div className="header__buttom">
                    <div className="container">
                        <header className="header__buttom1">
                            <a className="header__buttom--logo" href="">
                                <img width={306} height={56} src={logo1} alt="" />
                            </a>
                            <div className="header__buttom--box">
                                <ul className="buttom__list">
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Закуски
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Салаты
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Паста
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Супы
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Десерты
                                        </a>
                                    </li>
                                </ul>
                                <ul className="buttom__list">
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            Напитки
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            <img className="img__link" src={Img1} alt="" /> Меню на
                                            неделю
                                        </a>
                                    </li>
                                    <li className="buttom__list--item">
                                        <a className="item__link" href="#">
                                            <img className="img__link" src={Img2} alt="" /> Популярные
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </header>
                        <div className="header__button--cost">
                            <span className="header__button--head">4 500 ₽</span>
                            <img src={Img3} width={32} height={32} alt="" />
                        </div>
                        <img className="header__user" src={Img4} width={40} height={40} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
}
