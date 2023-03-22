
<script>
import heroImg from '@/assets/IKJF2031.jpg'
import "animate.css";

export default {
  data(){
    return{
      heroImg
    }
  }
}
</script>

<template>
  <main>
    <section class="container">
      <div class="contained">
        <div class="gen">
          <div class="sect-one">
            <h3 class="animate__animated animate__bounceInLeft">
           <div class="roller">
            <span id="rolltext">Hi! <br/>
             Hola! <br/>Ciao! <br/> Bonjour!<br/>Hallo!<br/>

</span>
           </div> I'm Wonuola,
            </h3>
<div class="intro">
  
  <h1 class="animate__animated animate__bounceInLeft">
              Frontend developer
            </h1>
            <h3 class="animate__animated animate__bounceInLeft">
              based in Lagos, Nigeria
            </h3>
            <br />
            <button><a href="/repos">Repos</a></button>
</div>
          </div>
      
         <div class="hero-img">
<img :src="heroImg" alt="hero-img">
         </div>

          </div>
        </div>
        <div class="aboutme">
          <h1 >About Me</h1>
          <p> Hi there, I'm <span>
      Wonuola Alonge,
    </span> and I'm not your typical <span>front-end developer</span>. 
</p>
<p>
  I don't just build websites - I create immersive online experiences that captivate and inspire.
</p>
<p>To Know more about me, click on the button below.</p>
<button><a href="./AboutView.vue">About Me</a></button>
        </div>

    </section>
   
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
.gen {
  display: flex;
  align-items: center;
  margin: 1em 0;

}
.roller{
  
  height: 2.125rem;
  line-height: 3.2rem;
  position: relative;
  overflow: hidden; 
  width: 30%;
  display: flex;
  /* justify-content: center;
  align-items: center; */

}
h1{
  margin: 0;
}
.intro{
  width: 50vw;
  margin: 1em 0;

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
/* transform: translate(-50%, -50%);    */margin: .4em;
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

    background: #7858A6;
    color: rgb(12, 12, 12);
    transition: .1s all;
  /* background: rgb(253, 247, 247); */
    border-radius: 5px;
  
  /* transition: all .35s; */
}
button:hover >  a {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-size: 1em;
}
a{
  color: #f5f5f5;
  text-decoration: none;
}
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contained {
  /* width: 90vw; */
  display: flex;

  margin: 1em;



}
.hero-img{
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-img > img{
  width: 60%;
  border-radius: 50px;
  margin: 1em 0;

}
.hero-img > img:hover{
  width: 62%;
  transition: all .4s ease-in-out;
box-shadow: 21px -11px 136px 26px rgba(120,88,166,0.71);
 ;
}


.aboutme {
display: flex;
height: 100vh;
justify-content: center;
align-items: center;
margin-top: 5em;
flex-direction: column;
}
.aboutme > h1 {
  margin:.2em 0;
  font-size: 3em;
  font-weight: 800;
  font-family: "Poppins", sans-serif;
}
.aboutme > p {
  font-size: 1.2em;
  font-weight: 400;
  font-family: "Lato", sans-serif;
  margin: .2em;
  text-align: center;
  width: 70%;
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