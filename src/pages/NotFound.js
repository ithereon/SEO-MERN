import React from 'react'
import { Helmet } from "react-helmet";
import Customer from '../components/Customer';

const NotFound = () => {

    return (

        <div className="">

            <Helmet>
                <title>NotFound :: Relcanonical</title>
                <meta name="description" content="Relcanonical’s Enterprise SEO Platform can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than hiring SEO agencies. Go Freemium!" />
            </Helmet>

            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-column-fluid flex-center">
                    <div className="d-flex flex-center flex-column flex-lg-row p-10 p-lg-20">
                        <div
                            className="d-flex flex-column justify-content-center align-items-center align-items-lg-end flex-row-fluid order-2 order-lg-1"
                        >
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
                                            <mark>Unicorn Companies</mark> ~ <a href="/" className="font-weight-boldest">REGISTER </a>
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
    )

}

export default NotFound;