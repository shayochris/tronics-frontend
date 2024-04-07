
import { useNavigate } from 'react-router-dom';
import UseFetch from '../Hooks/useFetch'

//components
import ProductsSkeleton from '../Skeletons/ProductsSkeleton'
import Rating from './Rating';

export default function Products() {
  const navigate = useNavigate();
  const {data:products,error,loading} = UseFetch('products/');
  
  return (
    <div className='my-6'>
      {loading && <ProductsSkeleton/>}
      {!loading && !error && 
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 w-full'>
          {products.map((product)=>(
            <div key={product.id} className='p-2 bg-white'>
            <div onClick={()=> navigate(`/product_details/${product.id}`)}
              className="h-40 sm:h-56 w-full overflow-hidden rounded-lg"
            >
              <img src={product.image} alt={`${product.name}`} className="w-full h-full object-cover" />
            </div>
            <div>
              <Rating/>
              <p className='font-semibold'>{product.name}</p>
              <p className='text-sm text-primary font-semibold'>{product.price} Tsh</p>
            </div>
          </div>
          ))}
        </div> 
      }
    </div>
  )
}
