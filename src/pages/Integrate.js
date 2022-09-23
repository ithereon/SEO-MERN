import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

import Private from '../features/cards/endpoints/Private'
import Public from '../features/cards/endpoints/Public'

import Content from '../features/cards/instructions/Content'
import Page from '../features/cards/instructions/Page'
import Template from '../features/cards/instructions/Template'

const Integrate = () => {

    return (

        <div className="">

            <Helmet>
                <title>Integrate :: Relcanonical</title>
                <meta name="description" content="Relcanonical’s Enterprise SEO Platform can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than hiring SEO agencies. Go Freemium!" />
            </Helmet>

            <div className="d-flex flex-column bg-light py-40">

                <form className="container" id="form">

                    <div className="row">

                        <div className="col-xl-12">

                            <Header />

                            <div className="px-40">

                                <div className="text-center pt-8"
                                    aria-labelledby="integrate">
                                    <h1 className="text-center font-weight-boldest text-dark text-uppercase">
                                        INTEGRATE
                                    </h1>
                                    <p className="text-center text-muted font-weight-bold font-size-h6 mb-8">
                                        Manage your <mark>Private Endpoints</mark> and explore Relcanonical's <mark>Public
                                            Endpoints</mark>.
                                    </p>
                                    <div className="mt-8" id="kt_content">
                                        <div className="container">
                                            <div className="d-flex flex-row">
                                                <div className="flex-row-fluid">

                                                    <div className="row">

                                                        <div className="col-md-4-goat">
                                                            <Public />
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <Private />
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <Public />
                                                        </div>

                                                    </div>

                                                    <div className="separator separator-dashed my-4"></div>

                                                    <div className="row">

                                                        <div className="col-md-4-goat">
                                                            <div className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Template />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <div className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Page />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <div className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Content />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="text-center mt-8">

                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If your website is built with Bootstrap, Tailwind, HTML5, or a
                                                            similar frontend development framework, you'd need to first select
                                                            the API Endpoint and click on the JavaScript Card to copy the script
                                                            to your clipboard. However, if your website is built with other
                                                            frameworks i.e. React or content management systems i.e. WordPress,
                                                            you'd need to click on the Framework Card to copy the script to your
                                                            clipboard and insert the script right after the  body tag of your
                                                            HTML Template or HTML File.
                                                        </p>
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you want to add Dynamic Pages to your HTML Template, kindly use
                                                            your Endpoint Params i.e. visit-$ccountry.html to rename the HTML
                                                            File, where your script is inserted. In addition, if you add [ _ ]
                                                            before the HTML File i.e. _visit-$country.html and create an href
                                                            attribute i.e. href="/visit-$country" in your HTML Template,
                                                            Relcanonical will add a canonical tag i.e. rel="canonical" to the
                                                            attribute and ping search engines to prioritize the most important
                                                            pages on your website.
                                                        </p>
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you want to add Dynamic Content to the Dynamic Pages in your HTML
                                                            Template, kindly use your Endpoint Params i.e. I often visit
                                                            $country 5 times a year, Standard Params i.e. Single $people, or a
                                                            combination of both i.e. Meet $people in $location.
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

export default Integrate