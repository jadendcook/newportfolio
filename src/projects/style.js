import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding-top: 100px;
  background-color: rgb(161, 51, 161);
  height: 100vh;
  position:relative;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);

  h2 {
    margin-left: 9%;
    padding: 10px;
    font-size: 35px;
    font-weight: 500;
    color: salmon;
  }

  p {
    text-align: center;
    color: teal;
    font-size: 25px;
    margin-top: 30px;
  }

  p:hover {
  
    
  }

  a {
    text-decoration: none;
  }

  .projects-wrapper {
    display: flex;
    justify-content: center;
    gap: 100px;
    padding-top: 150px;
  }

  img {
    width: 250px;
  }


   .project-container:hover {
    img {
      transition: all 0.2s ease-in-out;
      transform: scale(1.1);
    }
    
  }

  .leaf-container {
    position:absolute;
    right: 12px;
    top: -27px;

  }

  .leaf-container img {
    transform: rotate(259deg);
  }


`;
