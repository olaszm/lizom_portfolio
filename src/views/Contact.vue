<template>
  <div class="main">
    <h3>{{ $t("page_titles.contact_me") }}</h3>
    <div class="wrapper">
      <form action @submit.prevent="sendForm" novalidate>


 
        <label for="name">{{ $t("contact.name") }}</label>
        <input type="text" v-model="name" required />
        <label for="Email">{{ $t("contact.email") }}</label>
        <input type="email" v-model="email" required />
        <label for="Subject">{{ $t("contact.subject") }}</label>
        <input type="text" v-model="subject" />
        <label for="Message">{{ $t("contact.message") }}</label>
        <textarea
          required
          name="message"
          v-model="message"
          rows="10"
        ></textarea>

         <p class="error-container" v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
  </p>


        <div class="submit-btn-container">
          <input
            type="submit"
            :value="$t('contact.submit')"
            class="submit-btn"
          />
        </div>

        
      </form>

      <div class="gif-container">
        <img
          src="https://i.giphy.com/media/kI3xXDgyaNQubMfPuC/giphy.webp"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/EventBus";
export default {
  components: {},
  data() {
    return {
      errors: [],
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
    sendForm() {
      this.errors = []
      if(!this.name){
        this.errors.push('Name required.')
      }

      if(!this.email){
        this.errors.push('Email required.')
      } else if(!this.validEmail(this.email)){
        this.errors.push('Valid email required.')
      }


      if(!this.errors.length){
        const msg = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };

        
        this.sendEmail(msg)
        EventBus.$emit("closeModal", (state) => {
          this.isModalOpen = state;
        });

        this.name = "";
        this.email = "";
        this.message = "";
        this.subject = "";
      }
    },
     validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    sendEmail(messageToSend){
        fetch("/api", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messageToSend
          }),
        })
          .then(() => {})
          .catch(function(error) {
            console.log(error);
          });
    }
  },
  created() {
    EventBus.$on("closeModal", (state) => {
      this.isModalOpen = state;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
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
  font-size: 16px;
  text-align: left;
  width: 100%;
  max-width: 550px;
  min-width: 280px;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  label {
    margin: 1rem 0;
  }
  input[type="text"],
  input[type="email"] {
    font-family: "Rubik", sans-serif;
    outline: none;
    height: 40px;
    background-color: $white;
    border: 1px solid black;
    padding: 0 0.4rem;
    transition: all 100ms ease;
    &:focus {
      border: 3px solid black;
    }
  }
  textarea {
    font-family: "Rubik", sans-serif;
    box-sizing: border-box;
    outline: none;
    border: 1px solid black;
    background-color: $white;
    resize: none;
    padding: 0.1rem 0.4rem;
    transition: all 100ms ease;
    &:focus {
      border: 3px solid black;
    }
  }
}

.submit-btn-container {
  display: flex;
  justify-content: flex-end;
}

.submit-btn {
  width: 40%;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: $primary;
  color: black;
  margin: 1rem 0;
  &:hover {
    background-color: $white;
    border: 3px solid black;
  }
}

.error-container {
  margin: 1rem 0;
  color : rgb(228, 101, 101);
  li {
    margin: 0 2rem;
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
    }
  }
  @media screen and (max-width: $medium-break) {
    margin: 1rem auto;
  }
}
</style>
