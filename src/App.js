import React from "react";
import "./assets/css/custom.css";
import "./assets/css/goat.css";
import "./assets/css/plugin.css";
import "./assets/css/prism.css";
import "./assets/css/style.css";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Build from "./pages/Build";
import Integrate from "./pages/Integrate";
import NotFound from "./pages/NotFound";
import Scale from "./pages/Scale";
import Signup from './pages/Signup'

const App = () => {
    return (

        <div className="App">

            <Helmet>
                <script var KTAppSettings={{ "breakpoints": { "sm": 576, "md": 768, "lg": 992, "xl": 1200, "xxl": 1200 }, "colors": { "theme": { "base": { "white": "#ffffff", "primary": "#0BB783", "secondary": "#E5EAEE", "success": "#1BC5BD", "info": "#8950FC", "warning": "#FFA800", "danger": "#F64E60", "light": "#F3F6F9", "dark": "#212121" }, "light": { "white": "#ffffff", "primary": "#D7F9EF", "secondary": "#ECF0F3", "success": "#C9F7F5", "info": "#EEE5FF", "warning": "#FFF4DE", "danger": "#FFE2E5", "light": "#F3F6F9", "dark": "#D6D6E0" }, "inverse": { "white": "#ffffff", "primary": "#ffffff", "secondary": "#212121", "success": "#ffffff", "info": "#ffffff", "warning": "#ffffff", "danger": "#ffffff", "light": "#464E5F", "dark": "#ffffff" } }, "gray": { "gray-100": "#F3F6F9", "gray-200": "#ECF0F3", "gray-300": "#E5EAEE", "gray-400": "#D6D6E0", "gray-500": "#B5B5C3", "gray-600": "#80808F", "gray-700": "#464E5F", "gray-800": "#1B283F", "gray-900": "#212121" } }, "font-family": "Poppins" }} />
                <script src="/assets/js/breakpoint.js" type="text/javascript" />
                <script src="/assets/js/dropzone.js" type="text/javascript" />
                <script src="/assets/js/script.js" type="text/javascript" />
            </Helmet>

            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path='/signup' element={<Signup />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/build" element={<Build />} />
                <Route path="/integrate" element={<Integrate />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/scale" element={<Scale />} />
            </Routes>

        </div>


    );
}

export default App;