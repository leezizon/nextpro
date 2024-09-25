import NaverProvider from "next-auth/providers/naver";
import type { NextAuthOptions,User as NextAuthUser, Profile as NextAuthProfile  } from "next-auth";
import { collection, getFirestore, orderBy, query, getDocs } from 'firebase/firestore';
import { firebaseApp } from '../api/firebase/firbasedb'; // Firebase 설정 파일 경로
import { getStorage } from 'firebase/storage';
import { JWT } from "next-auth/jwt";

interface NaverProfile extends NextAuthProfile {
  response: {
    id: string;
    nickname?: string;
    name?: string;
    email?: string; // 선택적으로 변경
    profile_image?: string;
  };
}

interface User extends NextAuthUser {
  id: string;
}

export const authOptions:NextAuthOptions = {
    // Configure one or more authentication providers
    providers: [
        NaverProvider({
            clientId: process.env.KAKAO_CLIENT_ID ?? "",
            clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",

            profile(profile: NaverProfile) {
              const response = profile.response;
              return {
                id: response.id,
                name: response.nickname || response.name || '',
                email: response.email || '', // 조건부로 처리
                image: response.profile_image || '',
              };
            },
        }),
    // ...add more providers here
    ],
    

    callbacks: {

      async jwt({ token, account, profile }) {
        if (account && profile) {
          token.id = (profile as NaverProfile).response.id;
        }
        return token;
      },
      
      async session({ session, token }) {
        if (token) {
          (session.user as User).id = token.id;
        }
        return session;
      },
    },
};

export const productStorage = getStorage(firebaseApp);

export async function productDb(){
    const firestore = getFirestore(firebaseApp);
    const infoQuery = query(
        collection(firestore,"product"),
        orderBy("Pdid","desc")
    )
    const willgetinfo = await getDocs(infoQuery);
    console.log('asdasdalfddfldkffdlk');

    return willgetinfo;
}
