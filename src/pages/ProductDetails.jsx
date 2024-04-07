import {useState } from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../Hooks/useFetch';

//icons
import { FaMinus,FaPlus } from "react-icons/fa6";
import Button from '../components/Button';
import { AiOutlineHeart } from 'react-icons/ai';

//components
import ProductDetailsSkeleton from '../Skeletons/ProductDetailsSkeleton';
import Rating from '../components/Rating';

export default function ProductDetails() {
  const { id } = useParams();
  const {data:product,loading} = UseFetch(`product/${id}/`);
  const [quantity,setQuantity] = useState(1);

  return (
    <div className='my-2'>
      {loading && <ProductDetailsSkeleton/>}
      
      {
      !loading && 
        <div className="flex lg:flex-row flex-col">
          <div className="flex-1 lg:h-96 h-56 rounded-lg overflow-hidden">
            <img src={product.image} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 p-3">
            <p className="text-3xl font-semibold">{product.name}</p>

            <Rating/>

            <p className='text-sm'>
              {
                product?.description?.length > 300 && product.description.slice(0,300)
              }
              {product?.description?.length > 300 &&
                <span onClick={()=>console.log('hello')} className='text-primary'>...more</span>
              }
            </p>
            
            
            <p className="font-semibold text-primary text-lg my-2">{product.price * quantity} Tsh</p>

            <div className="flex-a my-3">
              {[...Array(5)].map(()=>(
                <div className="rounded-lg bg-gray-300 w-8 h-8 mr-2 hover:ring-2 hover:ring-primary"></div>
              ))}
            </div>

            <div className="flex-a">
              <button className="flex-a card  my-2 mr-2">
                <FaMinus className='w-5 h-5 mr-2'
                  onClick={()=>{
                    setQuantity(prev =>{
                      if(prev > 1){
                        return prev -1;
                      }
                      else{
                        return prev;
                      }
                    })
                  }}
                />
                <p className='mx-3'>{quantity}</p>
                <FaPlus className='w-5 h-5 ml-2'
                  onClick={()=>{
                    setQuantity(prev => {
                      return prev + 1;
                    })
                  }} 
                />
              </button>
              <Button
                text ={'Add to Cart'}
                textColor={'text-white'}
                background={'bg-primary'}
                rounded={false}
              />
              <div className="card ml-2">
                <AiOutlineHeart className='w-5 h-5'/>
              </div>
            </div>
            
          </div>
        </div>
      }
    </div>
  )
}
