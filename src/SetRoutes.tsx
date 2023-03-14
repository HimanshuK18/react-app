import './App.css';
import './index.css';
import Appd from './App';
import NoPage from './page/NoPage';
import Blog from './page/Contact';
import Login from './page/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLiftUpState } from './page/Blogs';
import Effect from './page/useEffect';
import { lazy, useState } from "react";
import Protected from './util/Protected';
import Children from './projects/Children';
import RegisterYourCatForm from './projects/FormSubmit';
import DynamicComponent from './projects/Tab/DynamicImport';
import Counter from './projects/Age';
import CounterRedux from './projects/Counter';

const Contact = lazy(() => import('./page/Contact'));
const TabApp = lazy(() => import('./projects/Tab/Tab'));
const AppTab2 = lazy(() => import('./projects/Tab2/ShowTabs'));

// start again from https://handsonreact.com/docs/lists, and hooks in w3schools
function SetRoutes() {
    const TabBootData: any[] = [
        {
            tabname: "Tab 1",
            tabComponentName: "Clock",
            tabComponentPath: "TabShow/FirstTab",
            tabContent:"<div>I am tab 1</div>"
        },
        {
            tabname: "Tab 2",
            tabComponentName: "FirstTab",
            tabComponentPath: "TabShow/FirstTab",
            tabContent:"<div>I am tab 4</div>"
        },
        {
            tabname: "Tab 3",
            tabComponentName: "SecondTab",
            tabComponentPath: 'TabShow/SecondTab',
            tabContent:"<div>I am tab 3</div>"
        }
    ];

    const [isLoggedIn, setisLoggedIn] = useState(false);
    const logIn = () => {
        setisLoggedIn(() => { return true });
    };

    const logOut = () => {
        setisLoggedIn(false);
        localStorage.setItem('authenticated', "false");
    };

    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <button onClick={logOut}>Logout</button>
            ) : (
                <button onClick={logIn} >Login</button>
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
                <Route path="/clildren" element={<Children />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cats" element={<RegisterYourCatForm />} />
                <Route path="/tab" element={<TabApp data = { TabBootData }/>} />
                <Route path="/tab2" element={<AppTab2  />} />
                <Route path="/tabs" element={<DynamicComponent />} />
                <Route path="/reducer" element={<Counter />} />
                <Route path="/reducerredux" element={<CounterRedux />} />
            </Routes>
        </BrowserRouter>
    );
}

export default SetRoutes;

//https://handsonreact.com/docs/labs/react-tutorial-typescript