import { useSession } from 'next-auth/react';
import type { User as NextAuthUser } from "next-auth";

interface User extends NextAuthUser {
    id: string;
  }

export function SetUser(){

    const {data:session} = useSession();
    
    if(session){
        // console.log('setUser');
        // console.log((session.user as User).id);
    }
    
    return session ? session.user.name : "사용자";
}

export default function GetUser(){
    const UserMe = SetUser();
        
    return UserMe
}