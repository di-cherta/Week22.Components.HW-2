import React from "react";
import Header from "./header";
import Footer from "./footer";
import Content from "./content";

function HomePage (props){
    return (
        <React.Fragment>
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
        </React.Fragment>
    );
}

export default HomePage;