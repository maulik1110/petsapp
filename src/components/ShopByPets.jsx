import React from 'react'
import Dog from '../assets/dog.webp'
import Cat from '../assets/cat.webp'
import Bird from '../assets/bird.webp'
import { Link } from 'react-router-dom'

const ShopByPets = () => {
  return (

    <>
    <h1 className='text-center font-bold lg:text-[3vw] text-[8vw] mt-5'>Shop by pets</h1>
    <div className='lg:flex lg:justify-between justify-center items-center p-4 mt-10 h-[25vw]'>

        <Link to={"/shop"} className="flex justify-center">
        <img className='lg:h-[80%] h-[50vw] hover:scale-110 ease-in-out duration-300' src={Dog} alt="" />
        </Link>
        <Link to={"/shop"} className="flex justify-center">
        <img className='lg:h-[80%] h-[50vw] hover:scale-110 ease-in-out duration-300' src={Cat} alt="" />
        </Link>
        <Link to={"/shop"} className="flex justify-center">
        <img className='lg:h-[80%] h-[50vw] hover:scale-110 ease-in-out duration-300' src={Bird} alt="" />
        </Link>
    </div>
    </>
  )
}

export default ShopByPets