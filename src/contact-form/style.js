import styled from "@emotion/styled";

export const PageContainer = styled.div`

.ContactForm {
    display:flex;
    margin-top: 55px;
}
.parent-container {
    display:grid;
    gap: 20px;

}
.container {
    margin: 0 auto;
}
.name-input, .email-input {
    width: 500px;
    height: 50px;
}

.message-input {
    width: 500px;
    height: 150px;
}
textarea, input {
    border: 3px solid transparent;
}
textarea:focus, input:focus, input[type]:focus, .uneditable-input:focus {   
    border: 3px solid #a1eacd;
    box-shadow: 0 0 8px rgba(229, 103, 23, 0.6);
    outline: 0 none;
}


    .submit-btn {
      border-radius: 4px;
      margin-bottom: 7px;
      background-color: #a1eacd;
      position: relative;
      display: inline-block;
      padding: 0.5rem;
      border: none;
      /* margin-right: 5px; */
      margin-top: 20px;
}
        
    }

    .submit-btn span {
        top: 1px;
        position: relative;
        right: 0;
        transition: width 2s;
        border-radius: 4px;
       
    }

    .submit-btn:hover {
        // background-color:lightpink;
        // width: 200px;
        transition: all 300ms ease-out;
        cursor: pointer;  

    }

    .submit-btn{
        // position: fixed;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
      }
      
      .btn-span{
        display: block;
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        text-decoration: none;
        color: #333;
        // border: 2px solid #333;
        letter-spacing: 2px;
        text-align: center;
        // position: relative;
        // transition: all .35s;
        z-index:2;

      }
      
      .btn-span{
        position: relative;
        z-index: 2;
    
      }
      
      .btn-span:after{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: purple;
        opacity: 0.6;
        transition: all .35s;
      }
      
      .btn-span:hover{
        color: black;
      }
      
      .btn-span:hover:after{
        width: 100%;
      }

     input,
     textarea
      {
        font-size: 1.2rem;
        padding-left: 20px;
       
      }
      input:focus, textarea:focus {
        font-size: .9rem;
        transition: all .35s;
      }

      input, select, textarea{
        color: purple;
    }

    input:active::placeholder, 
    input:focus::placeholder,
    textarea:focus::placeholder,
    textarea:active::placeholder {
        color: purple;
      }

      input::placeholder,
      textarea::placeholder {
        color: #a1eacd;
      }
`;
