import styled from "@emotion/styled";

export const PageContainer = styled.div`
  padding-top: 100px;
  background-color: salmon;
  height: 100vh;
  position:relative;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
  clip-path: polygon(100% 0%, 100% 100%, 62% 87%, 30% 100%, 0% 75%, 0% 0%);

  h2 {
    margin-left: 9%;
    padding: 10px;
    font-size: 30px;
    font-weight: 400;
  }
  h3 {
    margin-left: 9%;
    padding: 10px;
    font-size: 42px;
    color: #894e89;
  }

  img {
    width:300px;
    transform: rotate(12deg);
  }

.image-container {
 position:absolute;
 right:15px;
 bottom: 30px;
}
`;
