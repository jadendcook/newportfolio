import styled from '@emotion/styled'



export const PageContainer = styled.div`
padding-top: 100px;
background-color: rgb(96, 202, 96);
height: 100vh;
position: relative;

height: 100vh;
-webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
clip-path: polygon(0% 0%,100% 0%,100% 100%,0% 78%);

.purple-leaf-container {
    position: absolute;
    right: -40px;
    bottom: -11px;
}

.purple-leaf-container img {
    width: 300px;
    transform: rotate(-28deg);
}

.profile-image-container img {
    border-radius:50%;
    width:300px;
    height:300px;
}

h2 {
    margin-left: 9%;
    padding: 10px;
    font-size: 30px;
    font-weight: 400;
  
    
}

h3{
    margin-left: 9%;
    padding: 10px;
    font-size: 42px;
    color: #848cac;
}

h4 {
    font-size: 28px;
    text-align: center;
    line-height: 1.5;
}

p {
    line-height: 1.9;
    margin-top: 30px;
    font-weight: 600;
    font-size: 18px;
    width: 700px;
    margin-left: 85px;
    position: absolute;
    z-index: 9000000;
}

.profile-image-container {
    border-radius: 50%;
}

.profileimage-and-paragraph {
    display:flex;
    padding-top: 80px;
    width: 80%;
    margin: 0 auto;
    gap: 100px;
    margin-top:-30px;
}

.turn {
    margin: 0 auto;
    width: 100px;
    height: 48px;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    /* transform: rotate(3deg); */
     /* transform: rotate(0.3rad);/ */
     /* transform: rotate(3grad); */ 
     /* transform: rotate(.03turn);  */
     font-size: 25px;
     font-weight: 400;
  }
  
  @keyframes spin {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }

  .h4-container {
    display:flex;
  }

  .marine-biology, .computer-programmer {
    width: 400px;
    color:#ebe9e9;
  }

  .skills-tools-button a{
    text-decoration: none;
    color: 
  }

  .skills-tools-button a:hover {
    color:#ebe9e9;
    
  }

`

