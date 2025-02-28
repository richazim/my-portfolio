import React from 'react'
import Link from "next/link";

const CustomLink = ({name, url, className}: {name: string, url: string, className?: string}) => {
  return (
    <Link href={url} className={className} target="_blank">
        <span>{name}</span>
    </Link>
  )
}

export default CustomLink