import { Component } from "react";
import Header from "../header/Header";


const TemplateDefault = ({ children } : any ) => {

    return(
        <>
            <Header />    
            {children}    
            {/* <Footer /> */}
        </>
    );
}

export default TemplateDefault;