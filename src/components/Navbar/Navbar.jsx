import { IoMdCart } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Navbar() {
  const cartProducts = useSelector((state) => state.products)
  
  return (
    <div className="navbar bg-base-100 shadow-md">
          <div className="container flex items-center justify-between">
              <Link to={"/"} className="btn btn-ghost text-xl mr-auto">Maxsulotlar</Link>
        <Link to={"/cart"} className='btn relative'>
          <span className='absolute top-0 right-1 text-white bg-red-600 rounded-full px-1.5'>{cartProducts.length > 0 ? cartProducts.length : " "}</span>
              <IoMdCart size={24} />
          </Link>
          </div>
    </div>
  )
}

export default Navbar