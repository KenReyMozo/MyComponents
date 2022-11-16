import axios from "axios";
import NextAuth, { User } from "next-auth"
// import EmailProvider from "next-auth/providers/email"
// import AppleProvider from "next-auth/providers/apple"
import CredentialsProvider from "next-auth/providers/credentials"
import OAuthProvider from "next-auth/providers/auth0";


const BASE_URL = "OOF"

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    CredentialsProvider({
      type  : "credentials",
      name: "Credentials",
      credentials : {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req){
        const {username, password} = credentials as any;
        // const authRequest = await axios.post(`${BASE_URL}/api/auth/local`,{
        //   identifier : username,
        //   password : password
        //   })
        const authRequest = {
            status : 200,
            data : {user : {
                username : username,
                email : password,
            },
            jwt : "oof oof"},
        }
        
        const user : User = {
            jwt: authRequest.data.jwt,
            username: authRequest.data.user.username,
            email: authRequest.data.user.email,
            id: ""
        }
        return user
      },
      
    })
    // OAuthProvider({
      
    //   authorization: {
    //     url: `${BASE_URL}/api/auth/local`,
    //     params: {}
    //   },
    //   userinfo: {
    //     url: `${BASE_URL}/api/auth/local`,
    //     async request() {
          
    //     }
    //   },
    //   clientId: "",
    //   clientSecret: ""
    // })
  ],
  // Database optional. MySQL, Maria DB, Postgres and MongoDB are supported.
  // https://next-auth.js.org/configuration/databases
  //
  // Notes:
  // * You must install an appropriate node_module for your database
  // * The Email provider requires a database (OAuth providers do not)
  // database: process.env.DATABASE_URL,

  // The secret should be set to a reasonably long random string.
  // It is used to sign cookies and to sign and encrypt JSON Web Tokens, unless
  // a separate secret is defined explicitly for encrypting the JWT.
  secret: process.env.SECRET,

  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `strategy` should be set to 'jwt' if no database is used.
    strategy: 'jwt'

    // Seconds - How long until an idle session expires and is no longer valid.
    // maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    // updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },

  // You can define custom pages to override the built-in ones. These will be regular Next.js pages
  // so ensure that they are placed outside of the '/api' folder, e.g. signIn: '/auth/mycustom-signin'
  // The routes shown here are the default URLs that will be used when a custom
  // pages is not specified for that route.
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/auth/signin',  // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  // Callbacks are asynchronous functions you can use to control what happens
  // when an action is performed.
  // https://next-auth.js.org/configuration/callbacks
  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) { return true },
    // async redirect({ url, baseUrl }) { return baseUrl },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      if(token){
        const user = token.user as User
        session.user = user;
        // session.account = token.account;
      }

      return session 
    },
    async jwt({ token, user, account, profile, isNewUser }) { 
      if (user) {
        token.user = user;
      }
      if (account) {
        token.account = account;
      }

      return token;
    }
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},

  // Enable debug messages in the console if you are having problems
  debug: true,
})