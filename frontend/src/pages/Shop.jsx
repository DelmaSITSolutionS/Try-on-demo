import React from 'react'
import { useNavigate } from "react-router-dom";
import p1 from "../assets/garmets/p1.png"
import p2 from "../assets/garmets/p2.png"
import p3 from "../assets/garmets/p3.png"
import p4 from "../assets/garmets/p4.png"


const PRODUCTS = [
  { id: "1", name: "product 1", image: p1 },
  { id: "2", name: "product 2", image: p2 },
  { id: "3", name: "product 3", image: p3 },
  { id: "4", name: "product 4", image: p4 },
];

function Shop() {
    const navigate = useNavigate();
  return (
     <div className='flex flex-col items-center'>
      <h2 className='mb-5 mt-24 uppercase'>🛍 Choose a Product to Try</h2>
      <div className='flex flex-wrap gap-10 justify-center'>
        {PRODUCTS.map(p => (
          <div key={p.id} className=' shadow-2xl p-4'>
            <img src={p.image} alt={p.name} className='h-[250px] w-[250px] object-cover' />
            <h4 className='mt-2 uppercase text-center'>{p.name}</h4>
            <button className='bg-black text-white px-3 py-2 mt-2 w-full' onClick={() => navigate(`/product/${p.id}`)}>Try On</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop