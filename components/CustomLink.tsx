import React from 'react'
import Link from "next/link";

const CustomLink = ({name, url, className, target}: {name: string, url: string, className?: string, target?: string}) => {
  return (
    <Link href={url} className={className} target={target ? target : ''}>
        <span>{name}</span>
    </Link>
  )
}

export default CustomLink