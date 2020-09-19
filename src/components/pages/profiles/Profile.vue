<template>
  <div>
    <md-app-content>
      <div class="container">
        <div class="profile-bg">
          <div class="bg-content d-flex">
            <div class="mr-3">
              <img :src="currentUser.avatar" class="rounded" />
            </div>
            <div class="mt-2">
              <h3>{{ fullname }}</h3>
              <p>
                <span class="badge badge-pill badge-secondary">Neuro-surgeon</span>
              </p>
              <p>
                <md-icon class="text-muted">location_on</md-icon>No. 13 jama'a road, ungwan romi, Kaduna
              </p>
              <button
                class="btn btn-success f-12 align-self-end"
                @click="toggleDate"
              >Book Appointment</button>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div id="profile-tabs">
          <!-- Tabs Header -->
          <ul class="nav nav-tabs rounded">
            <li class="nav-item">
              <a
                class="p-3 nav-link active"
                id="general-tab"
                data-toggle="tab"
                href="#general"
                role="tab"
                aria-controls="general"
                aria-selected="true"
              >
                <md-icon class="mr-2">account_circle</md-icon>General
              </a>
            </li>
            <li class="nav-item">
              <a
                class="p-3 nav-link"
                id="appointment-tab"
                data-toggle="tab"
                href="#appointment"
                role="tab"
                aria-controls="appointment"
                aria-selected="false"
              >
                <md-icon class="mr-2">calendar_today</md-icon>Appointment
              </a>
            </li>
            <li class="nav-item">
              <a
                class="p-3 nav-link"
                id="workplace-tab"
                data-toggle="tab"
                href="#workplace"
                role="tab"
                aria-controls="workplace"
                aria-selected="false"
              >
                <md-icon class="mr-2">work</md-icon>Workplace
              </a>
            </li>
            <li class="nav-item">
              <a
                class="p-3 nav-link"
                id="education-tab"
                data-toggle="tab"
                href="#education"
                role="tab"
                aria-controls="education"
                aria-selected="false"
              >
                <md-icon class="mr-2">school</md-icon>Education
              </a>
            </li>
            <li class="nav-item">
              <a
                class="p-3 nav-link"
                id="review-tab"
                data-toggle="tab"
                href="#review"
                role="tab"
                aria-controls="review"
                aria-selected="false"
              >
                <md-icon class="mr-2">star</md-icon>Reviews
              </a>
            </li>
          </ul>

          <!-- Tab panes -->
          <div class="tab-content mb-3">
            <div
              class="pt-2 tab-pane fade show active"
              id="general"
              role="tabpanel"
              aria-labelledby="general"
            >
              <div class="card border-0 shadow-rmx">
                <div
                  class="ap-header card-header border-0"
                  style="background: #eef4f6;"
                >About {{ fullname }}</div>
                <p class="p-3" style="color: hsl(196, 16%, 30%); line-height: 2.2;">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div class="ap-header card-header border-0" style="background: #eef4f6;">Location</div>
                <p
                  class="p-3"
                  style="color: hsl(196, 16%, 30%)"
                >No. 13 Jama'a road, Ungwan romi, Kaduna.</p>
                <div
                  class="ap-header card-header border-0"
                  style="background: #eef4f6;"
                >Work Experience</div>
                <div class="card-footer text-muted border-0 bg-transparent">
                  <a href>
                    <span class="fa fa-plus mr-3"></span>Add a place of work
                  </a>
                </div>
                <p class style="color: hsl(196, 16%, 30%)">
                  <md-list class="md-triple-line md-dense">
                    <md-list-item>
                      <img
                        class="rounded mr-3"
                        width="60"
                        height="60"
                        src="https://placeimg.com/40/40/people/8"
                        alt="People"
                      />
                      <div class="md-list-item-text">
                        <span>Ahmadu Bello University Teaching Hospital</span>
                        <span>Surgeon</span>
                        <p>2009 - 2015</p>
                      </div>
                    </md-list-item>
                    <md-list-item>
                      <img
                        class="rounded mr-3"
                        width="60"
                        height="60"
                        src="https://placeimg.com/40/40/people/8"
                        alt="People"
                      />
                      <div class="md-list-item-text">
                        <span>St. Gerard Hospital</span>
                        <span>Surgeon</span>
                        <p>2015 - Date</p>
                      </div>
                    </md-list-item>
                  </md-list>
                </p>
              </div>
            </div>
            <div
              class="pt-2 fade tab-pane"
              id="appointment"
              role="tabpanel"
              aria-labelledby="appointment"
            >
              <div class="row">
                <div class="col-md-8">
                  <div class="card border-0 shadow-rmx">
                    <div class="ap-header card-header border-0 nav nav-tabs py-0 mb-2">
                      <a
                        class="nav-item nav-link active mr-3 py-3"
                        id="upcoming-tab"
                        data-toggle="tab"
                        href="#upcoming"
                        role="tab"
                        aria-controls="upcoming"
                        aria-selected="true"
                      >Upcoming</a>
                      <a
                        class="nav-item nav-link py-3"
                        id="previous-tab"
                        data-toggle="tab"
                        href="#previous"
                        role="tab"
                        aria-controls="previous"
                        aria-selected="false"
                      >Previous</a>
                    </div>

                    <div class="tab-content" id="nav-tabContent">
                      <div
                        class="tab-pane fade show active"
                        id="upcoming"
                        role="tabpanel"
                        aria-labelledby="upcoming"
                      >
                        <table class="table table-borderless appointment">
                          <tbody>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  :src="currentUser.avatar"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Ali Connors
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">31st Jan, 2018</p>
                                <span class="text-muted f-11 time">in 3 months</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                              <td class="align-text-top">
                                <md-menu md-direction="bottom-end">
                                  <md-button class="md-icon-button" md-menu-trigger>
                                    <md-icon>more_horiz</md-icon>
                                  </md-button>
                                  <md-menu-content class="rounded shadow">
                                    <md-menu-item>Re-schedule</md-menu-item>
                                    <md-menu-item>Cancel</md-menu-item>
                                  </md-menu-content>
                                </md-menu>
                              </td>
                            </tr>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  src="https://placeimg.com/40/40/people/5"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Scot Jennifer
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">1st mar, 2018</p>
                                <span class="text-muted f-11 time">in 3 months</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                              <td class="align-text-top">
                                <md-menu md-direction="bottom-end">
                                  <md-button class="md-icon-button" md-menu-trigger>
                                    <md-icon>more_horiz</md-icon>
                                  </md-button>
                                  <md-menu-content class="rounded shadow">
                                    <md-menu-item>Re-schedule</md-menu-item>
                                    <md-menu-item>Cancel</md-menu-item>
                                  </md-menu-content>
                                </md-menu>
                              </td>
                            </tr>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  src="https://placeimg.com/40/40/people/3"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Sandra Adams
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">19th feb, 2018</p>
                                <span class="text-muted f-11 time">in 3 months</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                              <td class="align-text-top">
                                <md-menu md-direction="bottom-end">
                                  <md-button class="md-icon-button" md-menu-trigger>
                                    <md-icon>more_horiz</md-icon>
                                  </md-button>
                                  <md-menu-content class="rounded shadow">
                                    <md-menu-item>Re-schedule</md-menu-item>
                                    <md-menu-item>Cancel</md-menu-item>
                                  </md-menu-content>
                                </md-menu>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="card-footer text-muted border-0 bg-transparent">Show more</div>
                      </div>
                      <div class="tab-pane fade" id="previous" role="tabpanel" aria-labelledby>
                        <table class="table table-borderless appointment">
                          <tbody>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  :src="currentUser.avatar"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Ali Connors
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">31st Jan, 2018</p>
                                <span class="text-muted f-11 time">3 months ago</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                            </tr>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  src="https://placeimg.com/40/40/people/5"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Scot Jennifer
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">1st mar, 2018</p>
                                <span class="text-muted f-11 time">3 months ago</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                            </tr>
                            <tr>
                              <td class="align-text-top">
                                <img
                                  src="https://placeimg.com/40/40/people/3"
                                  class="rounded-circle mr-3 align-top"
                                />
                                Sandra Adams
                              </td>
                              <td class="align-text-top">
                                <p class="mb-1">19th feb, 2018</p>
                                <span class="text-muted f-11 time">3 months ago</span>
                              </td>
                              <td class="align-text-top">12:00 PM</td>
                              <td class="align-text-top">
                                <md-menu>
                                  <md-button class="md-icon-button" md-menu-trigger>
                                    <md-icon>more_horiz</md-icon>
                                  </md-button>
                                  <md-menu-content class="rounded shadow">
                                    <md-menu-item>View</md-menu-item>
                                  </md-menu-content>
                                </md-menu>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="card-footer text-muted border-0 bg-transparent">Show more</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="pt-2 fade tab-pane"
              id="workplace"
              role="tabpanel"
              aria-labelledby="workplace"
            >Workplace</div>
            <div
              class="pt-2 fade tab-pane"
              id="education"
              role="tabpanel"
              aria-labelledby="education"
            >
              <div class="card border-0 shadow-rmx">
                <div class="ap-header card-header border-0" style="background: #eef4f6;">University</div>
                <div class="card-footer text-muted border-0 bg-transparent">
                  <a href>
                    <span class="fa fa-plus mr-3"></span>Add a University
                  </a>
                </div>
                <p class style="color: hsl(196, 16%, 30%)">
                  <md-list class="md-triple-line md-dense">
                    <md-list-item>
                      <img
                        class="rounded mr-3"
                        width="60"
                        height="60"
                        src="https://placeimg.com/40/40/people/8"
                        alt="People"
                      />
                      <div class="md-list-item-text">
                        <span>Ahmadu Bello University, Zaria.</span>
                        <p class="text-muted f-11">2009 - 2014</p>
                      </div>
                    </md-list-item>
                  </md-list>
                </p>

                <div
                  class="ap-header card-header border-0"
                  style="background: #eef4f6;"
                >Professional Certifications</div>
                <div class="card-footer text-muted border-0 bg-transparent">
                  <a href>
                    <span class="fa fa-plus mr-3"></span>Add a certification
                  </a>
                </div>
                <p class style="color: hsl(196, 16%, 30%)">
                  <md-list class="md-triple-line md-dense">
                    <md-list-item>
                      <img
                        class="rounded mr-3"
                        width="60"
                        height="60"
                        src="https://placeimg.com/40/40/people/8"
                        alt="People"
                      />
                      <div class="md-list-item-text">
                        <span>Association of Nigerian Doctors.</span>
                        <p class="text-muted f-11">2003</p>
                      </div>
                    </md-list-item>
                  </md-list>
                </p>
              </div>
            </div>
            <div
              class="pt-2 fade tab-pane"
              id="review"
              role="tabpanel"
              aria-labelledby="review"
            >Review</div>
          </div>
        </div>
      </div>
    </md-app-content>
    <my-footer></my-footer>
  </div>
</template>

<script>
import mdDateTimePicker from "md-date-time-picker";
import moment from "moment";
export default {
  name: "profile",
  data: () => ({
    currentUser: {}
  }),
  created() {
    user.getUserProfile(this.$route.params.username).then(currentUser => {
      this.currentUser = currentUser;
    });
  },
  computed: {
    fullname() {
      return this.currentUser.firstname + " " + this.currentUser.lastname;
    }
  },
  methods: {
    toggleDate() {
      new mdDateTimePicker({
        type: "date",
        past: moment(),
        future: moment().add(21, "years")
      }).toggle();
    },
    toggleTime() {
      new mdDateTimePicker({
        type: "time",
        past: moment(),
        future: moment().add(21, "years")
      }).toggle();
    }
  }
};
</script>
<style>
@import "~md-date-time-picker/dist/css/mdDateTimePicker.css";
</style>