import Image from 'next/image'
import diagram from '../assets/images/diagram.jpg'
import hand from '../assets/icons/hand.svg'
import heart from '../assets/icons/heart.svg'
import hurt from '../assets/icons/hurt.svg'
import bladder from '../assets/icons/bladder.svg'
import { useState } from 'react'

export const MainSection = () => {
    const [firstAccordion, SetFirstAccordion] = useState(false)
    const [secondAccordion, SetSecondAccordion] = useState(false)

    const toggleFirstAccordion = () => {
        SetFirstAccordion((prev) => !prev)
    }
    const toggleSecondAccordion = () => {
        SetSecondAccordion((prev) => !prev)
    }
    return (
        <section className="main">
            <h2 className="title">ХОБЛ: мифы и реальность</h2>
            <div className="accordions">
                {firstAccordion ? (
                    <div
                        className="accordion-full"
                        onClick={toggleFirstAccordion}
                    >
                        <p className="accordion-full__text">
                            В десятилетнем исследовании
                            <b>
                                {' '}
                                «Генетическая эпидемиология ХОБЛ» (COPDGene){' '}
                            </b>
                            среди пациентов с ХОБЛ, диагностированной до 55 лет,
                            было выявлено преобладание женщин (66%), а в
                            возрасте 60-64 лет количество женщин и мужчин.
                        </p>
                        <p className="accordion-full__text">
                            Такое эпидемиологическое распределение
                            заболеваемости ХОБЛ может быть связано с тем, что
                            дыхательные пути курящих женщин имеют более{' '}
                            <b>высокий процент площади стенок</b>, но меньшую
                            площадь просвета, внутренний диаметр и толщину
                            дыхательных путей по сравнению с курящими мужчинами.
                        </p>
                        <Image
                            src={diagram}
                            alt="diagram"
                            className="accordion-full__img"
                        />

                        <Image
                            src={hand}
                            alt="hand"
                            className="accordion-btn"
                        />
                    </div>
                ) : (
                    <div
                        className="accordion-small"
                        onClick={toggleFirstAccordion}
                    >
                        <div className="accordion-small__title">
                            <h6>
                                ХОБЛ болеют <b>преимущественно мужчины?</b>
                            </h6>
                        </div>
                        <span className="accordion-small__text">
                            В десятилетнем исследовании «Генетическая
                            эпидемиология ХОБЛ» (COPDGene) среди пациентов с
                            ХОБЛ, диагностированной до 55 лет, было выявлено
                            преобладание...
                        </span>

                        <Image
                            src={hand}
                            alt="hand"
                            className="accordion-btn"
                        />
                    </div>
                )}
                {secondAccordion ? (
                    <div
                        className="accordion-full"
                        onClick={toggleSecondAccordion}
                    >
                        <p className="accordion-full__text">
                            <b>
                                Большинство пациентов с ХОБЛ столкнется с
                                обострениями: как минимум одно среднетяжелое или
                                тяжелое обострение случится в течение 3 лет у
                                77% пациентов1.
                            </b>
                        </p>
                        <p className="accordion-full__text">
                            В течение 5 лет после первого тяжёлого обострения в
                            живых остаются только 40% пациентов.2 Прогноз после
                            обострений ХОБЛ схож с таковым при сердечной
                            недостаточности, инфаркте миокарда и некоторых
                            злокачественных опухолях.
                        </p>
                        <h6 className="accordion-full__title">
                            Пятилетняя выживаемость пациентов
                        </h6>
                        <div className="accordion-full__cards">
                            <div className="accordion-full__card">
                                <div className="accordion-full__card-img">
                                    <Image src={heart} alt="heart" />
                                </div>
                                <span className="accordion-full__card-number">
                                    45,5%
                                </span>
                                <p className="accordion-full__card-text">
                                    пациентов с сердечной{' '}
                                    <b>недостаточностью</b>
                                </p>
                                <p className="accordion-full__card-descr">
                                    Популяционное когортное исследование (N=385)
                                </p>
                            </div>
                            <div className="accordion-full__card">
                                <div className="accordion-full__card-img">
                                    <Image src={hurt} alt="hurt" />
                                </div>
                                <span className="accordion-full__card-number">
                                    55,3%
                                </span>
                                <p className="accordion-full__card-text">
                                    пациентов с{' '}
                                    <b>
                                        инфарктом
                                        <br /> миокарда
                                    </b>
                                </p>
                                <p className="accordion-full__card-descr">
                                    Апостериорный анализ когортного исследования
                                    (N=2887)
                                </p>
                            </div>
                            <div className="accordion-full__card">
                                <div className="accordion-full__card-img">
                                    <Image src={bladder} alt="bladder" />
                                </div>
                                <span className="accordion-full__card-number">
                                    50,5%
                                </span>
                                <p className="accordion-full__card-text">
                                    пациентов с{' '}
                                    <b>
                                        раком <br /> мочевого пузыря
                                    </b>
                                </p>
                                <p className="accordion-full__card-descr">
                                    Исследование Национальной статистической
                                    службы (N=42642)
                                </p>
                            </div>
                        </div>
                        <Image
                            src={hand}
                            alt="hand"
                            className="accordion-btn"
                        />
                    </div>
                ) : (
                    <div
                        className="accordion-small"
                        onClick={toggleSecondAccordion}
                    >
                        <div className="accordion-small__title">
                            <h6>
                                <b> Опасно </b>
                                не наличие заболевания, а обострения?
                            </h6>
                        </div>
                        <span className="accordion-small__text">
                            Большинство пациентов с ХОБЛ столкнется с
                            обострениями: как минимум одно среднетяжелое или
                            тяжелое обострение случится в течение...
                        </span>

                        <Image
                            src={hand}
                            alt="hand"
                            className="accordion-btn"
                        />
                    </div>
                )}
            </div>
        </section>
    )
}
