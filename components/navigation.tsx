"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/navigation.module.css"
import AuthSession from '../components/providers/session-provider'
import GetUser from "../components/user-info";

export default function Navigation(){
    const path = usePathname();
    return(
        <div>
            <div className={styles.navbar}>
                <div>
                    <Link href="/">Home</Link>{path ==='/'?"★":""}
                </div>
                <div>
                    <Link href="/about-us">About-Us</Link>{path ==='/about-us'?"★":""}
                </div>
                <div>
                    <Link href="/login">login</Link>{path ==='/login'?"★":""}
                </div>
                <div>
                    <Link href="/admin">admin</Link>{path ==='/admin'?"★":""}
                </div>
                <div>
                    <Link href="/store">store</Link>{path ==='/store'?"★":""}
                </div>
            </div>
            <div>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="검색어를 입력하세요..." />
                    <button>검색</button>
                </div>
                <AuthSession>
                    <div className={styles.userName}><GetUser></GetUser></div>
                </AuthSession>
            </div>
        </div>
        // <nav className={styles.nav}>
        //     <AuthSession>
        //         <GetUser></GetUser>
        //     </AuthSession>
        //     <ul>
        //         <li>
        //             <Link href="/">Home</Link>{path ==='/'?"★":""}
        //         </li>
        //         <li>
        //             <Link href="/about-us">About-Us</Link>{path ==='/about-us'?"★":""}
        //         </li>
        //         <li>
        //             <Link href="/login">login</Link>{path ==='/login'?"★":""}
        //         </li>
        //         <li>
        //             <Link href="/admin">admin</Link>{path ==='/admin'?"★":""}
        //         </li>
        //     </ul>
        // </nav>
    )
}