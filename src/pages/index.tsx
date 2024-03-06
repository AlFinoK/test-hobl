import { MainSection } from '@/components/MainSection'
import { ProductSection } from '@/components/ProductSection'

export default function Home() {
    return (
        <div className="app">
            <div className="wrapper">
                <MainSection />
                <ProductSection />
            </div>
        </div>
    )
}
