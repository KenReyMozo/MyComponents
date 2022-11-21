import NextAuth, { DefaultSession, DefaultAccount } from "next-auth"
import React from "react";


declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
      user: User & DefaultSession["user"]
    }
    // interface User {
    //   jwt : string,
    //   email : string,
    //   username : string,
    // }

    interface User {
      access_token : string,
      expires_in : number,
      first_name : string,
      id : number,
      initial : string,
      is_cashier : boolean,
      is_head : boolean,
      last_name : string,
      // password : string,
      refresh_token : string,
      school : string,
      scope : string,
      token_type : "Bearer",
      username : string,
    }

  }

declare module "react" {
  interface ResponsivePage {
    isTablet? : boolean,
    isMobile? : boolean,
    isDesktop? : boolean,
  }
  
}
