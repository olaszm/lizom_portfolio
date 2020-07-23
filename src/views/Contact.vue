<template>
  <div class="main">
    <h3>Contact Me</h3>
    <div class="wrapper">
      <form action>
        <label for="name">Name</label>
        <input type="text" v-model="name" />
        <label for="Email">Email</label>
        <input type="email" v-model="email" />
        <label for="Subject">Subject</label>
        <input type="text" v-model="subject" />
        <label for="Message">Message</label>
        <textarea name="message" v-model="message" rows="5"></textarea>
        <div class="submit-btn-container">
          <input type="submit" value="Submit" class="submit-btn" />
        </div>
      </form>

      <div class="gif-container">
        <img src="https://i.giphy.com/media/kI3xXDgyaNQubMfPuC/giphy.webp" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
  margin-bottom: 5rem;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: $small-break) {
    flex-direction: column;
  }
  @media screen and (max-width: $medium-break) {
    flex-direction: column;
  }
}

form {
  background-color: $white;
  // border: 5px solid black;
  font-size: 16px;
  text-align: left;
  width: 100%;
  max-width: 500px;
  min-width: 280px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  label {
    margin: 1rem 0;
  }
  input {
    font-family: "Open Sans", sans-serif;
    outline: none;
    height: 40px;

    background-color: #c4c4c4;
    border: none;
    padding: 0 0.4rem;
    &:focus {
      border: 5px solid black;
    }
  }
  textarea {
    font-family: "Open Sans", sans-serif;
    outline: none;

    border: none;
    background-color: #c4c4c4;
    resize: none;
    padding: 0.1rem 0.4rem;
    &:focus {
      border: 5px solid black;
    }
  }
}

.submit-btn-container {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  width: 40%;
  text-align: center;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  background-color: black;
  color: $white;
  margin: 1rem 0;
  &:hover {
    background-color: $white;
    color: black;
    border: 5px solid black;
  }
}

.gif-container {
  margin: 0 3rem;
  img {
    border-radius: 50%;
    width: 350px;
    height: 350px;
    object-fit: cover;

    @media screen and (max-width: $small-break) {
      display: none;
      // width: 150px;
      // height: 150px;
      // margin: 1.2rem;
    }
  }
  @media screen and (max-width: $medium-break) {
    margin: 1rem auto;
  }
}
</style>
