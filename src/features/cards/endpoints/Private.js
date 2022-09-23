import React from 'react'

const Brand = () => {

    return (

        <div className="">

<a href="/" type="submit" className="card card-custom bg-white"
														data-toggle="tooltip" data-html="true" data-theme="dark"
														title="Select Endpoint">
														<div className="card-body text-center py-16">
															<div className="mb-4">
																<img alt="Private API"
																	src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663049007/128/apis/api_private_gfnsyq.png"
																	className="max-h-50px" />
															</div>
															<h3 className="text-dark font-weight-boldest mt-2">Disease</h3>
															<p
																className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
																List of diseases along with their causes, symptoms,
																diagnosis, & treatments.</p>
															<span
																className="label label-light-success label-inline font-weight-bolder my-2">PRIVATE</span>
														</div>
													</a>

        </div>

    )
}

export default Brand