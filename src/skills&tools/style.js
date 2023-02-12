import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding-top: 100px;
  background-color: rgb(52, 210, 210);
  position: relative;


  height: 100vh;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
  clip-path: polygon(100% 0%, 100% 81%, 30% 100%, 0% 81%, 0% 0%);

  h2 {
    margin-left: 9%;
    padding: 10px;
    font-size: 30px;
    font-weight: 400;
    
  }

  h3 {
    margin-left: 9%;
    padding: 10px;
    font-size: 32px;
    font-weight: 700;
    color: #e87568;
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    text-align: center;
    color:white;
  }

  .icon-wrapper {
    display: flex;
    justify-content: center;
    gap: 45px;
    margin-top: 100px;
  }

.cactus-container {
  position: absolute;
  left: 400px;
  bottom: -10px;
}

  .cactus-container img {
    width: 220px;
    height: 220px;
  }


  .image-hover {
    display:flex;
    justify-content: center;
  }

  .image-hover:hover {
    transition: all 0.2s ease-in-out;
      transform: scale(1.1);
  }
  .testing {
    display: inline-block;
    position: relative;
    color: white;
    text-decoration: none;
  }
  
  .testing:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 4px;
    bottom: -10px;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  
  .testing:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}


  
`;
