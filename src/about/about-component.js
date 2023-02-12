import './style.js';
import React, { Fragment } from 'react';
import { PageContainer } from './style.js';



function About() {
  return (
   <PageContainer id="about">
      <h2>About</h2>
      <h3>Who is Jaden?</h3>
      <div class="profileimage-and-paragraph">
        <div className="profile-image-container">
          <img src="images/profileimage.jpeg"></img>
        </div>
        <div>
          <h4>
            <div className="h4-container">
            <div className="marine-biology">Marine Biology graduate</div>
          <div className="turn">turned</div> 
          <div className="computer-programmer">Computer Programmer</div>
          </div>
          </h4>
          <p>After finishing a Bachelor's in Marine Biology, I discovered 
            that the analytical, logical, and scientific methods of thought 
            translated well to computer programmming. Combined with a lifelong
            interest in art and aesthetics, frontend development became 
            a continous source of challenge and satisfaction. Self-taught, 
            I specialize in building responsive applications with acquired
             <div className="skills-tools-button"><a href="#skills">skills & tools.</a></div></p>
        </div>
      </div>
      <div className='purple-leaf-container'>
        <img src="images/purple-leafy-branch.png"></img>
      </div>
   </PageContainer>
  ); 
}

export default About;