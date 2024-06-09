import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Header} from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './i18n';
import {useEffect} from "react";
import {userStore} from "./stores/userStore.js";
import {observer} from "mobx-react-lite";
import Home from "./views/Home/Home.jsx";
import Auth from "./views/Auth/Auth.jsx";
import Profile from "./views/Profile/Profile.jsx";
import PassportApplicationForm from "./views/PassportApplicationForm/PassportApplicationForm.jsx";
import EstateRequestForm from "./views/EstateRequestForm/EstateRequestForm.jsx";
import InsuranceApplicationForm from "./views/InsuranceApplicationForm/InsuranceApplicationForm.jsx";
import Appointment from "./views/Appointment/Appointment";
import DocsRecovery from "./views/DocumentsRecovery/DocsRecovery";
import Notifications from "./views/Notifications/Notifications";
import {PrivateRoute} from "./privateRoute/privateRoute.jsx";
import Registration from "./views/Auth/Registration/Registration";
import Login from "./views/Auth/Login/Login";
import FarmerGrantForm from "./views/Grant/grant.jsx";
import Vaccination from './views/Vacination/vaccination.jsx'
import LanguageSwitcher from "./components/LanguageSwitcher/LanguageSwitcher.jsx";

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
        <LanguageSwitcher />
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
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/insurance_form' element={<InsuranceApplicationForm/>}/>
                </Route>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route exact path='/estate_request' element={<EstateRequestForm/>}/>
                </Route>
                <Route path="/register" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route path="/grant" element = {<FarmerGrantForm/>}/>
                </Route>
                <Route exact path='/' element={<PrivateRoute/>}>
                    <Route path="/vaccination" element = {<Vaccination/>}/>
                </Route>

            </Routes>
        </BrowserRouter>
    </div>
)
}

export default observer(App)
