"use client";
 
import {signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

const LoginButton = () => {
    const {data} = useSession();
    console.log(data);

    const onClick = async (e: React.MouseEvent) => {
        e.preventDefault();
        if (data) {
            await signOut();
        }else{
            await signIn();
        }
    }
     return (
        <a href="#" onClick={onClick} className="text-sm text-white">{data ? "로그아웃": "네이버 아이디로 로그인"}</a>
    )
}

export default LoginButton;