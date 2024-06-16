import NextAuth from "next-auth";
import NaverProvider from "next-auth/providers/naver";
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        NaverProvider({
            clientId: "VOIhuplf7Mqbng97X8al" ?? "",
            clientSecret: "TJQzkN6Q5m" ?? "",
        }),
    // ...add more providers here
    ],
};
     
    const handler = NextAuth(authOptions);
     
    export { handler as GET, handler as POST };
