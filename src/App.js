import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Career from "./Pages/Career";
import Blog from "./Pages/Blog";
import Services from "./Pages/Services";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import ServiceInnerAndroid from "./Pages/ServiceInnerAndroid";
import ServiceInnerCloud from "./Pages/ServiceInnerCloud";
import ServiceInnerDev from "./Pages/ServiceInnerDev";
import ServiceInnerDotnet from "./Pages/ServiceInnerDotnet";
import ServiceInnerJava from "./Pages/ServiceInnerJava";
import ServiceInnerData from "./Pages/ServiceInnerData";
import ServiceInnerIos from "./Pages/ServiceInnerIos";
import ServiceInnerTesting from "./Pages/ServiceInnerTesting";
import ServiceInnerUI from "./Pages/ServiceInnerUI";
import ServiceInnerWeb from "./Pages/ServiceInnerWeb";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Services" element={<Services />} />
        <Route path="Service-inner-java" element={<ServiceInnerJava />}></Route>
        <Route path="Service-inner-dotnet" element={<ServiceInnerDotnet />}></Route>
        <Route path="Service-inner-cloud" element={<ServiceInnerCloud />}></Route>
        <Route path="Service-inner-android" element={<ServiceInnerAndroid />}></Route>
        <Route path="Service-inner-data" element={<ServiceInnerData />}></Route>
        <Route path="Service-inner-dev" element={<ServiceInnerDev />}></Route>
        <Route path="Service-inner-ios" element={<ServiceInnerIos />}></Route>
        <Route path="Service-inner-testing" element={<ServiceInnerTesting />}></Route>
        <Route path="Service-inner-ui" element={<ServiceInnerUI />}></Route>
        <Route path="Service-inner-web" element={<ServiceInnerWeb />}></Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
