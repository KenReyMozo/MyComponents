import { Session } from "next-auth";

type SessionType = {
    readonly data: null;
    readonly status: "loading";
} | {
    data: Session;
    status: "authenticated";
} | {
    data: null;
    status: "unauthenticated" | "loading";
} | {
    data: Session;
    status: "authenticated";
}

const ValidateSession = (session : SessionType) => {
    if(session.data === null || session.status !== "authenticated")
        return false
    return true
}

export default ValidateSession;