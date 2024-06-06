import Salat1 from "../../Assets/Images/boxsalat1.png"
import Salat3 from "../../Assets/Images/boxsalat3.png"
import Salat4 from "../../Assets/Images/boxsalat4.png"
import Salat5 from "../../Assets/Images/boxsalat5.png"
import Salat6 from "../../Assets/Images/boxsalat6.png"
import Vaqt from "../../Assets/Images/boxvaqt.png"
import Ptechka from "../../Assets/Images/boxptechka.svg"
import "./Box.scss"


export default function Box() {
    return (
        <div className="container">
            <div className="box">
                <h2 className="box__head">Меню Chef’s House</h2>

                <div className="box__listt">
                    <div className="box__list">
                        <img className="box__img" src={Salat1} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Салаты</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                    <div className="box__list">
                        <img className="box__img" src={Salat6} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Паста</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                    <div className="box__list">
                        <img className="box__img" src={Salat3} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Супы</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                    <div className="box__list">
                        <img className="box__img" src={Salat4} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Десерты</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                    <div className="box__list">
                        <img className="box__img" src={Salat5} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Меню на неделю</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                    <div className="box__list">
                        <img className="box__img" src={Salat6} width={225} height={215} alt="" />
                        <div className="box__list--item">
                            <p className="box__text">Популярные</p>
                            <div className="box__item">
                                <img className="box__item--img" src={Ptechka} width={22} height={22} alt="" />
                                <p className="box__item--text">Рецептов </p> <span className="box__item--span">8</span>
                                <img className="box__item--img" src={Vaqt} width={22} height={22} alt="" />
                                <p className="box__item--text">Время </p> <span className="box__item--span">15-30 мин</span>
                            </div>
                            <i className="box__item--italic"> от 1 890 ₽  </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}