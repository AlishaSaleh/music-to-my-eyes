import { getToken } from "./getToken";
import jwtDecoded from "jwt-decode";
import { getCurrentTimestamp } from "./getCurrentTimeStamp";

export const isAuth = () => {
    const token = getToken();
    if (!token) {
        return false;
    }
    const currentTimestamp = getCurrentTimestamp();
    const decoded = jwtDecoded(token);
    console.log(decoded.exp);
    console.log(currentTimestamp);
    if (currentTimestamp < decoded.exp) {
       return true;
    }
    return false;
}