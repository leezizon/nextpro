"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/navigation.module.css"
import AuthSession from '../components/providers/session-provider'
import GetUser from "../components/user-info";

export default function Navigation(){
    const path = usePathname();
    return(
        <nav className={styles.nav}>
            <AuthSession>
                <GetUser></GetUser>
            </AuthSession>
            <ul>
                <li>
                    <Link href="/">Home</Link>{path ==='/'?"★":""}
                </li>
                <li>
                    <Link href="/about-us">About-Us</Link>{path ==='/about-us'?"★":""}
                </li>
                <li>
                    <Link href="/login">login</Link>{path ==='/login'?"★":""}
                </li>
                <li>
                    <Link href="/admin">admin</Link>{path ==='/admin'?"★":""}
                </li>
            </ul>
        </nav>
    )
}