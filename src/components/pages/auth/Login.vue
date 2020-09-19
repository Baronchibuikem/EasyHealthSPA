<template>
  <div>
    <md-app-content class="flex-center position-ref">
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="content">
            <h4 class="my-1">Welcome back</h4>
            <h6 class="text-muted">Log into your account</h6>
          </div>
        </div>
        <div class="row justify-content-center">
          <div id="login-form-container" class="shadow rounded mb-3 top-strip">
            <form class="mx-3 mt-3 p-3" autocomplete="off" @submit.prevent="login">
              <md-field>
                <label style="font-size: 12px;">Email</label>
                <md-input v-model="email" type="email"></md-input>
              </md-field>
              <md-field>
                <label style="font-size: 12px;">Password</label>
                <md-input v-model="password" type="password"></md-input>
              </md-field>
              <md-checkbox
                v-model="remember"
                class="md-primary"
                style="font-size: 12px;"
              >Remember me?</md-checkbox>
              <button
                type="submit"
                class="btn btn-success btn-block"
                :class="loading ? 'loader': ''"
                :disabled="!isFormValid"
              >Login</button>
              <div id="form-text" class="content mt-3">
                <p class="text-muted f-12">
                  <a href>Forgot Password?</a>
                </p>
              </div>
            </form>
            <div class="card content border-0 rounded-0 rounded-bottom bottom">
              <div class="card-body">
                <p class="text-muted">
                  Don't have an account?
                  <router-link to="signup">Sign Up</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </md-app-content>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      remember: true,
      loading: false,
      errors: {
        validation: "",
      },
    };
  },
  computed: {
    ...mapState({ alert: (state) => state.alert }),
    isFormValid() {
      return this.email && this.password;
    },
  },
  methods: {
    login() {
      this.loading = true;
      let email = this.email;
      let password = this.password;
      let self = this;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/dashboard"))
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },
  },
};
</script>