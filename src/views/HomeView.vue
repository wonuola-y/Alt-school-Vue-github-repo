
<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import "animate.css";
</script>

<template>
  <main>
    <section class="container">
      <div class="contained">
        <div class="gen">
          <div class="sect-one">
            <h3 class="animate__animated animate__backInDown">
           <div class="roller">
            <span id="rolltext">Hi! <br/>
             Hola! <br/>Ciao! <br/> Bonjour!<br/>Hallo!<br/>

</span>
           </div> I'm Wonuola,
            </h3>
<div class="intro">
  
  <h1 class="animate__animated animate__backInDown">
              Frontend developer
            </h1>
            <h3 class="animate__animated animate__backInDown">
              based in Nigeria
            </h3>
            <br />
            <button><a href="/repos">Repos</a></button>
</div>
          </div>
      
         <div id="slideshow">
<div class="slide-wrapper">
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
    <div class="slide"></div>
</div>
         </div>

          </div>
        </div>
        <div class="about ">
          <h1 >About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates,
          </p>
        </div>

    </section>
   
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap");
.gen {
  display: flex;
  align-items: center;

}
.roller{
  border: 2px solid green;
  height: 2.125rem;
  line-height: 3.2rem;
  position: relative;
  overflow: hidden; 
  width: 30%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  
  color: #1D3557;
}
.intro{
border: #1D3557 2px solid;
}
.roller #rolltext {
  position: absolute;
  top: 0;
  animation: slider 10s infinite;  
}

@keyframes slider {
  0%{
    top:0;
  }
  25%{
    top: -1rem;    
  }
  50%{
    top: -4rem;
  }
  60%
  {
    top: -7rem;
  }
  /* 85%{
    top: -9rem;
  } */
  90%{
    top: -11rem;
  }
  /* 75%{
    top: -16rem;
  }
  90%{
    top: -20rem;
  }
  100%{
    top: -22rem;
  } */
}
.img {
  width: 50%;
}
.sect-one {
  width: 70%;
}
img {
  width: 100%;
}
em {
  font-style: normal;
}
h1 {
  font-family: "Poppins", sans-serif;
  font-size: 3em;
  font-weight: 800;
  /* letter-spacing: .05cm; */
}
h3 {
  font-size: 1.5em;
}
button{
position: fixed;
/* transform: translate(-50%, -50%);    */
 background:#371B58;
    border: none;
    width: 150px;
    position: relative;
    padding: .3em .7em;
    transition: .1s all;
}

button a{
    position: relative;
    z-index: 2;
}
button:hover {
 border: 2px solid #7858A6;
    background:white;
    color: rgb(12, 12, 12);
    transition: .1s all;
  /* background: rgb(253, 247, 247); */
    border-radius: 5px;
  
  /* transition: all .35s; */
}
button:hover > a{
    color: rgb(10, 10, 10);
    text-decoration: none;
    font-size: 1em;
}
a {
  color: #f5f5f5;
  text-decoration: none;
}
section {
  border: 2px rgb(177, 31, 31) solid;

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contained {
  /* width: 90vw; */
  display: flex;
  border: 2px solid green;
  /* flex-direction: column; */
 
  /* align-items: center; */
  margin: 1em;

}


.about {
display: flex;
justify-content: center;
/* align-items: center; */
margin-top: 5em;
flex-direction: column;
}
.about > h1 {
  font-size: 3em;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
}


@media  screen and (max-width: 600px) {
  .gen {
   display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .sect-one{
    width: 100%;

  }
  .img{
    margin:1em 0 ;
    width: 100%;
  }
  .sect-one > h1{
    font-size: 2em;
   
  }
}
</style>