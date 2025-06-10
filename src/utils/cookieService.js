import Cookies from "js-cookie";

export const ACCESS_TOKEN_KEY = "access_token";
export const REFRESH_TOKEN_KEY = "refresh_token";
export const ACCESS_TOKEN_EXPIRES = 1; // 1 day
export const REFRESH_TOKEN_EXPIRES = 30; // 30 days

export const cookieService = {
    setTokens(accessToken, refreshToken) {
        this.setAccessToken(accessToken);
        this.setRefreshToken(refreshToken);
    },

    setAccessToken(token) {
        // We don't need to manually set the cookie anymore
        // It will be set by the server via Set-Cookie header
        this._accessToken = token;
    },

    setRefreshToken(token) {
        // We don't need to manually set the cookie anymore
        // It will be set by the server via Set-Cookie header
        this._refreshToken = token;
    },

    getAccessToken() {
        // Return the stored token value
        return this._accessToken;
    },

    getRefreshToken() {
        // Return the stored token value
        return this._refreshToken;
    },

    removeTokens() {
        // Clear the stored token values
        this._accessToken = null;
        this._refreshToken = null;
        // Server will handle removing the cookies
    },

    isAuthenticated() {
        return !!this.getAccessToken();
    },
};
