import { API_ENDPOINTS } from "../apiEndpoints";
import axiosInstance from "../axiosInstance";

const userApi = {
    getProfile: async () => {
        const response = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
        return response.data;
    },

    updateProfile: async (userData) => {
        const response = await axiosInstance.put(API_ENDPOINTS.USER.UPDATE_PROFILE, userData);
        return response.data;
    },
};

export default userApi;
