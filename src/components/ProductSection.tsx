import inhaler from '../assets/icons/inhaler.svg'
import Image from 'next/image'

export const ProductSection = () => {
    return (
        <section className="product">
            <h2 className="title">Терапия ХОБЛ: что в фокусе?</h2>
            <p className="subtitle">
                Даже 1 среднетяжелое обострение — сигнал к увеличению объема
                терапии
            </p>

            <h3 className="description">
                Приоритетные направления фармакотерапевтической стратегии при
                ХОБЛ1:
            </h3>
            <div className="product-items">
                <div className="product-item">
                    <div className="product-item__img" data-number={1}>
                        <Image src={inhaler} alt="inhaler" />
                    </div>
                    <h5 className="product-item__title">
                        Ингаляционный <br />
                        <b style={{ fontWeight: '500' }}>антихолинергик</b>
                    </h5>
                    <p className="product-item__descr">
                        Ингибирует бронхоконстрикторные эффекты ацетилхолина,
                        вступая с ним в конкурентный антагонизм за
                        взаимодействие с эффекторными мускариновыми рецепторами,
                        дополняет и потенцирует эффект β2-агонистов1
                    </p>
                </div>
                <div className="product-item">
                    <div className="product-item__img" data-number={2}>
                        <Image src={inhaler} alt="inhaler" />
                    </div>
                    <h5 className="product-item__title">
                        Ингаляционный <br />
                        <b style={{ fontWeight: '500' }}>β2-агонист</b>
                    </h5>
                    <p className="product-item__descr">
                        Вызывает бронходилатацию посредством релаксации
                        гладкомышечных клеток бронхов независимо от характера
                        констриктивных стимулов, т. е. выступают в качестве
                        функциональных антагонистов бронхоконстрикции
                    </p>
                </div>
                <div className="product-item">
                    <div className="product-item__img" data-number={3}>
                        <Image src={inhaler} alt="inhaler" />
                    </div>
                    <h5 className="product-item__title">
                        Ингаляционный <br />
                        <b style={{ fontWeight: '500' }}>глюкокортикостероид</b>
                        <br />
                        (ИГКС)
                    </h5>
                    <p className="product-item__descr">
                        Снижает частоту обострений, особенно в сочетании с ДДБА,
                        подавляют хроническое воспаление при астме и снижают
                        гиперреактивность дыхательных путей
                    </p>
                </div>
            </div>
            <div className="product-subitems">
                <div className="product-subitem">
                    <p className="product-subitem__text">
                        Пациентам с ХОБЛ рекомендуется комбинирование
                        бронходилататоров с разными механизмами действия;
                        Назначение 2-х бронходилататоров из группы
                        длительнодействующих β2-агонистов (ДДБА) и
                        длительнодействующих антихолинергиков (ДДАХ), действие
                        которых дополняет и усиливает друг друга1.
                    </p>
                </div>
                <div className="product-subitem">
                    <p className="product-subitem__text">
                        Пациентам с ХОБЛ и частыми обострениями (≥2
                        среднетяжелых обострений в течение 1 года/1 тяжелое
                        обострение, потребовавшее госпитализации) рекомендуется
                        назначение ИГКС в дополнение к ДДБА; Последние
                        исследования показали, что амбулаторное применение
                        ИГКС/ДДБА у пациентов с ХОБЛ снижает госпитальную
                        летальность по сравнению с пациентами, принимавшими
                        только ДДБА (8,1% vs 13,2%)1.
                    </p>
                </div>
            </div>
        </section>
    )
}
