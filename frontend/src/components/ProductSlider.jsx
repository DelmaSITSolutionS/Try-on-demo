import React from 'react'
import p1 from "../assets/garmets/p1.png"
import p2 from "../assets/garmets/p2.png"
import p3 from "../assets/garmets/p3.png"
import p4 from "../assets/garmets/p4.png"


const PRODUCTS = [
  { id: "1", image: p1 },
  { id: "2", image: p2 },
  { id: "3", image: p3 },
  { id: "4", image: p4 },
];

function ProductSlider({ userImg, tryOn, excludeId }) {
  return (
     <div className=' fixed bottom-2 bg-black'>
      <h4 className='text-white text-center pt-2'>Try Other Products:</h4>
      <div className='py-2' style={{ display: "flex", gap: 10, overflowX: "auto" }}>
        {PRODUCTS.filter(p => p.id !== excludeId).map(p => (
          <img
          className='h-[150px] w-[150px] border-[1px] bg-white'
            key={p.id}
            src={p.image}
            alt="alt"
            onClick={() => tryOn(p.image)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductSlider