<template>
  <div class="about">
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
        <img src="@/assets/portrait.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

.wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem auto;
  width: 75%;
  font-size: 20px;
  @media screen and (max-width: $small-break) {
    width: 100%;
  }
}

.about-side {
  width: 60%;
  max-width: 550px;
  margin: 1.5rem;
  @media screen and (max-width: $small-break) {
    width: initial;
    flex: 3;
  }
  p {
    text-align: left;
    margin: 1rem 0;
  }
}

.photo {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin: 0 2rem;
  margin-top: 1rem;
  img {
    height: auto;
    width: 105%;
    min-width: 90px;
    max-width: 400px;
  }
}
</style>
