<template>
  <footer>
    <div class="top-section">
      <div class="social-buttons">
        <a
          href="https://www.instagram.com/lizomdavid/"
          title="Instagram"
          rel="noopener"
          target="_blank"
        >
          <div class="social-btn">
            <i class="fab fa-instagram"></i>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/david-lizom-12b80b164/"
          title="LinkedIn"
          target="_blank"
          rel="noopener"
        >
          <div class="social-btn">
            <i class="fab fa-linkedin"></i>
          </div>
        </a>
        <a href="https://www.behance.net/davidlizom" title="Behance" rel="noopener" target="_blank">
          <div class="social-btn">
            <i class="fab fa-behance"></i>
          </div>
        </a>
      </div>
      <p class="phone-number">{{ $t("footer.phone") }}</p>
    </div>

    <div class="footer-logo">
      <img src="@/assets/ld_logotype-footer.gif" alt />
      <div class="copy">
        <p>{{ $t("footer.copyrights") }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
}

footer {
  margin-top: auto;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: $white;
  width: 100%;
  height: 300px;

  @media screen and (max-width: $small-break) {
    height: 180px;
  }
}

.social-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}

.phone-number {
  margin: 0.5rem 0;
  margin-bottom: 2rem;

  @media screen and (max-width: $small-break) {
    font-size: 12px;
    margin: 0.2rem 0;
    margin-bottom: 1.5rem;
  }
}

.copy {
  @media screen and (max-width: $small-break) {
    font-size: 12px;
  }
}

.social-btn {
  background-color: $white;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.25em;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  cursor: pointer;
  margin: 0 0.5rem;
  i {
    font-size: 18px;
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
    width: 1.5rem;
    height: 1.5rem;
    padding: 0.3em;
    i {
      font-size: 14px;
    }
  }
}

.footer-logo {
  height: 45px;
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
