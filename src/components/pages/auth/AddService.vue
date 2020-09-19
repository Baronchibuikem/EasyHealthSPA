<template>
  <div class="mt-5">
    <md-app-content style="margin-bottom: 100px;">
      <div class="row justify-content-center mb-3">
        <div class="content">
          <h3>Add a Service</h3>
          <h6 class="text-muted">In just 3 easy steps</h6>
        </div>
      </div>
      <div class="row">
        <service-wizard></service-wizard>
      </div>
    </md-app-content>
  </div>
</template>

<script>
import ServiceWizard from "@/components/pages/auth/ServiceWizard.vue";
export default {
  components: {
    ServiceWizard,
  },
};
</script>