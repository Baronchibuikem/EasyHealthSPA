<template>
  <div>
    <md-app-content>
      <div class="container">
        <div class="row justify-content-center mb-3">
          <div class="content">
            <h4 class="my-1">Create an account</h4>
            <h6 class="text-muted">It's easy and fast!</h6>
          </div>
        </div>
        <div class="row justify-content-center">
          <div id="login-form-container" class="shadow rounded mb-3 top-strip">
            <form class="mx-3 mt-3 p-3" autocomplete="off" @submit.prevent="submitForm">
              <!-- <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div> -->
              <md-field>
                <label>First name</label>
                <md-input @input="clearAlert" v-model="user.firstname"></md-input>
              </md-field>
              <md-field>
                <label>Last Name</label>
                <md-input @input="clearAlert" v-model="user.lastname"></md-input>
              </md-field>
              <md-field>
                <label>Email</label>
                <md-input @input="clearAlert" v-model="user.email" type="email"></md-input>
              </md-field>
              <md-field>
                <label>Password</label>
                <md-input @input="clearAlert" v-model="user.password" type="password"></md-input>
              </md-field>
              <button
                type="submit"
                class="btn btn-success btn-block"
                :class="loading ? 'loader': ''"
              >Create account</button>
              <div style="font-size: 12px;" id="form-text" class="content text-muted mt-3">
                <p>
                  By signing up, you confirm that you have read and agreed to our
                  <a
                    href
                  >terms of use</a> and
                  <a href>privacy policy</a>
                </p>
              </div>
            </form>
            <div class="card content border-0 rounded-0 rounded-bottom bottom">
              <div class="card-body">
                <p class="text-muted">
                  Already have an account?
                  <router-link :to="{name: 'login'}">Login</router-link>
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
import { mapActions } from "vuex";
export default {
  name: "signup",
  data: () => ({
    user: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    loading: false,
  }),
  computed: {
    // ...mapActions(""),
  },
  methods: {
    ...mapActions(["auth", "register"]),
    ...mapActions({ clearAlert: "alert/clear" }),
    submitForm() {
      this.loading = true;
      this.register(this.user);
      this.loading = false;
    },
  },
};
</script>