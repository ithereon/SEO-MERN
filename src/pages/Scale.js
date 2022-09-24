import React from 'react'
import { Helmet } from "react-helmet";

import Header from '../components/Header';
import Footer from '../components/Footer';
import Mission from '../components/Mission';

import Large from '../features/cards/subscriptions/Large'
import Large7X from '../features/cards/subscriptions/Large7X'

import Medium from '../features/cards/subscriptions/Medium'
import Medium7X from '../features/cards/subscriptions/Medium7X'

import Small from '../features/cards/subscriptions/Small'
import Small7X from '../features/cards/subscriptions/Small7X'

import Active from '../features/cards/domains/Active'
import InActive from '../features/cards/domains/InActive'

const Scale = () => {

    return (

        <div className="">

            <Helmet>
                <title>Scale :: Relcanonical</title>
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
                                        SCALE
                                    </h1>
                                    <p className="text-center text-muted font-weight-bold font-size-h6 mb-8">
                                        You have <mark>0</mark> API Values, <mark>0</mark> API Endpoints, and
                                        <mark>0</mark> API Requests left for this month.
                                    </p>
                                    <div className="mt-8" id="kt_content">
                                        <div className="container">
                                            <div className="d-flex flex-row">
                                                <div className="flex-row-fluid">

                                                    <div className="row">

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Small />
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Medium />
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Large />
                                                                </div>
                                                            </a>
                                                        </div>

                                                    </div>

                                                    <div className="row mt-4">

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Small7X />
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Medium7X />
                                                                </div>
                                                            </a>
                                                        </div>

                                                        <div className="col-md-4-goat">
                                                            <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Large7X />
                                                                </div>
                                                            </a>
                                                        </div>

                                                    </div>

                                                    <div className="separator separator-dashed my-4"></div>

                                                    <div className="row">

                                                        <div className="col-md-6-goat">
                                                            <div className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <Active />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-6-goat">
                                                            <div className="card card-custom bg-white">
                                                                <div className="card-body text-center py-16">
                                                                    <InActive />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div className="text-center mt-8">
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you add an API Endpoint to the HTML File on a new domain, you
                                                            will be charged separately on a monthly basis for that domain
                                                            because Relcanonical uses the PDPM Model, which stands for Per
                                                            Domain Per Month.
                                                        </p>
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you have 2 Columns and 500 Rows in a CSV File, which is used to
                                                            create an API Endpoint, that counts as 1,000 API Values.
                                                        </p>
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you upload a new CSV File, an API Endpoint will be created.
                                                        </p>
                                                        <p className="text-muted font-weight-bold font-size-sm">
                                                            If you use an API Endpoint with i.e. 1,000 values to CREATE an HTML
                                                            Template, that counts as 1,000 API Requests regardless if it Private
                                                            or Public API. Also, if you UPDATE the HTML Template, that counts as
                                                            another 1,000 API Requests. With that being said, if Relcanonical
                                                            RENDERs i.e. 100 HTML Pages to your Website Visitors in i.e. May,
                                                            that counts as 100 API Requests for that month. If you have i.e.
                                                            1,000 API Requests left in June, such requests will roll over from
                                                            July until August, which represents 60 days. Kindly note that API
                                                            Requests cannot be rolled over on the Small Plan, Medium Plan, and
                                                            Large Plan. In addition to that, if you cancel your monthly
                                                            subscriptions, all your unused API Requests will expire at the end
                                                            of the last paid cycle.
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

export default Scale