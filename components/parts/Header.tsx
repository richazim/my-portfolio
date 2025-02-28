"use client"
import React, {ForwardedRef, forwardRef} from 'react'
import ContactMenuBar from '../ContactMenuBar'
import Link from "next/link";

const Header = forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <div className="flex flex-row sm:justify-between justify-center py-[20px] px-[30px]" {...props}>
        <Link ref={ref} href={"https://freelancer.com"} className={"font-bold border-[3px] py-[7px] px-[10px] hidden sm:block pointer-events-auto z-10"} target="_blank">
            <span>B</span>
        </Link>
        <ContactMenuBar/>
    </div>
  )
})

Header.displayName = "Header"

export default Header