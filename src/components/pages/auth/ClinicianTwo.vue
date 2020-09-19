<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mb-3">
				<div class="content">
					<h6 class="text-muted">Create a clinician account</h6>
				</div>
			</div>
			<div class="row justify-content-center">
				<div id="login-form-container" class="shadow rounded pb-3 mb-3">
					<div class="top-strip rounded-top"></div>
					<form class="m-3 p-3" autocomplete="off" @submit.prevent="submitForm">
						<md-field>
							<label>Specialty</label>
							<md-select v-model="formData.specialty">
								<md-option value="dentist">Dentist</md-option>
								<md-option value="paediatric">Paediatric</md-option>
							</md-select>
						</md-field>
						<md-field>
							<label>Sub-Specialty</label>
							<md-select v-model="formData.subSpecialty">
								<md-option value="subSpecialty one">sub-specialty one</md-option>
								<md-option value="subSpecialty two">sub-specialty two</md-option>
							</md-select>
						</md-field>
						<md-field>
							<label>License No. (Folio No.)</label>
							<md-input v-model="formData.license"></md-input>
						</md-field>
						<button type="submit" class="btn btn-success btn-block" :class="loading ? 'loader': ''">Finish</button>
						<div style="font-size: 12px;" id="form-text" class="content text-muted mt-3">
							<p>
								Already have an account? <router-link :to="{name: 'login'}">Sign up</router-link>
							</p>
							<p>
								By signing up, you confirm that you have read and agreed to our <a href="">terms of use</a> and <a href="">privacy policy</a>
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
		name: 'ClinicianTwo',
		props: ['onedata'],
		data: () => ({
			formData: {
				firstname: this.onedata.firstname,
				lastname: this.onedata.lastname,
				email: this.onedata.email,
				password: this.onedata.password,
				specialty: '',
				subSpecialty: '',
				license: '',
			},
			loading: false
		}),
		computed: {
			validForm() {
				return this.isFirstFormValid() && this.isSecondFormValid()
			}
		},
		methods: {
			submitForm () {
				this.loading = true
				console.log(this.formData)
			},
			isFirstFormValid () {
				return this.formData.firstname && this.formData.lastname && this.formData.email && this.formData.password
			},
			isSecondFormValid () {
				return this.formData.specialty && this.formData.subSpecialty && this.formData.license
			}
		}
	}
</script>