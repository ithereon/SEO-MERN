import React from 'react'
import { Helmet } from "react-helmet";
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@mui/material'
import Customer from '../components/Customer';

const Auth = () => {

  return (

    <div className="">

      <Helmet>
        <title>Scale 99X Faster With OurEnterprise SEO Framework :: Relcanonical</title>
        <meta name="description" content="Relcanonical’s Enterprise SEO Platform can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than hiring SEO agencies. Go Freemium!" />
      </Helmet>

      <div className="d-flex flex-column flex-root">
        <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
          <div
            className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
            <div className="d-flex flex-column-fluid flex-center">

              <div className="login-form login-signup">
                <form className="container" id="form">
                  <div className="text-center pb-8">
                    <img alt="Relcanonical Logo" src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662615789/512x512/512_j41y6e.png"
                      className="max-h-20px" />
                  </div>
                  <div className="pb-4 text-center max-w-950px">
                    <h2 className="font-weight-boldest display-2 text-dark">Scale 99X Faster With Our
                      <mark>Enterprise SEO</mark> Framework.
                    </h2>
                  </div>
                  <div className="pb-4 text-center max-w-900px">
                    <h3 className="text-center text-muted font-weight-bolder">Relcanonical’s Enterprise SEO Platform
                      can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than
                      hiring SEO agencies. Go Freemium!
                    </h3>
                  </div>
                  <div className="text-center">
                    <a href="/" type="submit">
                      <button className="btn btn-dark font-weight-boldest font-size-h6 px-40 py-6">
                        <img alt="Relcanonical Logo" src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663388892/128/brands/google_ifvddu.png"
                          className="max-h-40px" />
                      </button>
                    </a>
                  </div>
                  <div className="pt-5 text-center">
                    <span className="text-muted font-weight-bold font-size-md">Relcanonical is trusted by ~2.5% of
                      <mark>Unicorn Companies</mark> ~ 
                      <Link component={RouterLink} to='/signup' className="font-weight-boldest">
                        REGISTER
                      </Link>
                      with Google
                    </span>
                  </div>

                  <Customer />

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default Auth;