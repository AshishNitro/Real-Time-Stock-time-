import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className=" container  header-content">
          <Link href="/">
                    <Image src="/icons/logo.svg" alt="Signalist logo" width={140} height={30} className="h-10 w-auto cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems />
                </nav>
        </div>
    </header>       
  )
}

export default Header
