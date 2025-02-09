import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { NavBar } from "./components/NavBar";
import { createContext, StrictMode } from "react";
import UserStore from "./store/UserStore.ts";
import DeviceStore from "./store/DeviceStore.ts";

const userStore = new UserStore();
const deviceStore = new DeviceStore();

export const Context = createContext({
  user: userStore,
  device: deviceStore,
});

export const App = () => {
  return (
    <StrictMode>
      <Context.Provider
        value={{
          user: userStore,
          device: deviceStore,
        }}
      >
        <BrowserRouter>
          <NavBar />
          <AppRouter />
        </BrowserRouter>
      </Context.Provider>
    </StrictMode>
  );
};
