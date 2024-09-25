"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/navigation.module.css"
import AuthSession from '../components/providers/session-provider'
import GetUser from "../components/user-info";

export default function Navigation(){
    const path = usePathname();
    console.log(GetUser);
    return(
        <div className={styles.navbar}>
            <AuthSession>
                <GetUser></GetUser>
            </AuthSession>
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