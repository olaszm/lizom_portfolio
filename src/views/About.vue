<template>
  <div class="main">
    <div class="wrapper">
      <div class="photo">
        <img src="@/assets/portrait.png" alt />
      </div>
      <div class="about-side">
        <h3>{{ $t("page_titles.about_me") }}</h3>
        <p>{{ $t("about.p1") }}</p>
        <p>{{ $t("about.p2") }}</p>

        <p>
          {{ $t("about.p3") }}
        </p>
        <p>
          {{ $t("about.p4") }}
        </p>
        <p>
          {{ $t("about.p5") }}
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
