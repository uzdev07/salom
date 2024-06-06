import "./Hero.scss"


export default function Hero() {
    return (
        <div className="container">
            <div className="hero">
                <div className="hero__left">
                    <ul className="hero__list">
                        <li className="hero__item"><span className="hero__span"></span><p className="hero__item--text">Готовые рецепты блюд</p></li>
                        <li className="hero__item"><span className="hero__span"></span><p className="hero__item--text">Рассчитанные порции продуктов</p></li>
                        <li className="hero__item"><span className="hero__span"></span><p className="hero__item--text">Бесплатная доставка от <i style={{ color: "var(--light-green)" }}>1 часа</i> </p></li>
                        <h1 className="hero__h1">Дома вкуснее</h1>
                    </ul>
                </div>
            </div>
        </div >
    )
}