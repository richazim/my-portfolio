"use client"
import React, {ForwardedRef, forwardRef} from 'react'
import ContactMenuBar from '../ContactMenuBar'
import Link from "next/link";

const Header = forwardRef((props, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <div className="flex flex-row sm:justify-between justify-center py-[30px] px-[30px] font-bold" {...props}>
        <Link ref={ref} href="https://www.freelancer.com/u/richazim" className={"font-bold border-[3px] py-[7px] px-[10px] hidden sm:block pointer-events-auto rounded-[7px]"} target="_blank">
            <span>HIRE ME HERE</span>
        </Link>
        <ContactMenuBar/>
    </div>
  )
})

Header.displayName = "Header"

export default Header