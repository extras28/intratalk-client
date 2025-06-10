import React from "react";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.scss";

const SIDEBAR_TABS = [
    { icon: "fa-home", label: "Home", href: "/" },
    { icon: "fa-comments", label: "Chat", href: "/chat" },
    { icon: "fa-user", label: "Profile", href: "/profile" },
];

function isTabSelected(tabHref, currentPath) {
    return currentPath === tabHref || (tabHref !== "/" && currentPath.startsWith(tabHref));
}

const Sidebar = ({ collapsed, setCollapsed, currentPath }) => (
    <aside
        className={`bg-body-tertiary border-end d-flex flex-column align-items-center px-2 position-relative ${
            styles.sidebar
        } ${collapsed ? styles.collapsed : ""}`}
        style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            minHeight: 0,
            flexShrink: 0,
            overflow: "visible",
        }}
    >
        <div className={`${styles.sidebarHeader} ${collapsed ? styles.collapsed : styles.expanded}`}>
            {/* Logo */}
            {!collapsed && <div className="fw-bold fs-4 text-center">IntraTalk</div>}
            {/* Nút thu nhỏ/mở rộng ở góc phải trên cùng */}
            <button
                className="btn btn-sm btn-icon"
                onClick={() => setCollapsed((v) => !v)}
                aria-label={collapsed ? "Mở rộng sidebar" : "Thu nhỏ sidebar"}
            >
                <i className={`fa-solid fa-${collapsed ? "angles-right" : "angles-left"}`}></i>
            </button>
        </div>
        <nav className="w-100 flex-grow-1">
            <ul className="list-unstyled mb-0 w-100">
                {SIDEBAR_TABS.map((tab) => {
                    const selected = isTabSelected(tab.href, currentPath);
                    return <SidebarTab key={tab.href} tab={tab} selected={selected} collapsed={collapsed} />;
                })}
            </ul>
        </nav>
    </aside>
);

function SidebarTab({ tab, selected, collapsed }) {
    return (
        <li className="mb-2 w-100">
            <a
                className={
                    `${styles.tab} ${collapsed ? styles.collapsed : ""} ${selected ? styles.selected : ""}` +
                    " text-decoration-none d-flex align-items-center gap-2"
                }
                href={tab.href}
            >
                <i className={`fa-solid ${tab.icon} fs-5`}></i>
                {!collapsed && <span className="ms-2">{tab.label}</span>}
            </a>
        </li>
    );
}

Sidebar.propTypes = {
    collapsed: PropTypes.bool.isRequired,
    setCollapsed: PropTypes.func.isRequired,
    currentPath: PropTypes.string.isRequired,
};

SidebarTab.propTypes = {
    tab: PropTypes.shape({
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
    }).isRequired,
    selected: PropTypes.bool.isRequired,
    collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
