'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'

type Product = {
  id: number
  category: string
  model: string
  path: string
}

export default function ProductCard({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem("favid") || "[]")
    setLiked(fav.includes(product.id))
  }, [])

  const toggleLike = () => {
    let fav = JSON.parse(localStorage.getItem("favid") || "[]")
    if (fav.includes(product.id)) {
      fav = fav.filter((id: number) => id !== product.id)
      setLiked(false)
    } else {
      fav.unshift(product.id)
      setLiked(true)
    }
    localStorage.setItem("favid", JSON.stringify(fav))
  }

  return (
    <div className="w-[95%] mx-auto p-2 border-b border-black flex flex-col gap-2">
      <div className="flex justify-between">
        <h4>{product.category}</h4>
        <h4>Model: {product.model}</h4>
      </div>
      <div>
        <Image src={product.path} alt={product.model} width={500} height={300} className="w-full" />
      </div>
      <div className="flex justify-between items-center">
        <i
          className={`text-xl cursor-pointer ${liked ? 'fa-solid text-red-600' : 'fa-regular'} fa-thumbs-up`}
          onClick={toggleLike}
        />
        <p>Order</p>
      </div>
    </div>
  )
}
