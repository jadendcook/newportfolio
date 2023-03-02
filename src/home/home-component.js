import React from "react";
import { PageContainer } from "./style";
import styled from '@emotion/styled'


const Home = () => {
    return (
    
        <PageContainer id="home">
             <div className="image-container">
                         <img src="images/leafy-branch.png"></img>
                     </div>
                <h1>
                    <div>Hello, my name is Jaden! </div>
                    <div class="sentence">I am a Front End Web Developer<br/>and 
                            <div class="slidingHorizontal">
                            <span>world traveler. <img class="icon" src="https://cdn-icons-png.flaticon.com/512/826/826070.png"></img></span>
                            <span>dog mom. <img class="icon" src="https://cdn-icons-png.flaticon.com/512/4600/4600353.png"></img></span> 
                            <span>painter. <img class="icon" src="https://cdn-icons-png.flaticon.com/512/2970/2970785.png"></img></span> 
                            <span>food connoisseur. <img class="icon" src="https://cdn-icons-png.flaticon.com/512/561/561611.png"></img></span>
                            <span>your future employee. <img class="icon" src="https://cdn-icons-png.flaticon.com/512/166/166519.png"></img></span>
                            </div>
                    </div>
                </h1>
        </PageContainer>
    
    );
  };
  
  export default Home;



  