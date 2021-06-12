import { getToken } from "./getToken";
import jwtDecoded from "jwt-decode";
import { getCurrentTimestamp } from "./getCurrentTimeStamp";

export const isAuth = () => {
    const token = getToken();

    if (!token) {
        console.log('no token given')
        return false;
    }

    const currentTimestamp = getCurrentTimestamp();
    const decoded = jwtDecoded(token);

    if (currentTimestamp < decoded.exp) {
        return true;
    }
    return false;
}