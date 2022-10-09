import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Review = ({id,img,name,price,quantity,handleDelete}) => {
  return (
    <div className='p-2 border border-green-400 rounded flex items-center gap-2 w-[500px]'>
        <div className='w-[91px]'>
            <img src={img} alt="" />
        </div>
        <div className='flex items-center justify-between w-full'>
            <div>
                <h1>{name}</h1>
                <p>{price}</p>
                <p>{quantity}</p>
            </div>
            <div className='text-4xl bg-red-300 p-2 rounded-full cursor-pointer text-red-500' onClick={() => handleDelete(id)}>
                <MdDeleteForever />
            </div>
        </div>
    </div>
  )
}

export default Review