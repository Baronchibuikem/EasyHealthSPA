<template>
	<div>
		<div class="container">
			<div class="row justify-content-center mb-3">
				<div class="content">
					<h6 class="text-muted">Add a Facility</h6>
				</div>
			</div>
			<div class="row justify-content-center">
				<div id="login-form-container"  style="" class="shadow rounded pb-3 mb-3 top-strip">
					<form class="m-3 p-3" autocomplete="off" @submit.prevent="submitForm">
						<md-field>
							<label>Company name</label>
							<md-input v-model="company"></md-input>
						</md-field>
						<md-field>
							<label>Registeration Number (IRC)</label>
							<md-input v-model="irc"></md-input>
						</md-field>
						<md-field class="my-custom-select">
							<label for="specialty">Choose a service type</label>
							<md-select v-model="specialty" name="specialty">
								<md-option value="rdc">Radiologic diagnostic Center</md-option>
								<md-option value="ldc">Laboratory diagnostic Center</md-option>
								<md-option value="hospital">Hospital</md-option>
								<md-option value="dental">Dental Clinic</md-option>
								<md-option value="ent">ENT</md-option>
							</md-select>
						</md-field>
						<md-field>
							<label>Email</label>
							<md-input v-model="email" type="email"></md-input>
						</md-field>
						<md-field>
							<label>Password</label>
							<md-input v-model="password" type="password"></md-input>
						</md-field>
						<button type="submit" class="btn btn-success btn-block" :class="loading ? 'loader': ''">Sign up</button>
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
		name: 'Facility',
		data: () => ({
			company: '',
			irc: '',
			email: '',
			password: '',
			specialty: '',
			loading: false
		}),
		methods: {
			submitForm () {
				this.loading = true
			}
		}
	}
</script>