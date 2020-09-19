<template>
  <div id="app">
    <md-app class="full-height" md-mode="fixed" style="background-color: #eee;">
      <!-- Navbar -->
      <md-app-toolbar class="md-transparent shadow-none border-bottom">
        <div class="container">
          <div class="md-toolbar-row">
            <!-- For showing the sidebar on click -->
            <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <!-- if user is successfully authenticated -->
            <div id="user_menu" class="md-toolbar-section-end" v-if="isAuthenticated">
              <md-menu
                md-direction="bottom-end"
                md-align-trigger
                class="user_menu"
                :md-offset-y="14"
              >
                <span md-menu-trigger>
                  <md-avatar class="md-avatar-icon md-primary">
                    <!-- <img :src="user.avatar" alt="people" /> -->
                  </md-avatar>
                  <!-- <span class="ml-2">Dr. {{ user.firstname }} {{ user.lastname }}</span> -->
                  <md-icon>keyboard_arrow_down</md-icon>
                </span>

                <md-menu-content style="width: 165px;">
                  <md-menu-item @click="goToProfile">Profile</md-menu-item>
                  <md-menu-item @click="handleLogout">Logout</md-menu-item>
                </md-menu-content>
              </md-menu>
            </div>

            <!-- if the user is not authenticated -->
            <div id="guest_menu" class="md-toolbar-section-end" v-else>
              <div class="nav-item d-none d-md-inline-block mx-3">
                <router-link to="/" exact style="color: black">Home</router-link>
              </div>
              <div class="nav-item d-none d-md-inline-block mx-3">
                <router-link to="about" exact style="color: black">About</router-link>
              </div>
              <div class="nav-item d-none d-md-inline-block mx-3">
                <router-link to="login" exact style="color: black">Sign In</router-link>
              </div>
              <div class="nav-item d-none d-md-inline-block mx-3">
                <router-link to="signup" exact style="color: black">Sign Up</router-link>
              </div>
              <div class="nav-item d-none d-md-inline-block">
                <router-link to="addservice" exact style="color: black">Healthcare Practitioners</router-link>
              </div>
            </div>
          </div>
        </div>
      </md-app-toolbar>
      <!-- <md-app-drawer v-if="isAuthenticated">
        <md-list-item>
          <md-icon class="fa fa-calendar"></md-icon>
          <span class="md-list-item-text">Login</span>
        </md-list-item>
      </md-app-drawer>-->
      <!-- sidebar -->
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <!-- <span>Navigation</span> -->
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>
        <!-- Drawer Menu Items -->
        <md-list v-if="isAuthenticated">
          <!-- dashhoard -->
          <md-list-item @click="goToDashboard">
            <md-icon class="fa fa-newspaper-o"></md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>
          <!-- Appointments -->
          <md-list-item @click="toggleAppointments">
            <md-icon class="fa fa-calendar"></md-icon>
            <span class="md-list-item-text">Appointments</span>
            <span class="badge badge-pill badge-success">10 +</span>
          </md-list-item>
          <div class="collapse appointments">
            <div class="border-top border-bottom">
              <md-list class="md-triple-line md-dense pt-1">
                <md-list-item class="bluish-hue mx-1 mb-2 rounded">
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People" />
                  </md-avatar>

                  <div class="md-list-item-text">
                    <span class="name">Ali Connors</span>
                    <p class="text-muted date mt-1">31st Jan, 2018</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>close</md-icon>
                  </md-button>
                </md-list-item>

                <a href class="ml-2 my-2 d-inline-flex f-12 text-secondary">
                  See more
                  <span
                    style="font-size: 15px; margin-top: 2px;"
                    class="fa fa-chevron-circle-right ml-2"
                  ></span>
                </a>
              </md-list>
            </div>
          </div>

          <!-- Peer Review -->
          <md-list-item @click="togglePeerReview">
            <md-icon class="fa fa-user-md"></md-icon>
            <span class="md-list-item-text">Peers Review</span>
          </md-list-item>
          <div class="collapse peer-review">
            <div class="border-top border-bottom">
              <div class="card border-0 bluish-hue m-2">
                <md-empty-state
                  class="p-3 f-12 text-muted"
                  md-icon="error_outline"
                  md-description="You have no peer review at the moment"
                ></md-empty-state>
              </div>
            </div>
          </div>

          <!-- Referrals -->
          <md-list-item @click="toggleReferrals">
            <md-icon class="fa fa-mail-forward"></md-icon>
            <span class="md-list-item-text">Referrals</span>
            <span class="badge badge-pill badge-success">5</span>
          </md-list-item>
          <div class="collapse referrals">
            <div class="border-top border-bottom">
              <md-list class="md-triple-line md-dense pt-1">
                <md-list-item class="bluish-hue mx-1 mb-2 rounded">
                  <md-avatar>
                    <img src="https://placeimg.com/40/40/people/1" alt="People" />
                  </md-avatar>

                  <div class="md-list-item-text">
                    <span class="name">Ali Connors</span>
                    <p class="text-muted date mt-1">31st Jan, 2018</p>
                  </div>

                  <md-button class="md-icon-button md-list-action">
                    <md-icon>close</md-icon>
                  </md-button>
                </md-list-item>

                <a href class="ml-2 my-2 d-inline-flex f-12 text-secondary">
                  See more
                  <span
                    style="font-size: 15px; margin-top: 2px;"
                    class="fa fa-chevron-circle-right ml-2"
                  ></span>
                </a>
              </md-list>
            </div>
          </div>

          <!-- Settings -->
          <md-list-item :to="{name: 'profileSettings'}">
            <md-icon class="fa fa-cog"></md-icon>
            <span class="md-list-item-text">Settings</span>
          </md-list-item>
          <!-- Settings -->
          <md-list-item @click="handleLogout">
            <md-icon class="fa fa-user"></md-icon>
            <span class="md-list-item-text">Logout</span>
          </md-list-item>
        </md-list>
        <md-list v-else>
          <!-- dashhoard -->
          <md-list-item>
            <md-icon class="fa fa-newspaper-o"></md-icon>
            <span class="md-list-item-text">
              <router-link to="login" exact class="text-dark">Signin</router-link>
            </span>
          </md-list-item>
          <md-list-item>
            <md-icon class="fa fa-newspaper-o"></md-icon>
            <span class="md-list-item-text">
              <router-link to="signup" exact class="text-dark">Sign up</router-link>
            </span>
          </md-list-item>
          <md-list-item>
            <md-icon class="fa fa-newspaper-o"></md-icon>
            <span class="md-list-item-text">
              <router-link to="addservice" exact class="text-dark">Healthcare Practitioners</router-link>
            </span>
          </md-list-item>
        </md-list>
      </md-app-drawer>
      <!-- end of sidebar -->

      <!-- End of Navbar -->

      <!-- Where contents go -->
      <md-app-content>
        <router-view></router-view>
      </md-app-content>

      <!-- Footer will be displayed here -->
      <!-- <Footer/> -->
    </md-app>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
// import MyFooter from "./components/MyFooter.vue";
import JQuery from "jquery";
import "bootstrap";
let $ = JQuery;

export default {
  name: "navbar",
  data() {
    return {
      menuVisible: false,
      signedIn: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    toggleAppointments() {
      $(".peer-review").collapse("hide");
      $(".referrals").collapse("hide");
      $(".appointments").collapse("toggle");
    },
    togglePeerReview() {
      $(".appointments").collapse("hide");
      $(".referrals").collapse("hide");
      $(".peer-review").collapse("toggle");
    },
    toggleReferrals() {
      $(".appointments").collapse("hide");
      $(".peer-review").collapse("hide");
      $(".referrals").collapse("toggle");
    },
    ...mapActions("auth", ["logout"]),
    handleLogout() {
      this.$store.dispatch("logout").then(() => this.$router.push("/"));
    },
    goToDashboard() {
      this.$router.push("/dashboard");
    },
    goToProfile() {
      this.$router.push(`/${this.user.username}`);
    },
  },
  created() {
    $(".appointments").collapse();
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
<style>
</style>