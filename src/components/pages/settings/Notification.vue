<template>
	<div>
		<div class="bg-transparent pl-0 py-3 settings-header card-header border-bottom mb-3">
			Notification Settings
		</div>
		<form>
			<div class="settings-section mb-3">
				<p class="notification-section-header">Email Notification Settings</p>
				<span class="f-12 text-muted">Send me email notifications when i have a new</span>
				<div class="form-group">
					<md-checkbox value="1">Appointment</md-checkbox>
					<md-checkbox value="1">Peer review</md-checkbox>
					<md-checkbox value="1">Peer referral</md-checkbox>
				</div>
				<div class="form-group">
					<md-checkbox value="1">You appointment is cancelled</md-checkbox>
				</div>
			</div>

			<div>
				<p class="notification-section-header">Web Notification Settings</p>
				<span class="f-12 text-muted">Send me web notifications when i have a new</span>
				<div class="form-group">
					<md-checkbox value="1">Appointment</md-checkbox>
					<md-checkbox value="1">Peer review</md-checkbox>
					<md-checkbox value="1">Peer referral</md-checkbox>
				</div>
			</div>
			
			<div class="form-group row">
				<div class="col-sm-6">
					<button type="submit" class="btn btn-success btn-sm">Update</button>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'notification',
		data: () => ({
		})
	}
</script>