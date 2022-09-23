import React from "react"
import { Helmet } from "react-helmet";

const Dashboard = () => {

    return (

        <div className="">

            <Helmet>
                <title>Dashboard :: Relcanonical</title>
                <meta name="description" content="Relcanonical’s Enterprise SEO Platform can help your site save 50x bigger, grow 3x larger, & scale 99x faster in 6 months than hiring SEO agencies. Go Freemium!" />
            </Helmet>

            <div className="d-flex flex-column bg-light py-40">

                <form className="container" id="form">

                    <div className="row">
                        <div className="col-xl-12">

                            <div className="text-center pb-4">
                                <div className="image-input image-input-empty image-input-outline mb-4" id="kt_image_5"
                                    style={{
                                        backgroundImage: `url(https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663389455/512/logos/light_wsmvda.png)"
}")`,
                                    }}>
                                    <div className="image-input-wrapper"></div>

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
                                    <a className="nav-link" data-toggle="tab" href="#build">BUILD</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#integrate">INTEGRATE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#scale">SCALE</a>
                                </li>
                            </ul>

                            <div className="px-40">
                                <div className="tab-content pt-8" id="myTabContent">

                                    <div className="text-center tab-pane fade" id="build" role="tabpanel" aria-labelledby="build">
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

                                                        <div className="d-flex justify-content-center align-items-center text-center">
                                                            <button className="btn btn-icon btn-sm px-10 btn-dark font-weight-bolder"
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

                                    <div className="text-center tab-pane fade show active" id="integrate" role="tabpanel"
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
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Select Endpoint">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Public API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663049007/128/apis/api_public_w9gaaq.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h3 className="text-dark font-weight-boldest mt-2">Region</h3>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            List of regions
                                                                            along with their attributed countries, states, counties,
                                                                            and
                                                                            cities.</p>
                                                                        <span
                                                                            className="label label-light-primary label-inline font-weight-bolder my-2">PUBLIC</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-4-goat">
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

                                                            <div className="col-md-4-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Select Endpoint">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Public API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663049007/128/apis/api_public_w9gaaq.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h3 className="text-dark font-weight-boldest mt-2">Title</h3>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            List of titles along with their relevant
                                                                            responsibilities, jobs,
                                                                            skills, and salaries.</p>
                                                                        <span
                                                                            className="label label-light-primary label-inline font-weight-bolder my-2">PUBLIC</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        </div>

                                                        <div className="separator separator-dashed my-4"></div>

                                                        <div className="row">

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="JavaScript API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663041401/128/frameworks/api_javascript_rezlho.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="React API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663041401/128/frameworks/api_reactjs_aqkiuo.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="Angular API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663041401/128/frameworks/api_angularjs_oc1eri.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="PHP API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663041401/128/frameworks/api_php_vzz25d.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        </div>

                                                        <div className="row mt-4">

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="WordPress API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663044466/128/frameworks/api_wordpress_n7vrii.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="Shopify API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663043837/128/frameworks/api_shopify_rt3uxp.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="Weebly API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663043837/128/frameworks/api_weebly_fs6bg8.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-3-goat">
                                                                <a href="/" type="submit" className="card card-custom bg-white"
                                                                    data-toggle="tooltip" data-html="true" data-theme="dark"
                                                                    title="Copy Endpoint">
                                                                    <div className="card-body text-center py-8">
                                                                        <div className="mb-0">
                                                                            <img alt="Wix API"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663043838/128/frameworks/api_wix_s2swyx.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        </div>

                                                        <div className="separator separator-dashed my-4"></div>

                                                        <div className="row">

                                                            <div className="col-md-4-goat">
                                                                <div className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Relcanonical"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662997400/100/others/step_template_ivghff.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h3
                                                                            className="text-dark font-weight-boldest mt-2 text-uppercase">
                                                                            #1</h3>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Select, copy, and insert an API Endpoint after the
                                                                            body tag of your <code>HTML Template</code>.</p>
                                                                        <span
                                                                            className="label label-light-warning label-inline font-weight-bolder my-2">TEMPLATE</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <div className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Relcanonical"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662997400/100/others/step_page_hbagyh.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h3
                                                                            className="text-dark font-weight-boldest mt-2 text-uppercase">
                                                                            #2</h3>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>Dynamic Pages</code> by renaming the Template
                                                                            with i.e. "visit-$country.html".</p>
                                                                        <span
                                                                            className="label label-light-primary label-inline font-weight-bolder my-2">PAGES</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <div className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Relcanonical"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662997400/100/others/step_content_fb7mmx.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h3
                                                                            className="text-dark font-weight-boldest mt-2 text-uppercase">
                                                                            #3</h3>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Create <code>Dynamic Content</code> for the Pages using
                                                                            something such as "Visit $country".</p>
                                                                        <span
                                                                            className="label label-light-danger label-inline font-weight-bolder my-2">CONTENT</span>
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
                                                                clipboard and insert the script right after the body tag of your
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

                                    <div className="text-center tab-pane fade" id="scale" role="tabpanel" aria-labelledby="scale">
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
                                                                        <div className="mb-4">
                                                                            <img alt="Small"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663047906/128/subscriptions/small_zlbibc.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~50</code> API Values, create <code>~2</code>
                                                                            API Endpoints, and make <code>~15,000</code> API
                                                                            Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-warning label-inline font-weight-bolder label-md mt-3">
                                                                            SMALL</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                    className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Medium"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663048921/128/subscriptions/medium_f5efrr.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~350</code> API Values, create <code>~5</code>
                                                                            API Endpoints, and make <code>~105,000</code> API
                                                                            Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-dark label-inline font-weight-bolder label-md mt-3">
                                                                            MEDIUM</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                    className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Large"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663048921/128/subscriptions/large_nxfmrq.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~2,450</code> API Values, create
                                                                            <code>~8</code> API Endpoints, and make
                                                                            <code>~735,000</code> API Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-primary label-inline font-weight-bolder label-md mt-3">
                                                                            LARGE</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        </div>

                                                        <div className="row mt-4">

                                                            <div className="col-md-4-goat">
                                                                <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                    className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Small7X"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663047906/128/subscriptions/small2x_gd3eeu.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~17,150</code> API Values, create
                                                                            <code>~12</code> API Endpoints, and make
                                                                            <code>~5,145,000</code> API Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-success label-inline font-weight-bolder label-md mt-3">
                                                                            SMALL7X</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                    className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Medium7X"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663047906/128/subscriptions/medium2x_gsfarp.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~120,050</code> API Values, create
                                                                            <code>~15</code> API Endpoints, and make
                                                                            <code>~36,015,000</code> API Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-danger label-inline font-weight-bolder label-md mt-3">
                                                                            MEDIUM7X</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                            <div className="col-md-4-goat">
                                                                <a href="https://stripe.com/" target="_blank" rel="noreferrer"
                                                                    className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Large7X"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663047906/128/subscriptions/large2x_cttffv.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <span className="text-dark font-weight-boldest h3">£0</span>
                                                                        <span className="text-muted mx-1">/</span>
                                                                        <span className="text-dark-50 font-weight-bold">PDPM</span>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0">
                                                                            Add <code>~840,350</code> API Values, create
                                                                            <code>~18</code> API Endpoints, and make
                                                                            <code>~252,105,000</code> API Requests per month.
                                                                        </p>
                                                                        <span
                                                                            className="label label-info label-inline font-weight-bolder label-md mt-3">
                                                                            LARGE7X</span>
                                                                    </div>
                                                                </a>
                                                            </div>

                                                        </div>

                                                        <div className="separator separator-dashed my-4"></div>

                                                        <div className="row">

                                                            <div className="col-md-6-goat">
                                                                <div className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Relcanonical"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662997400/100/others/step_template_ivghff.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h4 className="text-dark font-weight-boldest mt-2">
                                                                            domainName</h4>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0 text-uppercase">
                                                                            <code>endpointName</code>, <code>endpointName</code>,
                                                                            <code>endpointName</code>, <code>endpointName</code>,
                                                                            <code>endpointName</code>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="col-md-6-goat">
                                                                <div className="card card-custom bg-white">
                                                                    <div className="card-body text-center py-16">
                                                                        <div className="mb-4">
                                                                            <img alt="Relcanonical"
                                                                                src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1662997400/100/others/step_template_ivghff.png"
                                                                                className="max-h-50px" />
                                                                        </div>
                                                                        <h4 className="text-dark font-weight-boldest mt-2">
                                                                            domainName</h4>
                                                                        <p
                                                                            className="text-dark-50 font-weight-bold font-size-md mt-2 mb-0 text-uppercase">
                                                                            <code>endpointName</code>, <code>endpointName</code>,
                                                                            <code>endpointName</code>, <code>endpointName</code>,
                                                                            <code>endpointName</code>
                                                                        </p>
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

                                    <div className="text-center mt-20"><a className="btn btn-icon" target="_blank" rel="noreferrer"
                                        href="https://relcanonical.com/">
                                        <img alt="Relcanonical Logo" src="https://res.cloudinary.com/dyyjk9ktx/image/upload/v1663389455/512/logos/naked_bxuees.png"
                                            className="max-h-30px" />
                                    </a>
                                    </div>

                                    <div className="d-flex align-items-baseline flex-wrap justify-content-center">
                                        <ul
                                            className="breadcrumb breadcrumb-transparent breadcrumb-dot font-weight-bold mt-2 font-size-sm">
                                            <li className="breadcrumb-item text-muted">
                                                <a href="https://relcanonical.com/partner/" target="_blank" rel="noreferrer" className="text-muted">Partner</a>
                                            </li>
                                            <li className="breadcrumb-item text-muted">
                                                <a href="/" target="_blank" rel="noreferrer"
                                                    className="text-muted">Platform</a>
                                            </li>
                                            <li className="breadcrumb-item text-muted">
                                                <a href="https://relcanonical.com/" target="_blank" rel="noreferrer"
                                                    className="text-muted">Relcanonical</a>
                                            </li>
                                            <li className="breadcrumb-item text-muted">
                                                <a href="mailto:relcanonical@iyowun.com" className="text-muted">Support</a>
                                            </li>
                                            <li className="breadcrumb-item text-muted">
                                                <a href="/"
                                                    className="text-muted">Logout</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </form>

            </div>

        </div>

    )
}

export default Dashboard