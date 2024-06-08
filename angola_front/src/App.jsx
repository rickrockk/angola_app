import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import {useEffect} from "react";
import {userStore} from "./stores/userStore.js";
import {observer} from "mobx-react-lite";
import Home from "./views/Home/Home.jsx";
import Auth from "./views/Auth/Auth.jsx";
import Profile from "./views/Profile/Profile.jsx";
import PassportApplicationForm from "./views/PassportApplicationForm/PassportApplicationForm.jsx";
import Appointment from "./views/Appointment/Appointment";
import DocsRecovery from "./views/DocumentsRecovery/DocsRecovery";
import Notifications from "./views/Notifications/Notifications";
import {PrivateRoute} from "./privateRoute/privateRoute.jsx";
import Registration from "./views/Auth/Registration/Registration";
import Login from "./views/Auth/Login/Login";

function App() {
    useEffect(() => {
        if (userStore.token) {
            userStore.fetchUser();
            userStore.fetchPassport();
            userStore.fetchInsurance();
        }
    }, []);
  return (
    <div className="app">
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/appointment" element={<Appointment/>}/>
                <Route path="/docs_recovery" element={<DocsRecovery/>}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/auth" element={<Auth/>}/>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/profile' element={<Profile/>}/>
                </Route>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/passport_form' element={<PassportApplicationForm/>}/>
                </Route>
                <Route path="/register" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default observer(App)
