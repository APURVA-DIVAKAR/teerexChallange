import React from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Container = (props) => {
    return (
        <>
            <NavBar style={{postion:"fixed"}} />
            <main style={{marginTop:"7%"}}>{props.children}</main>
            <Footer/>
        </>
    );
};

export default Container;