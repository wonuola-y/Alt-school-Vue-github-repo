
<script>
import "animate.css";
</script>

<template>
  <main>
    <section>
      <div>
        <div class="gen">
          <div class="sect-one">
            <h3 class="animate__animated animate__backInDown">
              Hi, I'm Wonuola,
            </h3>

            <h1 class="animate__animated animate__backInDown">
              Lorem ipsum dolor, sit amet consectetur.
            </h1>
            <h3 class="animate__animated animate__backInDown">
              based in Nigeria
            </h3>
            <br />
            <button><a href="/repos">Repos</a></button>
          </div>
          <div class="img">
            <img
              src="https://images.unsplash.com/photo-1677166869710-3a030637ecb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80"
              alt="img"
            />
          </div>
        </div>
        <div class="about">
          <h1 class="about">About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates,
          </p>
        </div>
      </div>
    </section>
   
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700;800&display=swap");
.gen {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border: 2px saddlebrown solid;

  /* width: 90vw; */
  /* height: 70vh; */
}
.img {
  border: 2px solid rgb(119, 228, 16);
  width: 50%;
  /* height: 50%; */
}
.sect-one {
  border: 2px solid pink;
  width: 50%;
  /* height: 50%; */
}
img {
  width: 100%;
  /* height: 60%; */
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
button {
  background-color: black;
  color: white;
  border: 2px solid #f5f5f5;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 700;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
a {
  color: #f5f5f5;
  text-decoration: none;
}
section {
  border: 2px rgb(177, 31, 31) solid;
  width: 100vw;
  display: flex;
  justify-content: center;
}
section > div {
  width: 90vw;
  display: flex;
  border: 2px solid green;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* margin: 1em; */
  height: 100vh;
}

.gen {
  border: 2px solid blue;
}
section > .about {
  border: 2px solid red;
}
</style>