<template>
  <div class="main">
    <h3>{{ $t("page_titles.contact_me") }}</h3>
    <div class="wrapper">
      <form action @submit.prevent="sendForm">
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

    <!-- <transition name="fade">
      <Modal v-if="isModalOpen">
        <h2>koszipuszi</h2>
      </Modal>
    </transition>-->
  </div>
</template>

<script>
// import Modal from "@/components/Modal";
import { EventBus } from "@/plugins/EventBus";
import sendgrid from "@sendgrid/mail";

export default {
  components: {
    // Modal
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      // isModalOpen: false,
    };
  },

  methods: {
    sendForm() {
      if (this.email != "" && this.message != "") {
        this.sendEmail();
        EventBus.$emit("closeModal", (state) => {
          this.isModalOpen = state;
        });
      }
      // this.isModalOpen = true;
    },

    sendEmail() {
      const msg = {
        to: "martin1olasz@gmail.com",
        from: this.email,
        subject: this.subject,
        text: this.message,
      };
      sendgrid
        .send(msg)
        .then()
        .catch((err) => console.log(err));
    },
  },
  created() {
    EventBus.$on("closeModal", (state) => {
      this.isModalOpen = state;
    });

    sendgrid.setApiKey(process.env.VUE_APP_SENDGRID);
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
