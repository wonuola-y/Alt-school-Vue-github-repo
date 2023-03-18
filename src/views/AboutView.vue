
<script>
import 'bootstrap/dist/css/bootstrap.min.css';

import "animate.css";
</script>
<template>
  <div class="about">
    
   <div>
    <h1>Who I am!</h1>
   <p> Hi there, I'm <span>
      Wonuola Alonge,
    </span> and I'm not your typical <span>front-end developer</span>. 
</p>
<p>
  I don't just build websites - I create immersive online experiences that captivate and inspire.
</p>

<p>With my expertise in <span >JavaScript (React, Vue), Sass, Scss, and Tailwind CSS.</span><br/> I combine technology and creativity to develop visually stunning designs that make a statement.</p>

<p>As a collaborator and problem solver, I love working with designers and developers to create experiences that delight and engage.<br/> I'm constantly pushing boundaries and exploring new ideas to stay ahead of the game.</p>

<p>When I'm not coding, you can find me exploring technologies, experimenting with new recipes, or out playing Township. </p>

<p>Let's join forces and create something magical together.</p>
   </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
h1{
  font-size: 2em;
  font-weight: 700;
  color: #371B58;
  margin-bottom: 1em;
}
  .about {
    min-height: 80vh;
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    margin: 1em;
  }
  .about > div > p {
   font-size: 1em;
   font-family: 'Lato', sans-serif;
  }
  span{
    font-weight: 700;
    font-size: 1em;
    color: #371B58;
  }
  span:hover{
    font-size: 1.5em;
transition: all .5s ease-in-out;
  }
  
 
.about {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  /* border-right: .15em solid orange; The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .5s step-end infinite;

transition: all 5s ease-in;  }

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@media screen and (max-width:600px)  {
  .about{
    margin: 1em;
  white-space: pre-wrap;
  }
}

</style>
