import Footer from "../../components/Footer/Footer"
import Loading from "../../components/Loading/Loading";
import Navbar from "../../components/Navbar/Navbar"
import ProductCard from "../../components/Products/ProductCard";
import useApi from "../../hooks/useApi";

function Home() {
    const {data, loading} = useApi()
    console.log(data);

    if(loading) return <Loading />
    
  return (
      <>
          <Navbar />
          <main className="grow">
              <div className="container">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 mt-5">
                      {data && data.map((product) => {
                          return <ProductCard key={product.id} product={product} />
                      })} 
                  </ul>
              </div>
          </main>
          <Footer />
      </>
  )
}

export default Home