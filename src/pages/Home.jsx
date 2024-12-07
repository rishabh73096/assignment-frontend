import BagsDesigns from "../components/BagsDesigns"
import Herosection from "../components/Herosection"
import Navbar from "../components/Navbar"
import ProductSection from "../components/ProductSection"

const Home = ()=>{
    return (<>
    <div className="h-[80vw]">
    <Navbar />
    <Herosection />
    <BagsDesigns />
    <ProductSection />
    </div>
    
    </>)
}
export default Home