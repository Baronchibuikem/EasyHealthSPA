<template>
  <div>
    <div
      class="bg-transparent pl-0 py-3 settings-header card-header border-bottom mb-3"
    >Account Settings</div>
    <div class="settings-section mb-3">
      <p class="notification-section-header">Update Email</p>
      <span class="f-12 text-muted mb-3 d-block">Change email associated with your account</span>
      <form>
        <div class="form-group row">
          <div class="col-sm-6">
            <input type="email" class="form-control" id="email" />
            <span class="f-12 text-muted">
              Email will not be publicly displayed.
              <a href>Learn more</a>.
            </span>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-sm">Update Email</button>
        </div>
      </form>
    </div>
    <div>
      <p class="notification-section-header">Account Cancellation</p>
      <span
        class="f-12 text-muted mb-3 d-block"
      >Once you delete your account, there is no going back. Please be certain.</span>
      <div class="form-group">
        <button type="submit" class="btn btn-warning btn-sm">Delete Account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data: () => ({}),
};
</script>