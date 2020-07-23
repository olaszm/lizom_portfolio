<template>
  <footer>
    <div class="top-section">
      <div class="social-buttons">
        <a href="https://www.instagram.com/lizomdavid/" target="_blank">
          <div class="social-btn">
            <i class="fab fa-instagram"></i>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/david-lizom-12b80b164/" target="_blank">
          <div class="social-btn">
            <i class="fab fa-linkedin"></i>
          </div>
        </a>
        <a href="https://www.behance.net/davidlizom" target="_blank">
          <div class="social-btn">
            <i class="fab fa-behance"></i>
          </div>
        </a>
      </div>
      <p class="phone-number">Tel.: +36 30 380 0343</p>
    </div>

    <div class="footer-logo">
      <img src="@/assets/logotype.svg" alt />
      <div class="copy">
        <p>&copy; Copyright 2020. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_variables";

a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}

footer {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: $white;
  width: 100%;
  padding: 1rem 0;

  //   Test
  position: absolute;
  bottom: 0;
  height: 220px;
  @media screen and (max-width: $small-break) {
    height: 110px;
  }
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-number {
  margin: 0.4rem 0;

  @media screen and (max-width: $small-break) {
    font-size: 10px;
    margin: 0.2rem 0;
  }
}

.copy {
  @media screen and (max-width: $small-break) {
    font-size: 10px;
  }
}

.social-btn {
  background-color: $white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  margin: 0 0.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  i {
    color: black;
  }
  &:hover {
    background-color: black;
    border: 1px solid $white;
    i {
      color: $white;
    }
  }
  @media screen and (max-width: $small-break) {
    height: 15px;
    width: 15px;
    padding: 0.6rem;
  }
}

.footer-logo {
  height: 40px;
  margin: 1rem 0;
  img {
    height: inherit;
  }
  @media screen and (max-width: $small-break) {
    height: 25px;
    margin: 0.5rem 0;
  }
}
</style>
