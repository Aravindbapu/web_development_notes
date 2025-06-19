import NextAuth from 'next-auth'
import GithhubProvider from "next-auth/providers/github" 

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithhubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
    }),
  ]
})

export {handler as GET, handler as POST}