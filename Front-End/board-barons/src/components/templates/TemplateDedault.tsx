import { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


const TemplateDefault = ({ children } : any ) => {

    return(
        <>
            <Header />    
            {/* <Navbar mode={"dark"} toggleColorMode={function (): void {
                throw new Error("Function not implemented.");
            } } /> */}
            {children}    
            <Footer />
        </>
    );
}

export default TemplateDefault;