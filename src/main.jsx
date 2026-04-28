import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MealProvider } from "./context/MealContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <MealProvider>
    <UserProvider>
    <App />
    </UserProvider>
  </MealProvider>
  </BrowserRouter>
);