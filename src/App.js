import React from "react";
import "./index.css";
import logo from "./images/logo.svg";
import feature5 from "./images/feature-icon-05.svg";
import feature4 from "./images/feature-icon-04.svg";
import profile from "./images/undraw_profile_image.svg";
import update from "./images/undraw_Updates.svg";
import Loader from "./loader"


const App = () => {
  return (
    <div class="body-wrap">
      <header class="site-header">
        <div class="container">
          <div class="site-header-inner">
            <div class="brand header-brand">
              <h1 class="m-0">
                <a href="#">
                  <img class="header-logo-image" src={logo} alt="Logo" />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-inner">
              <div class="hero-copy">
                <h1 class="hero-title h1 mt-0">Call It Out</h1>
                <p class="hero-paragraph b">
                  Difficult to filter fake propoganda from
                  <br />
                  <strong>authentic news?</strong> <br />
                  Don't Know what to <strong>believe</strong> on the internet
                  anymore?
                  <br />
                  Let us <strong>help you!</strong>
                </p>
                <div class="hero-cta">
                  <a class="button button-primary" href="#">
                    Get Early Access
                  </a>
                  {/* <a class="button" href="#">Get in touch</a> */}
                </div>
              </div>
             
                <Loader />
               
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            <h1 class="hero-title text-center mt-6">How It Works</h1>

            {/* <!-- <div class="features-inner section-inner has-bottom-divider"> --> */}
            <div class="features-wrap">
              <div class="feature text-center is-revealing">
                <div class="feature-inner">
                  {/* <!-- <div class="feature-icon">
                                    <img src="./images/feature-icon-01.svg" alt="Feature 01">
                                </div> --> */}
                  {/* <!-- <h4 class="feature-title mt-24">Detect</h4> --> */}
                  <p
                    class="text-sm mb-0 mt-0 nowrap text-overflow-center"
                    style={{ "font-size": "24px" }}
                  >
                    Call it Out is a social media tool to tackle fake propaganda
                    and disinformation.
                  </p>
                  <p
                    class="text-sm mb-0 nowrap text-overflow-center"
                    style={{ "font-size": "20px" }}
                  >
                    Join the network and help us confront malicious actors who
                    are spreading fake news.{" "}
                  </p>
                </div>
                {/* <!-- </div> --> */}

                {/* <!-- <div class="feature text-center is-revealing">
                            <div class="feature-inner">
                                 <div class="feature-icon">
                                    <img src="./images/feature-icon-03.svg" alt="Feature 03">
                                </div>   
                                <h4 class="feature-title mt-24">Confront</h4>   
                                <p class="text-sm mb-0">Join the network and help us confront malicious actors who are spreading fake news. </p>
                            </div>
                        </div> --> */}
              </div>
            </div>
          </div>
        </section>

        <section class="features section">
          <div class="container">
            {/* <!-- <h1 class="hero-title text-center">Features</h1> --> */}

            <div class="features-inner section-inner has-bottom-divider">
              <div class="features-wrap">
                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={update} alt="Feature 05" />
                    </div>
                    {/* <!-- <h4 class="feature-title mt-24">Detect</h4> --> */}
                    <p class="text-sm mb-0">
                      {" "}
                      Found something fake on the internet? Report it.
                    </p>
                  </div>
                </div>

                <div class="feature text-center is-revealing">
                  <div class="feature-inner">
                    <div class="feature-icon">
                      <img src={profile} alt="Feature 04" />
                    </div>
                    {/* <!--  <h4 class="feature-title mt-24">Confront</h4> --> */}
                    <p class="text-sm mb-0">
                      {" "}
                      Want to stop fake propaganda? Stop it from spreading,{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- <section class="pricing section">
            <div class="container-sm">
                <div class="pricing-inner section-inner">
                    <div class="pricing-header text-center">
                        <h2 class="section-title mt-0">Unlimited for all</h2>
                        <p class="section-paragraph mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad quis nostrud.</p>
                    </div>
                    <div class="pricing-tables-wrap">
                        <div class="pricing-table">
                            <div class="pricing-table-inner is-revealing">
                                <div class="pricing-table-main">
                                    <div class="pricing-table-header pb-24">
                                        <div class="pricing-table-price"><span class="pricing-table-price-currency h2">$</span><span class="pricing-table-price-amount h1">49</span><span class="text-xs">/month</span></div>
                                    </div>
                                    <div class="pricing-table-features-title text-xs pt-24 pb-24">What you will get</div>
                                    <ul class="pricing-table-features list-reset text-xs">
                                        <li>
                                            <span>Lorem ipsum dolor sit nisi</span>
                                        </li>
                                        <li>
                                            <span>Lorem ipsum dolor sit nisi</span>
                                        </li>
                                        <li>
                                            <span>Lorem ipsum dolor sit nisi</span>
                                        </li>
                                        <li>
                                            <span>Lorem ipsum dolor sit nisi</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="pricing-table-cta mb-8">
                                    <a class="button button-primary button-shadow button-block" href="#">Pre order now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> --> */}

        <section class="cta section">
          <div class="container">
            <div class="cta-inner section-inner">
              <h3 class="section-title mt-0"> Interested to learn more?</h3>
              <div class="cta-cta">
                <a class="button button-primary button-wide-mobile" href="#">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer class="site-footer">
        <div class="container">
          <div class="site-footer-inner">
            <div class="brand footer-brand">
              <a href="#">
                <img class="header-logo-image" src={logo} alt="Logo" />
              </a>
            </div>
            <ul class="footer-links list-reset">
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ's</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
            <ul class="footer-social-links list-reset">
              <li>
                <a href="#">
                  <span class="screen-reader-text">Facebook</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="screen-reader-text">Twitter</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#">
                  <span class="screen-reader-text">Google</span>
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"
                      fill="#0270D7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <div class="footer-copyright">
              &copy; 2021 CaiO, all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
