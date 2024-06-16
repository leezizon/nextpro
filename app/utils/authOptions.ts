import NaverProvider from "next-auth/providers/naver";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        NaverProvider({
            clientId: process.env.KAKAO_CLIENT_ID ?? "",
            clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
        }),
    // ...add more providers here
    ],
};
