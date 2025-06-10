import axios from "axios";
import { logout } from "../features/auth/authSlice";
import store from "../store";
import authApi from "./auth";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1";

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true, // Enable sending cookies with cross-origin requests
    credentials: "include", // Include credentials in all requests
});

// Keep track of refresh token state
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
        }
    });
    failedQueue = [];
};

axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => response, // Nếu response thành công thì trả về luôn
    async (error) => {
        const originalRequest = error.config;

        // Kiểm tra lỗi 401 và thông báo lỗi liên quan đến token hết hạn/không hợp lệ
        const isTokenExpiredError =
            error.response?.status === 401 &&
            (error.response?.data?.message?.toLowerCase().includes("expired") ||
                error.response?.data?.message?.toLowerCase().includes("invalid token"));

        // Nếu không phải lỗi token hết hạn hoặc đã retry rồi thì trả về lỗi luôn
        if (!isTokenExpiredError || originalRequest._retry) {
            return Promise.reject(error);
        }

        // Nếu đang gọi refresh token hoặc đang trong quá trình refresh thì đẩy request vào hàng đợi
        if (originalRequest.url === "/auth/refresh-token" || isRefreshing) {
            return new Promise((resolve, reject) => {
                failedQueue.push({ resolve, reject });
            })
                .then(() => {
                    return axiosInstance(originalRequest); // Sau khi refresh xong thì gọi lại request cũ
                })
                .catch((err) => Promise.reject(err));
        }

        // Đánh dấu request này đã retry và bắt đầu refresh token
        originalRequest._retry = true;
        isRefreshing = true;

        try {
            await authApi.refreshToken(); // Gọi API refresh token
            processQueue(null); // Sau khi refresh thành công, xử lý lại các request trong hàng đợi
            return axiosInstance(originalRequest); // Gửi lại request gốc
        } catch (refreshError) {
            processQueue(refreshError); // Nếu refresh thất bại, reject tất cả request trong hàng đợi
            store.dispatch(logout()); // Logout user
            window.location.href = "/login"; // Chuyển về trang đăng nhập
            return Promise.reject(refreshError);
        } finally {
            isRefreshing = false; // Kết thúc quá trình refresh
        }
    }
);

export default axiosInstance;
