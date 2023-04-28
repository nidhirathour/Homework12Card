import React, { useState } from 'react'
import { useEffect } from 'react'
import './product.css'

const Product = () => {
    const[Data,SetData]=useState([])
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>SetData(json)) 
            
    },[])
  return (
    <>
    <h1 style={{textAlign:"center",color:"red"}}>Product Details</h1>
    <div className='container'> 
        {
            Data.length>0?( 
                Data.map((e)=>(
                     
                    <div className="card">
                    <img width={200} height={200} src={e.image} alt="" />
                    <p>{e.title}</p>
                    <p> Rs:{e.price}</p>
                    <button>Buy Now</button>
               </div>
                 
                ))
            
    ):
    <div style={{margin:"40px auto"}}><h1 style={{textAlign:"center",color:"red"}}>Wait Product is Loading........</h1> </div>
    
        }
       
       </div>   
   
    </>
  )
}

export default Product