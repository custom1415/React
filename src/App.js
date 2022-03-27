import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage/homepage.component";
import { signInWithGoogle, signInWithFb } from "./firebase.utils";
import { auth } from "./firebase.utils";
import { useEffect } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in/sign-in.component";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
