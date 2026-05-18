import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          name: "Guest",
          avatar: "https://i.pravatar.cc/150",
          cultures: ["Yoruba", "Igbo"],
          activeCulture: "Blend",
        };
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const setActiveCulture = (culture) => {
    setUser((prev) => ({
      ...prev,
      activeCulture: culture,
    }));
  };
  return (
    <UserContext.Provider value={{ user, setUser, setActiveCulture }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
