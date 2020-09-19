<template>
  <div>
    <div v-if="isAuthenticated">
      <dashboard />
    </div>
    <div id="header" v-else>
      <div class="container text-white center-content row">
        <div class="col-md-6">
          <h1 style="font-size: 40px">
            Welcome to
            <span style="color: #28A745; font-weight: bold">EasyHealth</span>
          </h1>
          <br />
          <h5
            class="text-dark"
          >Where we connect you to world class health practioners around the globe from the comfort of your home</h5>
          <button
            class="form-control w-50 shadow animate"
            style="background-color:#28A745; color: white;"
          >Click to learn more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dashboard from "@/components/pages/dashboard/Dashboard.vue";

export default {
  name: "home",
  components: {
    dashboard,
  },

  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>
<style scoped>
#header {
  min-height: 50vh;
  background: linear-gradient(rgba(1, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../../../assets/images/home-banner.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center center;
}
.center-content {
  display: flex;
  height: 80vh;
  align-items: center;
  justify-content: center;
}
.animate:hover {
  background-color: aqua !important;
  color: black !important;
}
.secbg {
  background: linear-gradient(rgba(1, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../../../assets/images/second-background.png);
  background-repeat: no-repeat;
  background-size: cover;
  /* background-attachment: fixed; */
  background-position: center;
  height: 40vh;
}
</style>
