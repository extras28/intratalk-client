import axiosInstance from "../../api/axiosInstance";
import { API_ENDPOINTS } from "../../api/apiEndpoints";
import { cookieService } from "../../utils/cookieService";
import store from "../../store";
import { refreshTokenSuccess } from "./authSlice";

export const loginUser = async (credentials) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
    const { user, accessToken, refreshToken } = response.data;
    return { user, accessToken, refreshToken };
};

export const registerUser = async (userData) => {
    const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
    const { user, accessToken, refreshToken } = response.data;
    return { user, accessToken, refreshToken };
};

export const logoutUser = async () => {
    try {
        await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    } finally {
        cookieService.removeTokens();
    }
};

export const getUserProfile = async () => {
    const response = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
    return response.data;
};

export const refreshToken = async () => {
    try {
        const refreshToken = cookieService.getRefreshToken();
        if (!refreshToken) {
            throw new Error("No refresh token available");
        }

        const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN, {
            refreshToken,
        });

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } = response.data;
        store.dispatch(refreshTokenSuccess({ accessToken: newAccessToken, refreshToken: newRefreshToken }));

        return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (error) {
        cookieService.removeTokens();
        throw error;
    }
};
