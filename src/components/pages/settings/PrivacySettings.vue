<template>
	<div>
		<div class="bg-transparent pl-0 py-3 settings-header card-header border-bottom mb-3">
			Privacy Settings
		</div>
		<form>
			<div class="form-group row">
				<div class="col-sm-6">
					<md-checkbox value="1">Display my email on my profile</md-checkbox>
					<md-checkbox value="1">Display my phone number on my profile</md-checkbox>
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
		name: 'privacy',
		data: () => ({
		})
	}
</script>