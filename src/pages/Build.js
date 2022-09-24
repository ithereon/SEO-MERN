import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

function Build() {

	return (

		<div className="">

			<Helmet>
				<title>Build :: Relcanonical</title>
				<meta name="description" content="Relcanonical’s Enterprise SEO Platform can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than hiring SEO agencies. Go Freemium!" />
			</Helmet>

			<div className="d-flex flex-column bg-light py-40">

				<form className="container" id="form">

					<div className="row">

						<div className="col-xl-12">

							<Header />

							<div className="px-40">

								<div className="text-center pt-8">
									<h1 className="text-center font-weight-boldest text-dark text-uppercase">
										BUILD
									</h1>
									<p className="text-center text-muted font-weight-bold font-size-h6 mb-8">
										Create <mark>Automated API</mark>, <mark>Business API</mark>, and <mark>Keyword
											API</mark> using the data from your <mark>CSV File</mark>.
									</p>
									<div className="mt-8" id="kt_content">
										<div className="container">
											<div className="d-flex flex-row">
												<div className="flex-row-fluid">

													<div className="row mb-4">

														<div className="col-md-6-goat">
															<textarea
																className="form-control bg-white text-center font-weigth-bolder text-dark-50 form-control-solid h-auto p-6 rounded-lg font-size-lg"
																placeholder="Endpoint Description" id="endpoint_description"
																name="endpoint_description" data-toggle="tooltip"
																data-html="true"
																title="Enter a <code>Brief Description</code> of what this API Endpoint does such as the <code>Column Headers</code> from the actual CSV File."
																maxLength="90" rows="2"></textarea>
														</div>

														<div className="col-md-6-goat">
															<textarea
																className="form-control bg-white text-center font-weigth-bolder text-dark-50 form-control-solid h-auto p-6 rounded-lg font-size-lg"
																placeholder="Endpoint Consolidation" id="endpoint_consolidation"
																name="endpoint_consolidation" data-toggle="tooltip"
																data-html="true"
																title="Enter a combination of <code>Endpoint Variables</code> or any keywords that you'd like to use as a <code>Single Variable</code>."
																rows="2"></textarea>
														</div>

													</div>

													<div className="row mb-4">

														<div className="col-md-6-goat">
															<textarea
																className="form-control bg-white text-center font-weigth-bolder text-dark-50 form-control-solid h-auto p-6 rounded-lg font-size-lg"
																placeholder="Endpoint Globalization" id="endpoint_globalization"
																name="endpoint_globalization" data-toggle="tooltip"
																data-html="true"
																title="Enter the <code>Country Codes</code> of the countries, where most of your <code>Major Customers</code> are located i.e. US, CA, DE, etc."
																rows="2"></textarea>
														</div>

														<div className="col-md-6-goat">
															<textarea
																className="form-control bg-white text-center font-weigth-bolder text-dark-50 form-control-solid h-auto p-6 rounded-lg font-size-lg"
																placeholder="Endpoint Localization" id="endpoint_localization"
																name="endpoint_localization" data-toggle="tooltip"
																data-html="true"
																title="Enter the <code>Language Codes</code> of the languages used by your <code>Target Customers</code> i.e. EN, FR, ES, and much more."
																rows="2"></textarea>
														</div>

													</div>

													<div className="row mb-4">

														<div className="col-md-12-goat">
															<div className="dropzone dropzone-default" name="endpoint_file"
																id="endpoint_file" data-toggle="tooltip" data-html="true"
																title="Add [_] before the <code>CSV Name</code> to keep the <code>API Endpoint</code> private to your account or do nothing to make it public.">
																<div className="dropzone-msg dz-message needsclick">
																	<span
																		className="font-weigth-bolder text-muted font-size-lg">Drag
																		&
																		Drop the <code>Endpoint File</code> containing the
																		keywords
																		you'd like to use to build this API</span>
																</div>
															</div>
														</div>

													</div>

													<div class="d-flex justify-content-center align-items-center text-center">
														<button class="btn btn-icon btn-sm px-10 btn-dark font-weight-bolder"
															type="submit" style={{ maxWidth: "max-content" }}>SAVE</button>
													</div>

													<div className="text-center mt-8">
														<p className="text-muted font-weight-bold font-size-sm">
															In the Endpoint Description field, kindly describe of what the API
															Endpoint does or will do in less than 90
															characters. The best practice is to outline the Endpoint Params,
															which are the same as the Column Names of the CSV File; the Endpoint
															File.
														</p>
														<p className="text-muted font-weight-bold font-size-sm">
															In the Endpoint Consolidation field, if you enter a combination of Keys i.e. Endpoint
															Params i.e. $country + $city = $location and create an HTML Template
															or HTML File
															with the name visit-$location.html or simply visit-$location,
															Relcanonical will render the URL
															i.e. example.com/visit-france, example.com/visit-paris, etc.
															Furthermore, if you enter Standard Params i.e. Women + Men =
															$people, and create an HTML Template with the name
															single-$people.html, Relcanonical will render the URL i.e.
															example.com/single-women, example.com/single-men, etc. Endpoint
															Params are the Column Headers from your CSV File, while Standand
															Params are custom keywords that can facilitate the Endpoint Params.
														</p>
														<p className="text-muted font-weight-bold font-size-sm">
															In the Endpoint Globalization field, if you enter the Country Codes
															i.e. US, FR, TR and create an href attribute i.e.
															href="/visit-$country" in your HTML Template, Relcanonical will add
															a hreflang tag i.e. rel="alternate" hreflang="us" to the attribute
															and render the URLs i.e. example.com/us/, example.com/fr/, etc ...
															to your website visitors.
														</p>
														<p className="text-muted font-weight-bold font-size-sm">
															In the Endpoint Localization field, If you enter the Language Codes
															i.e. EN, FR, TR and create an href attribute i.e.
															href="/visit-$country" in your HTML Template, Relcanonical will add
															a hreflang tag i.e. rel="alternate" hreflang="en" to the attribute
															and render the URLs i.e. example.com/en/ to your website visitors.
															Similarly, if you add both Country Codes
															and Language Codes, and create an href attribute i.e.
															href="/visit-$country" in your HTML Template, Relcanonical will add
															a hreflang tag i.e. rel="alternate" hreflang="en-us" to the
															attribute and render the URL i.e. example.com/en-us/, etc.
														</p>
														<p className="text-muted font-weight-bold font-size-sm">
															In the Endpoint File field, kindly upload the CSV File that you
															would like to use to build the API Endpoint. By default, each time
															you upload a CSV File, a Public API Endpoint is created. However,
															you can keep your API Endpoint by adding [ _ ] i.e. _location.csv
															before the CSV Name. That said, it is essential to note that the
															number of Cells in the CSV File counts as the API Values. For
															example, if you have 2 Columns with 500 Rows, that count as 1,000
															API Values.
														</p>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>

								<Footer />

								<Mission />

							</div>

						</div>

					</div>
				</form>

			</div>

		</div>

	)

}

export default Build;