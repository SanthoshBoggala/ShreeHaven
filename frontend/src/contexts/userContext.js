import { createContext, useState, useEffect } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : {};
    });
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || "";
    });
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]);

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};
