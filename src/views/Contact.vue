<template>
  <div class="main">
    <h1>{{ $t("page_titles.contact_me") }}</h1>
    <div class="wrapper">
      <form action ref='form' @submit.prevent="sendForm" novalidate>
        <label for="Name">{{ $t("contact.name") }}</label>
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
    <b>{{$t('form_errors.error_msg')}}</b>
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
      <div v-if="isFormSubmited" class="gif-container">
        <img v-if="isEng"
          src="@/assets/submit_thanks.gif"
          alt
        />
        <img v-else
          src="@/assets/submit_thanks-hun.gif"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from "@/plugins/EventBus";
export default {
    metaInfo: {
    title: "David Lizom Motion & Illustration",
    titleTemplate: "%s | Contact",
    meta: [
      {
        vmid: "description",
        name: "description",
        content: `Feel free to contact me for uniqe and cool animations and illustrations`,
      },
    ],
  },
  components: {},
  data() {
    return {
      isMobile : false,
      isFormSubmited : false ,
      errors: [],
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },

  methods: {
     onResize() {
      this.isMobile = window.innerWidth < 780;
    },
    sendForm() {
      this.errors = []
      if(!this.name){
          const msg = this.isEng ? 'Name required.' : 'Név kitöltése kötelező.'
          this.errors.push(msg)
      }

      if(!this.email){
       const msg = this.isEng ? 'E-mail required.' : 'E-mail kitöltése kötelező.'
          this.errors.push(msg)
      } else if(!this.validEmail(this.email)){
         const msg = this.isEng ? 'Valid E-mail required.' : 'Helytelen megadott E-mail cίm.'
          this.errors.push(msg)
      }

       if(!this.message){
          const msg = this.isEng ? 'Message required.' : 'Üzenet kitöltése kötelező.'
          this.errors.push(msg)
      
      } 
      if(!this.errors.length){
        const msg = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        this.sendEmail(msg)
      

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
    sendEmail(msg){
        fetch("/email.php", {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            msg
          }),
        })
          .then(() => {
            if(this.isMobile){
              EventBus.$emit("closeModal", (state) => {
              this.isModalOpen = state;
              });
            }
            this.isFormSubmited = true
          })
          .catch(function(error) {
            console.log(error);
          });
    }
  },
    computed: {
    isEng() {
      return this.$i18n.locale == "en" ? true : false;
    },},
  mounted() {
      this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    EventBus.$on("closeModal", (state) => {
      this.isModalOpen = state;
    });
  },
   beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_util";

.wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: minmax(300px, 1fr) minmax(350px, 1fr);
  gap: 6rem;
  align-items: center;
  @media screen and (max-width: $small-break) {
   grid-template-columns: 1fr;
   place-items: center;
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
    -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
    font-family: "Rubik", sans-serif;
    outline: none;
    height: 40px;
    background-color: $white;
    border: 1px solid black;
    padding: 0 0.4rem;
    transition: all 100ms ease;
    font-size: 16px;
    &:focus {
      border: 3px solid black;
    }
  }
  textarea {
    -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
    font-family: "Rubik", sans-serif;
    box-sizing: border-box;
    outline: none;
    border: 1px solid black;
    background-color: $white;
    resize: none;
    font-size: 16px;
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
      -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
  font-family: inherit;
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
  margin-bottom: 0;
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
  max-height: 600px;  
  img {
    width: 100%;
    max-height: 600px;
    object-fit: contain;
  }
  @media screen and (max-width: $small-break) {
    display: none;
  }
}
</style>
