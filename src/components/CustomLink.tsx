import React from 'react'
import Link from "next/link";
import { CustomLinkProps } from '@/types/links';

const CustomLink = ({name, url, className, target}: CustomLinkProps) => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
  return (
    <Link href={url} className={className} target={target ? target : ''} onClick={(e) => handleScroll(e)}>
        <span>{name}</span>
    </Link>
  )
}

export default CustomLink