import { useMediaQuery } from "react-responsive";

export const Is1224 = () => { 
    return useMediaQuery({ query: '(min-width: 1224px)' })

}
export const Is768 = () => {
    return useMediaQuery({ query: '(max-width: 768px)' })
}