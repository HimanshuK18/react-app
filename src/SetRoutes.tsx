import './App.css';
import './index.css';
import Appd from './App';
import NoPage from './page/NoPage';
import Blog from './page/Contact';
import Login from './page/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLiftUpState } from './page/Blogs';
import Effect from './page/useEffect';
import { useState } from "react";
import Protected from './util/Protected';
import Contact from './page/Contact';
// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function SetRoutes() {

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const logIn = () => {
        setisLoggedIn(() => { return true });
    };

    const logOut = () => {
        setisLoggedIn(false);
    };

    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <button onClick={logOut}>Logout</button>
            ) : (
                <button onClick={logIn}>Login</button>
            )}
            <Routes>
                <Route path="/" element={<Appd />} />
                <Route path="blogs" element={<Blog />} />
                <Route path="contact" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Contact />
                    </Protected>
                } />
                <Route path="lift" element={<AppLiftUpState />} />
                <Route path="effect" element={<Effect />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SetRoutes;

//https://handsonreact.com/docs/labs/react-tutorial-typescript