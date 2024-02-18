import Header from "../header/Header";
import Footer from "../footer/Footer";


const TemplateDefault = ({ children } : any ) => {

    return(
        <>
            <Header />          
                {children}    
            <Footer />
        </>
    );
}

export default TemplateDefault;