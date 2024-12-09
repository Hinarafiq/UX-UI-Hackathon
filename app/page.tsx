import Blog from "./components/Blogs"
import Hero from "./components/Hero"
import NewArrivals from "./components/NewArrivals"
import Products from "./components/Products"
import TopPicks from "./components/TopPicks"
import Detail from "./components/Detail"



export default function Home() {
  return (
    <div>
     <Hero />
     <Products />
     <TopPicks />
     <NewArrivals />
     <Blog />
     <Detail />
    </div>
  )
}