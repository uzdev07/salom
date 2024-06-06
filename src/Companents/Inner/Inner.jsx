import Plita from "../../Assets/Images/mainplita.svg"
import Sonka from "../../Assets/Images/mainsonka.svg"
import Royhat from "../../Assets/Images/mainroyhat.svg"
import Qol from "../../Assets/Images/mainqol.svg"
import Tova from "../../Assets/Images/maintova.svg"
import Ajoyib from "../../Assets/Images/mainajpyib.svg"
import Shlepa from "../../Assets/Images/mainshlepa.svg"

import "./Inner.scss"

export default function Inner() {
    return (
        <div className="container">
            <div className="inner">
                <div className="inner__header">
                    <img className="inner__logo" src={Shlepa} width={65} height={65} alt="" />
                    <p className="inner__text">Мы стараемся воссоздать атмосферу настоящей ресторанной кухни у Вас дома, где шеф-повар - это Вы</p>
                </div>

                <div className="inner__list">

                    <div className="inner__list--item"><img className="inner__list--logo" src={Plita} width={100} height={100} alt="" />
                        <p className="inner__list--text">Выбираете рецепты в меню</p>
                    </div>
                    <div className="inner__list--item"><img className="inner__list--logo" src={Sonka} width={100} height={100} alt="" />
                        <p className="inner__list--text">Добавляете рецепты
                            в корзину</p>
                    </div>
                    <div className="inner__list--item"><img className="inner__list--logo" src={Royhat} width={100} height={100} alt="" />
                        <p className="inner__list--text">Оформляете
                            заказ</p>
                    </div>
                    <div className="inner__list--item"><img className="inner__list--logo" src={Qol} width={100} height={100} alt="" />
                        <p className="inner__list--text">Курьер привозит
                            продукты</p>
                    </div>
                    <div className="inner__list--item"><img className="inner__list--logo" src={Tova} width={100} height={100} alt="" />
                        <p className="inner__list--text">Готовите любимые
                            блюда дома</p>
                    </div>
                    <div className="inner__list--item6"><img className="inner__list--logo" src={Ajoyib} width={100} height={100} alt="" />
                        <p className="inner__list--text6">Начните прямо
                            сейчас</p>
                    </div>
                </div>
            </div>
        </div>
    )
}