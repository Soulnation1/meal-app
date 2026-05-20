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
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  const setActiveCulture = (culture) => {
    setUser((prev) => ({
      ...prev,
      activeCulture: culture,
    }));
  };
  const toggleFavorite = (recipeId) => {
    setFavorites((prev) => {
      if (prev.includes(recipeId)) {
        return prev.filter((id) => id !== recipeId);
      }

      return [...prev, recipeId];
    });
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, setActiveCulture, favorites, toggleFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
