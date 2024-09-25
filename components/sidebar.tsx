"use client"

// import Link from "next/link"
// import { usePathname } from "next/navigation"
import styles from "../styles/side.module.css"

export default function Navigation(){
    return(
        <div className={styles.sidebar}>
            <div></div>
            <a href="#section1">섹션 1</a>
            <a href="#section2">섹션 2</a>
            <a href="#section3">섹션 3</a>
            <a href="#section4">섹션 4</a>
        </div>
    )
}