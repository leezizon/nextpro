import { useSession } from 'next-auth/react';

export function SetUser(){
    const {data} = useSession();

    return data ? data.user.name : "사용자";
}

    export default function GetUser(){
        const UserMe = SetUser();
        
        return UserMe
}