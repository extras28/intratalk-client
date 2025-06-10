import { API_ENDPOINTS } from "../apiEndpoints";
import axiosInstance from "../axiosInstance";

const authApi = {
    login: async (credentials) => {
        const response = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, credentials);
        return response.data.user;
    },

    register: async (userData) => {
        const response = await axiosInstance.post(API_ENDPOINTS.AUTH.REGISTER, userData);
        return response.data.user;
    },

    logout: async () => {
        await axiosInstance.post(API_ENDPOINTS.AUTH.LOGOUT);
    },

    refreshToken: async () => {
        try {
            await axiosInstance.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
        } catch (error) {
            // If refresh fails, let the interceptor handle the error
            throw error;
        }
    },

    getProfile: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
        return response.data;
    },
};

export default authApi;
