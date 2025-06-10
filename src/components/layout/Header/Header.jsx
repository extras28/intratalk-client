import React from "react";
import styles from "./Header.module.scss";

const Header = ({ collapsed, toggleTheme, theme }) => (
    <header
        className={`bg-primary text-light px-4 py-3 d-flex flex-row-reverse align-items-center justify-content-between shadow-sm position-relative ${styles.headerResponsive}`}
    >
        {/* Nút đổi theme luôn ở góc phải trên cùng */}
        <button
            onClick={toggleTheme}
            className="btn btn-link text-light fs-4 p-0"
            aria-label="Toggle theme"
            style={{ zIndex: 9999 }}
        >
            <i className={theme === "light" ? "fa-regular fa-moon" : "fa-regular fa-sun text-warning"}></i>
        </button>
        {/* Logo chỉ hiện ở header khi sidebar bị ẩn */}
        {collapsed && <div className="fw-bold fs-4">IntraTalk</div>}
    </header>
);

export default Header;
