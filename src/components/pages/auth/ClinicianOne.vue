<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mb-3">
				<div class="content">
					<h6 class="text-muted">Create a clinician account</h6>
				</div>
			</div>
			<div class="row justify-content-center">
				<div id="login-form-container" class="shadow rounded pb-3 mb-3 top-strip">
					<form class="m-3 p-3" autocomplete="off" @submit.prevent="next">
						<md-field>
							<label>First name</label>
							<md-input v-model="formData.firstname"></md-input>
						</md-field>
						<md-field>
							<label>Last Name</label>
							<md-input v-model="formData.lastname"></md-input>
						</md-field>
						<md-field>
							<label>Email</label>
							<md-input v-model="formData.email" type="email"></md-input>
						</md-field>
						<md-field>
							<label>Password</label>
							<md-input v-model="formData.password" type="password"></md-input>
						</md-field>
						<button type="submit" class="btn btn-success btn-block" :disabled="!validForm">Continue</button>
						<div style="font-size: 12px;" id="form-text" class="content text-muted mt-3">
							<p>
								Already have an account? <router-link :to="{name: 'login'}">Login</router-link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ClinicianOne',
		data: () => ({
			formData: {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				specialty: '',
				subSpecialty: '',
				license: '',
			}
		}),
		computed: {
			validForm() {
				return this.formData.firstname && this.formData.lastname && this.formData.email && this.formData.password
			}
		},
		methods: {
			next () {
				this.$emit('next', this.formData)
			}
		}
	}
</script>