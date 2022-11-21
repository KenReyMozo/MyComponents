import NextAuth, { DefaultSession, DefaultAccount } from "next-auth"
import React from "react";


declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
      user: (UserInfoTeacher | UserInfoStudent ) & DefaultSession["user"]
    }
    // interface User {
    //   jwt : string,
    //   email : string,
    //   username : string,
    // }

    interface User extends BaseUser {
      
    }

    interface BaseUser {
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
      type :"Teacher" | "Student",
      userInfo : TeacherUser | StudentUser,
    }

    interface UserInfoTeacher extends BaseUser {
      type : "Teacher",
      userInfo : TeacherUser,
      // subjects : Subject[],
      // section : null,
    }

    interface UserInfoStudent extends BaseUser {
      type : "Student",
      userInfo : StudentUser,
      // subjects : Subject[],
      // section : Section,
  }

    interface TeacherUser {
      designation : {name : string}
      employee_no : string,
      first_name : string,
      id : string,
      last_name : string,
      middle_name : string,
      picture : string | null,
      tenant : string,
      user_id : number,
    }

    interface StudentUser {
      id : string,
      student : {
        first_name : string,
        gender : string,
        id : string,
        last_name : string,
        middle_name :string,
        picture : string | null,
        student_no : string,
        user_id : string,
      }
    }

    interface Section {
      curriculum : {
        id : string,
        name : string,
        grade_level : {
          id : string,
          name : string,
        }
       }
       id : string,
       name : string,
    }

    interface Subject {
      code : string,
      id : string,
      name : string,
      // subjectscheduleslot_set : any,
      units : number,
    }

  }

declare module "react" {
  interface ResponsivePage {
    isTablet? : boolean,
    isMobile? : boolean,
    isDesktop? : boolean,
  }
  
}
