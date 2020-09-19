<template>
	<div>
		<md-app-content>
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<div id="home-search">
							<div class="input-group">
								<input autocomplete="off" type="search" class="form-control" placeholder="Search for Doctors, Nurses, Hospitals...." required="required">
								<span class="input-group-btn">
									<button id="submit" class="btn btn-success border-success" type="button">
										<span class="fa fa-search"></span>
									</button>
								</span>
							</div>				
						</div>

						<h4 class="text-muted search-header">Search results for "severe stomach ache"</h4>
					</div>
					<div class="col-12 col-md-8">
						<div class="search-results">
							<!-- Tab Navigation -->
							<nav>
							  <div class="nav nav-tabs" id="nav-tab" role="tablist">
							    <a class="nav-item nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">All</a>
							    <a class="nav-item nav-link" id="doctors-tab" data-toggle="tab" href="#doctors" role="tab" aria-controls="doctors" aria-selected="false">Doctors</a>
								<a class="nav-item nav-link" id="dentist-tab" data-toggle="tab" href="#dentists" role="tab" aria-controls="dentist" aria-selected="false">Dentists</a>
								<a class="nav-item nav-link" id="labscientists-tab" data-toggle="tab" href="#labscientists" role="tab" aria-controls="labscientists" aria-selected="false">Lab Scientists</a>
							    <a class="nav-item nav-link" id="nurses-tab" data-toggle="tab" href="#nurses" role="tab" aria-controls="nurses" aria-selected="false">Nurses</a>
								  <a class="nav-item nav-link" id="pharmacists-tab" data-toggle="tab" href="#pharmacists" role="tab" aria-controls="hospitals" aria-selected="false">Pharmacists</a>
							    <a class="nav-item nav-link" id="hospitals-tab" data-toggle="tab" href="#hospitals" role="tab" aria-controls="hospitals" aria-selected="false">Hospitals</a>
								  <a class="nav-item nav-link" id="pharmacies-tab" data-toggle="tab" href="#pharmacies" role="tab" aria-controls="hospitals" aria-selected="false">Pharmacies</a>

								<div class="dropdown">
									<a style="cursor: pointer;" class="nav-item nav-link dropdown-toggle" id="more" data-toggle="dropdown" aria-selected="false">
										More
									</a>
									<div class="dropdown-menu" aria-labelledby="more">
										<a id="more-one-tab" data-toggle="tab" class="dropdown-item" href="#more-one" aria-controls="more-one">More One</a>

										<a id="more-two-tab" data-toggle="tab" class="dropdown-item" href="#more-two" aria-controls="more-two">More Two</a>
									</div>
								</div>

							  </div>
							</nav>

							<!-- Tab Content -->
							<div class="tab-content mt-3" id="nav-tabContent">
								<div class="tab-pane fade show active" id="all" role="tabpanel" aria-labelledby="nav-home-tab">
									<div class="result-item pb-3 border-bottom d-flex container pl-0 mb-3">
										<div class="mr-3">
											<img src="https://placeimg.com/100/100/people/1">
										</div>
										<div class="pt-sm-2">
											<div class="name" style="font-weight: bold;">Dr. Ben Carson</div>
											<div class="badge badge-secondary my-1">Neurologist</div>
											<div class="address f-12 text-muted">
												No. 13 jama'a road, ungwan romi kaduna
											</div>
											<div class="badge badge-success my-1">Available</div>
										</div>
									</div>

									<div class="result-item pb-3 border-bottom d-flex container pl-0 mb-3">
										<div class="mr-3">
											<img src="https://placeimg.com/100/100/people/1">
										</div>
										<div class="pt-sm-2">
											<div class="name" style="font-weight: bold;">Dr. Ben Carson</div>
											<div class="badge badge-secondary my-1">Neurologist</div>
											<div class="address f-12 text-muted">
												No. 13 jama'a road, ungwan romi kaduna
											</div>
											<div class="badge badge-success my-1">Available</div>
										</div>
									</div>

									<div class="result-item pb-3 border-bottom d-flex container pl-0 mb-3">
										<div class="mr-3">
											<img src="https://placeimg.com/100/100/people/1">
										</div>
										<div class="pt-sm-2">
											<div class="name" style="font-weight: bold;">Dr. Ben Carson</div>
											<div class="badge badge-secondary my-1">Neurologist</div>
											<div class="address f-12 text-muted">
												No. 13 jama'a road, ungwan romi kaduna
											</div>
											<div class="badge badge-success my-1">Available</div>
										</div>
									</div>

									<div class="result-item pb-3 border-bottom d-flex container pl-0 mb-3">
										<div class="mr-3">
											<img src="https://placeimg.com/100/100/people/1">
										</div>
										<div class="pt-sm-2">
											<div class="name" style="font-weight: bold;">Dr. Ben Carson</div>
											<div class="badge badge-secondary my-1">Neurologist</div>
											<div class="address f-12 text-muted">
												No. 13 jama'a road, ungwan romi kaduna
											</div>
											<div class="badge badge-success my-1">Available</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="doctors" role="tabpanel">
									Doctors
								</div>

								<div class="tab-pane fade" id="dentists" role="tabpanel" aria-labelledby="nav-contact-tab">
									Dentists
								</div>

								<div class="tab-pane fade" id="labscientists" role="tabpanel" aria-labelledby="nav-contact-tab">
									Lab Scientists
								</div>

								<div class="tab-pane fade" id="nurses" role="tabpanel">
									Nurses
								</div>

								<div class="tab-pane fade" id="pharmacists" role="tabpanel">
									Phamarcists
								</div>

								<div class="tab-pane fade" id="hospitals" role="tabpanel">
									Hospital
								</div>

								<div class="tab-pane fade" id="pharmacies" role="tabpanel">
									Pharmacies
								</div>

								<div class="tab-pane fade" id="more-one" role="tabpanel">
									More One
								</div>

								<div class="tab-pane fade" id="more-two" role="tabpanel">
									More Two
								</div>
							</div>
						</div>
					</div>
				
					<div class="col-12">
						<div style="margin: 20px 0 50px;">
							<h5>Related Searches</h5>
							<a class="d-block mb-2" href="">&raquo; Headache</a>
							<a class="d-block mb-2" href="">&raquo; migraigne</a>
							<a class="d-block mb-2" href="">&raquo; Another illness</a>
							<a class="d-block mb-2" href="">&raquo; Yet another illness</a>
						</div>
					</div>
				</div>
			</div>
		</md-app-content>
		<my-footer></my-footer>
	</div>
</template>

<script>
	export default {
		name: 'search'
	}
</script>
