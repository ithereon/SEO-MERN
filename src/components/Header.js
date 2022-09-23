import React from 'react'
import { Link } from "react-router-dom"


const Header = () => {

    return (

        <div className="">

            <div className="">

            <div className="text-center pb-4">
                <div className="image-input image-input-outline mb-8" id="kt_image_1">
						<div
              className="image-input-wrapper"
              style={{
                backgroundImage: `url(https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663389455/512/logos/light_wsmvda.png)"
                }")`,
              }}
            ></div>

						<label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
							data-action="change" data-toggle="tooltip" title="" data-original-title="Upload">
							<i className="fa fa-pen icon-sm text-muted"></i>
							<input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
							<input type="hidden" name="profile_avatar_remove" />
						</label>

						<span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
							data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
							<i className="ki ki-bold-close icon-xs text-muted"></i>
						</span>

						<span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
							data-action="remove" data-toggle="tooltip" title="Remove avatar">
							<i className="ki ki-bold-close icon-xs text-muted"></i>
						</span>
					</div>

					<div className="text-center mb-6">
						<a href="https://stripe.com/" target="_blank" rel="noreferrer" className="label label-primary label-inline font-weight-bolder text-uppercase">
							SMALL
						</a>
					</div>

				</div>

                <ul className="nav nav-bolder nav-tabs nav-tabs-line justify-content-center">
					<li className="nav-item">
					<Link to="/build" className="nav-link" data-toggle="tab">BUILD</Link>
					</li>
					<li className="nav-item">
					<Link to="/integrate/" className="nav-link" data-toggle="tab">INTEGRATE</Link>
					</li>
					<li className="nav-item">
						<Link to="/scale" className="nav-link" data-toggle="tab">SCALE</Link>
					</li>
				</ul>

            </div>

        </div>

    )
}

export default Header