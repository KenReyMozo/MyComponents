import NextAuth, { DefaultSession, DefaultAccount } from "next-auth"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
      user: {
        /** The user's postal address. */
        address? : string | null,
        role? : string | null,
        username? : string | null,
        id? : string | null,
        jwt : string,
      } & DefaultSession["user"]
      accessToken : any,
    }
  
    interface User {
      jwt : string,
      email : string,
      username : string,
    }

  }

declare module "next" {
  interface ResponsivePage {
    isTablet? : boolean,
    isMobile? : boolean,
    isDesktop? : boolean,
  }
  
}
