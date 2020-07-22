<template>
  <footer>
    <div class="social-buttons">
      <a href="https://www.instagram.com/lizomdavid/" target="_blank">
        <div class="social-btn">
          <i class="fab fa-instagram"></i>
        </div>
      </a>
      <a href target="_blank">
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
  z-index: -1;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: #eeeeee;
  width: 100%;
  padding: 1rem 0;

  //   Test
  position: absolute;
  bottom: 0;
  height: 220px;
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}

.social-btn {
  background-color: white;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  margin: 0 0.5rem;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  transform: scale(1.2);
  i {
    color: black;
  }
  &:hover {
    background-color: black;
    border: 1px solid white;
    i {
      color: white;
    }
  }
}

.footer-logo {
  height: 40px;
  margin: 1rem 0;
  img {
    height: inherit;
  }
}
</style>
