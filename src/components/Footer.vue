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
    </div>
    <div class="copy">
      <p>&copy; Copyright 2020. All rights reserved.</p>
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
  color: #eeeeee;
  width: 100%;
  padding: 1rem 0;

  //   Test
  position: absolute;
  bottom: 0;
  height: 140px;
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.3rem;
}

.social-btn {
  background-color: white;
  border-radius: 50%;
  padding: 0.5em;
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
  margin: 0.5em;
  img {
    height: inherit;
  }
}
</style>
