<template>
	<div>
		<div class="bg-transparent py-3 ap-header card-header border-bottom mb-3">
			Password Settings
		</div>
		<form @submit.prevent="updatePassword">
			<div class="form-group row">
				<label for="old_pass" class="offset-md-2 col-sm-2 col-form-label">Old Password</label>
				<div class="col-sm-6">
					<input v-model="oldPassword" type="password" class="form-control" id="old_pass">
				</div>
			</div>
			<div class="form-group row">
				<label for="new_pass" class="offset-md-2 col-sm-2 col-form-label">New Password</label>
				<div class="col-sm-6">
					<input v-model="newPassword" type="password" class="form-control" id="new_pass">
				</div>
			</div>
			<div class="form-group row">
				<label for="new_pass_repeat" class="offset-md-2 col-sm-2 col-form-label">New Password</label>
				<div class="col-sm-6">
					<input v-model="newPasswordRepeat" type="password" class="form-control" id="new_pass_repeat">
				</div>
			</div>
		  <div class="form-group row">
		    <div class="offset-md-4 col-sm-6">
		      <button type="submit" class="btn btn-success btn-sm" :class="loading ? 'loader': ''" :disabled="!isInputValid">Update</button>
		    </div>
		  </div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'password',
		data: () => ({
			newPassword: '',
			newPasswordRepeat: '',
			oldPassword: '',
			loading: false
		}),
		methods: {
			updatePassword () { 
				return this.loading = true
			}
		},
		computed: {
			isInputValid () {
				return this.newPassword && this.newPasswordRepeat && this.oldPassword;
			}
		}
	}
</script>