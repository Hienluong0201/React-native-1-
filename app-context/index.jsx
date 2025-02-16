import { createContext, useState, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Quản lý đăng nhập
    const [isAuth, setIsAuth] = useState(false);
    // Quản lý giỏ hàng
    const [cart, setCart] = useState([]);
    // Quản lý User
    const [user, setUser] = useState(null);

    return (
        <AppContext.Provider value={{ isAuth, setIsAuth, cart, setCart, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook để dễ sử dụng Auth trong các component khác
export const useAuth = () => {
    const { user, setUser, isAuth, setIsAuth } = useContext(AppContext);
    return { user, setUser, isAuth, setIsAuth };
};
