'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Header({ onOpenDrawer }: { onOpenDrawer: () => void }) {
  return (
    <header className="fixed top-0 w-full bg-white shadow flex justify-between items-center p-2 text-xs z-50">
      <Image src="/gflogo.png" alt="logo" width={50} height={50} />
      <div className="flex gap-2">
        <p className="text-center"><a href="#">बाउंड्री<br />गेट डिज़ाइन</a></p>
        <p className="text-center"><a href="#">शटर<br />डिज़ाइन</a></p>
        <p className="text-center"><a href="#">खिड़की<br />डिज़ाइन</a></p>
        <p className="text-center font-bold cursor-pointer" onClick={onOpenDrawer}>Contact<br /><i className="fa-solid fa-bars text-lg" /></p>
      </div>
    </header>
  )
}
