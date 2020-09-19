<template>
  <div>
    <div class="bg-transparent pl-0 py-3 ap-header card-header border-bottom mb-3">Profile Settings</div>
    <form>
      <div class="form-group row">
        <div class="col-sm-6">
          <label for="firstname" class="col-form-label">First name</label>
          <input type="text" class="form-control" id="firstname" placeholder="Event Sourcing" />
        </div>
        <div class="col-sm-6">
          <label for="lastname" class="col-form-label">Last name</label>
          <input type="text" class="form-control" id="lastname" />
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-6">
          <label for="username" class="col-form-label">Username</label>
          <input type="text" class="form-control" id="username" />
          <span class="f-12 text-muted">This forms part of your profile URL</span>
        </div>
        <div class="col-sm-6">
          <label for="country" class="col-form-label">Country</label>
          <select id="country" class="custom-select">
            <option selected value></option>
            <option value="1">Nigeria</option>
            <option value="2">USA</option>
            <option value="3">Ghana</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success btn-sm">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "profile",
  data: () => ({}),
};
</script>