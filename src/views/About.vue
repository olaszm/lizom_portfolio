<template>
  <div class="main">
    <div class="wrapper">
      <div class="photo">
        <img src="@/assets/portrait.png" alt />
      </div>
      <div class="about-side">
        <h3>About me</h3>
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
  padding: 0 2rem;
  margin-top: 3rem;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: $small-break) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
}

.about-side {
  max-width: 550px;
  min-width: 300px;

  h3 {
    margin: 0;
  }
  p {
    text-align: left;
    margin: 2rem 0;
  }
  @media screen and (max-width: $small-break) {
    min-width: 180px;
  }
}

.photo {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 2.5rem;
  img {
    height: auto;
    width: 100%;
    min-width: 200px;
    max-width: 400px;
  }

  @media screen and (max-width: $small-break) {
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    img {
      min-width: 100px;
      max-width: 150px;
    }
  }
}
</style>
