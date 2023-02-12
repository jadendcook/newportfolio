import React from "react";
import './style.js'
import { PageContainer } from "./style.js";

const Skills = () => {
    return (
     <PageContainer id="skills">
        <h2>Skills & Tools</h2>
        <h3>My Toolbox and Things I Can Do</h3>
        <div className="icon-wrapper">
          <a class="testing" target="_blank" href="https://html.spec.whatwg.org/multipage/">
          <p>HTML5</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/windows/512/html-5.png"/>
              </div>
          </a>
          <a class="testing" target="_blank" href="https://www.w3.org/Style/CSS/Overview.de.html">
          <p>CSS3</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios/512/css3.png"/>
              </div>
          </a>
          <a class="testing" target="_blank" href="https://sass-lang.com/">
          <p>Sass</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/material-outlined/512/sass.png"/>
              </div>            
          </a>
          <a class="testing" target="_blank" href="https://reactjs.org/">
          <p>React</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios-filled/512/react-native.png"/>
              </div>             
          </a>
          <a class="testing" target="_blank" href="https://github.com/">
          <p>Github</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios-glyphs/512/github.png"/>
              </div>   
          </a>
          <a class="testing" target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=de">
          <p>Javascript</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios-glyphs/512/javascript.png"/>
              </div> 
          </a>
          <a class="testing" target="_blank" href="https://code.visualstudio.com/docs/editor/vscode-web">
          <p>Visual Studio Code</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios-glyphs/512/visual-studio.png"/>
              </div>
          </a>
          <a class="testing" target="_blank" href="https://www.adobe.com/ca/products/photoshop.html">
          <p>Adobe Photoshop</p>
              <div className="image-hover">
                  <img src="https://img.icons8.com/ios-glyphs/512/adobe-photoshop.png"/>
              </div>
          </a>
        </div>
        <div className="cactus-container">
            <img src="images/lightgreen-cactus.png"/>
        </div>
     </PageContainer>
    );
  };
  
  export default Skills;