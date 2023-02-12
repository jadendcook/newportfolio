import styled from '@emotion/styled'



export const PageContainer = styled.div`

.nav-bar-container {
  background-color: #FFC0CBb0;
    width: 100%;
    height: 20px;
    z-index: 10;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
}

.nav-items-container {
    padding-right: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 6rem;
}

.nav-a-container a {
    color: #0c9c94;
    text-decoration: none;
    font-weight: 900;
    // font-size: 20px;
    font-family: American Typewriter, serif;
    // transition: all 100ms ease-out;
    
}


.hover-underline-animation {
    display: inline-block;
    position: relative;
    color: white;
  }
  
  .hover-underline-animation:after {
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

  
  .hover-underline-animation:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
}

#navbar {
  overflow: hidden;
  padding: 50px 10px; /* Large padding which will shrink on scroll (using JS) */
  transition: 0.4s; /* Adds a transition effect when the padding is decreased */
  position: fixed; /* Sticky/fixed navbar */
  width: 100%;
  top: 0; /* At the top */
  z-index: 99;
}

/* Style the navbar links */
#navbar a {
  float: left;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

/* Style the logo */
#navbar #logo {
  font-size: 18px;
  font-weight: bold;
  transition: 0.4s;
}



/* Display some links to the right */
#navbar-right {
  float: right;
}

/* Add responsiveness - on screens less than 580px wide, display the navbar vertically instead of horizontally */
@media screen and (max-width: 580px) {
  #navbar {
    padding: 20px 10px !important; /* Use !important to make sure that JavaScript doesn't override the padding on small screens */
  }
  #navbar a {
    float: none;
    display: block;
    text-align: left;
  }
  #navbar-right {
    float: none;
  }
}

`



