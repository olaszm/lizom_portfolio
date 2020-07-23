<template>
  <div class="main">
    <h3>About me</h3>
    <div class="wrapper">
      <div class="about-side">
        <p>Hello! My name is David.</p>
        <p>I am a hungarian illustrator and motion designer living in Pecs</p>

        <p>
          I like to create playful images and animations with the use of both
          digital and traditional tools. I love bringing people's ideas to life
          and my goal is to concieve them as best as I possibly can.
        </p>
        <p>
          Aside from art, my two main interests are skateboarding and music and
          I would love to get an opportunity to work on anything related to
          them.
        </p>
        <p>
          I am available for freelance work so feel free to contact me with any
          idea. :)
        </p>
      </div>
      <div class="photo">
        <img src="@/assets/portrait.png" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
  margin-bottom: 5rem;
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: $small-break) {
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }
}

.about-side {
  max-width: 550px;
  p {
    text-align: left;
    margin: 1rem 0;
  }
  @media screen and (max-width: $small-break) {
    order: 2;
    min-width: 180px;
  }
}

.photo {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 2rem;
  margin-top: 1rem;
  img {
    height: auto;
    width: 100%;
    min-width: 200px;
    max-width: 400px;
  }
  @media screen and (max-width: $small-break) {
    justify-content: center;
    margin: 1rem auto;
    img {
      min-width: 100px;
      max-width: 150px;
    }
  }
}
</style>
