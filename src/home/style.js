import styled from '@emotion/styled'



export const PageContainer = styled.div`
padding-top: 100px;
background-color: #7689d8;
height: 100vh;
-webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
clip-path: polygon(100% 0%,100% 84%,67% 100%,23% 85%,0% 100%,0% 0%);

h1 {
    font-size: 3.3rem;
    max-width: 890px;
    margin-left: 35%;
    line-height: 1.5;
    font-weight: 530;
	margin-top: -130px;
}


.slidingHorizontal{
	display: inline;
	text-indent: 8px;
}
.slidingHorizontal span{
	animation: leftToRight 12.5s linear infinite 0s;
	-ms-animation: leftToRight 12.5s linear infinite 0s;
	-webkit-animation: leftToRight 12.5s linear infinite 0s;
	color: white;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.slidingHorizontal span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.slidingHorizontal span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.slidingHorizontal span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.slidingHorizontal span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

/*leftToRight Animation*/
@-moz-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -moz-transform: translateX(-50px); }
	10% { opacity: 1; -moz-transform: translateX(0px); }
	25% { opacity: 1; -moz-transform: translateX(0px); }
	30% { opacity: 0; -moz-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-webkit-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -webkit-transform: translateX(-50px); }
	10% { opacity: 1; -webkit-transform: translateX(0px); }
	25% { opacity: 1; -webkit-transform: translateX(0px); }
	30% { opacity: 0; -webkit-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}
@-ms-keyframes leftToRight{
	0% { opacity: 0; }
	5% { opacity: 0; -ms-transform: translateX(-50px); }
	10% { opacity: 1; -ms-transform: translateX(0px); }
	25% { opacity: 1; -ms-transform: translateX(0px); }
	30% { opacity: 0; -ms-transform: translateX(50px); }
	80% { opacity: 0; }
	100% { opacity: 0; }
}

/*FadeIn*/
.fadeIn{
	display: inline;
	text-indent: 8px;
}
.fadeIn span{
	animation: fadeEffect 12.5s linear infinite 0s;
	-ms-animation: fadeEffect 12.5s linear infinite 0s;
	-webkit-animation: fadeEffect 12.5s linear infinite 0s;
	color: white;
	opacity: 0;
	overflow: hidden;
	position: absolute;
}
.fadeIn span:nth-child(2){
	animation-delay: 2.5s;
	-ms-animation-delay: 2.5s;
	-webkit-animation-delay: 2.5s;
}
.fadeIn span:nth-child(3){
	animation-delay: 5s;
	-ms-animation-delay: 5s;
	-webkit-animation-delay: 5s;
}
.fadeIn span:nth-child(4){
	animation-delay: 7.5s;
	-ms-animation-delay: 7.5s;
	-webkit-animation-delay: 7.5s;
}
.fadeIn span:nth-child(5){
	animation-delay: 10s;
	-ms-animation-delay: 10s;
	-webkit-animation-delay: 10s;
}

.icon {
    width: 40px;
    height: 40px;
}

.slanted {
    background-color: #3b3c43;
    height: 500px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 0%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%); 
}


.image-container img {
	width: 370px;
	transform: rotate(150deg);
}

.image-container {
	margin-top: -125px;
}
`
