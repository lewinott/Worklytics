import { KEYCLOAK_URL, REALM, CLIENT_ID, REDIRECT_URI } from "./authConstants";

const Login = () => {
    console.log("CCCCCCCCCCCCCCCCCCC")
    const buildAuthUrl = () => {
        return `${KEYCLOAK_URL}/realms/${REALM}/protocol/openid-connect/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&response_type=code&scope=openid`;
    }
    console.log("BBBBBBBBBBBBBBBBBBBBB")
    return window.location.href = buildAuthUrl();
}

export default Login;