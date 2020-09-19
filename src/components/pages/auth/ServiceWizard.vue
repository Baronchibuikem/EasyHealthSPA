<template>
  <div class="col-lg-8 offset-lg-2">
    <md-progress-bar md-mode="determinate" :md-value="progress"></md-progress-bar>
    <md-steppers :md-active-step.sync="active" md-alternative>
      <md-step class="text-center" id="first" md-label="Service type" :md-done.sync="first">
        <div class="mt-3">
          <h3 class="mb-3 text-muted">What service are you registering?</h3>
          <div class="col-md-10 offset-md-1">
            <div class="md-layout-item">
              <button
                class="btn-width btn btn-outline-success rounded-btn m-2"
                @click="setServiceType('clinician')"
              >Clinician</button>
              <button
                class="btn-width btn btn-outline-success rounded-btn m-2"
                @click="setServiceType('facility')"
              >Facility</button>
              <button
                class="btn-width btn btn-outline-success rounded-btn m-2"
                @click="setServiceType('ambulance')"
              >Ambulance</button>
            </div>
          </div>
        </div>
      </md-step>

      <md-step class="text-center" id="second" md-label="Basic details" :md-done.sync="second">
        <div v-if="formData.serviceType == 'clinician'">
          <clinician-one @next="next($event)"></clinician-one>
        </div>
        <div v-else>
          <md-empty-state
            class="p-3"
            md-icon="error_outline"
            md-label="Ooops!"
            md-description="This screen is not available to the service type you have chosen."
          >
            <button
              @click="setDone('second', 'first')"
              class="btn btn-outline-success btn-sm mt-2"
            >Choose Service Type</button>
          </md-empty-state>
        </div>
      </md-step>

      <md-step class="text-center" id="third" md-label="Service details" :md-done.sync="third">
        <div v-if="formData.serviceType">
          <div v-if="formData.serviceType == 'clinician'">
            <div class="container">
              <div class="row justify-content-center mb-3">
                <div class="content">
                  <h6 class="text-muted">Create a clinician account</h6>
                </div>
              </div>
              <div class="row justify-content-center">
                <div id="login-form-container" class="shadow rounded pb-3 mb-3 top-strip">
                  <form class="m-3 p-3" autocomplete="off" @submit.prevent="submitClinicianForm">
                    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
                    <md-field>
                      <label>Specialty</label>
                      <md-select v-model="clinicianFormData.specialty">
                        <md-option value="dentist">Dentist</md-option>
                        <md-option value="paediatric">Paediatric</md-option>
                      </md-select>
                    </md-field>
                    <md-field>
                      <label>Sub-Specialty</label>
                      <md-select v-model="clinicianFormData.subSpecialty">
                        <md-option value="subSpecialty one">sub-specialty one</md-option>
                        <md-option value="subSpecialty two">sub-specialty two</md-option>
                      </md-select>
                    </md-field>
                    <md-field>
                      <label>License No. (Folio No.)</label>
                      <md-input v-model="clinicianFormData.license"></md-input>
                    </md-field>
                    <button
                      type="submit"
                      class="btn btn-success btn-block"
                      :class="loading ? 'loader': ''"
                    >Finish</button>
                    <div style="font-size: 12px;" id="form-text" class="content text-muted mt-3">
                      <p>
                        Already have an account?
                        <router-link :to="{name: 'login'}">Sign up</router-link>
                      </p>
                      <p>
                        By signing up, you confirm that you have read and agreed to our
                        <a href>terms of use</a> and
                        <a href>privacy policy</a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <div v-if="formData.serviceType == 'ambulance'">
              <ambulance></ambulance>
            </div>
            <div v-if="formData.serviceType == 'facility'">
              <facility></facility>
            </div>
          </div>
        </div>
        <div v-else>
          <md-empty-state
            class="p-3"
            md-icon="error_outline"
            md-label="Not so fast!"
            md-description="Seems like you have forgotten to choose a service type on the first step."
          >
            <button
              @click="setDone('second', 'first')"
              class="btn btn-outline-success btn-sm mt-2"
            >Choose Service Type</button>
          </md-empty-state>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>
<script>
import ClinicianOne from "@/components/pages/auth/ClinicianOne.vue";
import Ambulance from "@/components/pages/auth/Ambulance.vue";
import Facility from "@/components/pages/auth/Facility.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "serviceWizard",
  components: {
    ClinicianOne,
    Ambulance,
    Facility
  },
  data: () => ({
    formData: {
      serviceType: ""
    },
    active: "first",
    first: false,
    second: false,
    third: false,
    clinicianFormData: {
      specialty: "",
      subSpecialty: "",
      license: ""
    },
    loading: false
  }),
  methods: {
    // ...mapActions({clearAlert: 'alert/clear' }),
    setDone(id, index) {
      this[id] = true;
      if (index) {
        this.active = index;
      }
    },
    next(event) {
      this.setDone("second", "third");
      this.clinicianFormData = event;
    },
    setServiceType(type) {
      this.formData.serviceType = type;
      this.doneWithFirst();
    },
    doneWithFirst() {
      if (this.formData.serviceType == "clinician") {
        this.setDone("first", "second");
        return;
      }
      this.setDone("first", "third");
      this.second = true;
    },
    submitClinicianForm() {
      this.loading = true;
      this.register(this.clinicianFormData);
      this.loading = false;
    }
  },
  computed: {
    ...mapActions("auth", ["login"]),
    ...mapState({ alert: state => state.alert }),
    intId() {
      if (this.active == "first") {
        return 1;
      }
      if (this.active == "second") {
        return 2;
      }
      if (this.active == "third") {
        return 3;
      }
    },
    progress() {
      return (100 / 3) * this.intId;
    }
  }
};
</script>