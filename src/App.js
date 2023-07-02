import GlobalStyle from "./GlobalStyle";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NavBar from "./components/Common/NavBar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </Provider>
  );
}

export default App;
