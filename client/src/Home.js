import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="navDiv">
        <Link to="/" className="customLink">
          Home
        </Link>
        <Link to="/aboutus" className="customLink">
          About
        </Link>
        <Link to="/features" className="customLink">
          Features
        </Link>
        <Link to="/room" className="customLink">
          Room-Order
        </Link>
        <Link to="/food" className="customLink">
          Food-Order
        </Link>
        <Link to="/detail" className="customLink">
          Order-Detail
        </Link>
      </div>
      <div id="fh5co-container">
        <div id="fh5co-home" className="js-fullheight" data-section="home">
          <div className="flexslider">
            <div className="fh5co-overlay"></div>
            <div className="fh5co-text">
              <div className="container">
                <div className="row">
                  <h1 className="to-animate">Restaurant</h1>
                  <h2 className="to-animate">Lovely Designed</h2>
                </div>
              </div>
            </div>
            <ul className="slides">
              <li
                style={{ backgroundImage: `url(images/slide_1.jpg)` }}
                data-stellar-background-ratio="0.5"
              ></li>
              <li
                style={{ backgroundImage: `url(images/slide_2.jpg)` }}
                data-stellar-background-ratio="0.5"
              ></li>
              <li
                style={{ backgroundImage: `url(images/slide_3.jpg)` }}
                data-stellar-background-ratio="0.5"
              ></li>
            </ul>
          </div>
        </div>

        <div id="fh5co-about" data-section="about">
          <div
            className="fh5co-2col fh5co-bg to-animate-2"
            style={{ backgroundImage: `url(images/res_img_1.jpg)` }}
          ></div>
          <div className="fh5co-2col fh5co-text myPadding text-size-cc">
            <h2 className="heading to-animate">About Us</h2>
            <p className="">
              <span className="firstcharacter">F</span>ar far away, behind the
              word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean. Far
              far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. A small river
              named Duden flows by their place and supplies it with the
              necessary regelialia. It is a paradisematic country, in which
              roasted parts of sentences fly into your mouth. Even the
              all-powerful Pointing has no control about the blind texts it is
              an almost unorthographic life.
            </p>
            <p className="text-center to-animate">
              <a href="#" className="btn btn-primary btn-outline">
                Get in touch
              </a>
            </p>
          </div>
        </div>

        <div id="fh5co-sayings">
          <div className="container">
            <div className="row to-animate">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                        &ldquo;Cooking is an art, but all art requires knowing
                        something about the techniques and materials&rdquo;
                      </p>
                      <p className="quote-author">&mdash; Nathan Myhrvold</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>
                        &ldquo;Give a man food, and he can eat for a day. Give a
                        man a job, and he can only eat for 30 minutes on
                        break.&rdquo;
                      </p>
                      <p className="quote-author">&mdash; Lev L. Spiro</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>
                        &ldquo;Find something you're passionate about and keep
                        tremendously interested in it.&rdquo;
                      </p>
                      <p className="quote-author">&mdash; Julia Child</p>
                    </blockquote>
                  </li>
                  <li>
                    <blockquote>
                      <p>
                        &ldquo;Never work before breakfast; if you have to work
                        before breakfast, eat your breakfast first.&rdquo;
                      </p>
                      <p className="quote-author">&mdash; Josh Billings</p>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-featured" data-section="features">
          <div className="container">
            <div className="row text-center fh5co-heading row-padded">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="heading to-animate">Featured Dishes</h2>
                <p className="sub-heading to-animate">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="fh5co-grid">
                <div className="fh5co-v-half to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: `url(images/res_img_1.jpg)` }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                    <h2>Fresh Mushrooms</h2>
                    <span className="pricing">$7.50</span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="fh5co-v-half">
                  <div className="fh5co-h-row-2 to-animate-2">
                    <div
                      className="fh5co-v-col-2 fh5co-bg-img"
                      style={{ backgroundImage: `url(images/res_img_2.jpg)` }}
                    ></div>
                    <div className="fh5co-v-col-2 fh5co-text arrow-left">
                      <h2>Grilled Chiken Salad</h2>
                      <span className="pricing">$12.00</span>
                      <p>Far far away, behind the word mountains.</p>
                    </div>
                  </div>
                  <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                    <div
                      className="fh5co-v-col-2 fh5co-bg-img"
                      style={{ backgroundImage: `url(images/res_img_8.jpg)` }}
                    ></div>
                    <div className="fh5co-v-col-2 fh5co-text arrow-right">
                      <h2>Cheese and Garlic Toast</h2>
                      <span className="pricing">$4.50</span>
                      <p>Far far away, behind the word mountains.</p>
                    </div>
                  </div>
                </div>

                <div className="fh5co-v-half">
                  <div className="fh5co-h-row-2 fh5co-reversed to-animate-2">
                    <div
                      className="fh5co-v-col-2 fh5co-bg-img"
                      style={{ backgroundImage: `url(images/res_img_7.jpg)` }}
                    ></div>
                    <div className="fh5co-v-col-2 fh5co-text arrow-right">
                      <h2>Organic Egg</h2>
                      <span className="pricing">$4.99</span>
                      <p>Far far away, behind the word mountains.</p>
                    </div>
                  </div>
                  <div className="fh5co-h-row-2 to-animate-2">
                    <div
                      className="fh5co-v-col-2 fh5co-bg-img"
                      style={{ backgroundImage: `url(images/res_img_6.jpg)` }}
                    ></div>
                    <div className="fh5co-v-col-2 fh5co-text arrow-left">
                      <h2>Salad with Crispy Chicken</h2>
                      <span className="pricing">$8.50</span>
                      <p>Far far away, behind the word mountains.</p>
                    </div>
                  </div>
                </div>
                <div className="fh5co-v-half to-animate-2">
                  <div
                    className="fh5co-v-col-2 fh5co-bg-img"
                    style={{ backgroundImage: `url(images/res_img_3.jpg)` }}
                  ></div>
                  <div className="fh5co-v-col-2 fh5co-text fh5co-special-1 arrow-left">
                    <h2>Tomato Soup with Chicken</h2>
                    <span className="pricing">$12.99</span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-type"
          style={{ backgroundImage: `url(images/slide_3.jpg)` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="fh5co-overlay"></div>
          <div className="container myPadding">
            <div className="row">
              <div className="col-md-3 to-animate">
                <div className="fh5co-type">
                  <h3 className="with-icon icon-1">Fruits</h3>
                  <p className="text-size-cc">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-3 to-animate">
                <div className="fh5co-type">
                  <h3 className="with-icon icon-2">Sea food</h3>
                  <p className="text-size-cc">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-3 to-animate">
                <div className="fh5co-type">
                  <h3 className="with-icon icon-3">Vegetables</h3>
                  <p className="text-size-cc">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div className="col-md-3 to-animate">
                <div className="fh5co-type">
                  <h3 className="with-icon icon-4">Meat</h3>
                  <p className="text-size-cc">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-menus" data-section="menu">
          <div className="container">
            <div className="row text-center fh5co-heading row-padded">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="heading to-animate">Food Menu</h2>
                <p className="sub-heading to-animate">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row row-padded">
              <div className="col-md-6">
                <div className="fh5co-food-menu to-animate-2">
                  <h2 className="fh5co-drinks">Drinks</h2>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_5.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Pineapple Juice</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$17.50</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_6.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Green Juice</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$7.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_7.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Soft Drinks</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_5.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Carlo Rosee Drinks</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fh5co-food-menu to-animate-2">
                  <h2 className="fh5co-dishes">Steak</h2>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_3.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Beef Steak</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$17.50</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_4.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Tomato with Chicken</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$7.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_2.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Sausages from Italy</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_8.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Beef Grilled</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fh5co-food-menu to-animate-2">
                  <h2 className="fh5co-drinks">Drinks</h2>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_5.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Pineapple Juice</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$17.50</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_6.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Green Juice</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$7.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_7.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Soft Drinks</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_5.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Carlo Rosee Drinks</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="fh5co-food-menu to-animate-2">
                  <h2 className="fh5co-dishes">Steak</h2>
                  <ul>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_3.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Beef Steak</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$17.50</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_4.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Tomato with Chicken</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$7.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_2.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Sausages from Italy</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                    <li>
                      <div className="fh5co-food-desc">
                        <figure>
                          <img
                            src="images/res_img_8.jpg"
                            className="img-responsive"
                            alt="Free HTML5 Templates by FREEHTML5.co"
                          />
                        </figure>
                        <div>
                          <h3>Beef Grilled</h3>
                          <p>Far far away, behind the word mountains.</p>
                        </div>
                      </div>
                      <div className="fh5co-food-pricing">$12.99</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-md-offset-4 text-center to-animate-2">
                <p>
                  <a href="#" className="btn btn-primary btn-outline">
                    More Food Menu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="fh5co-events"
          data-section="events"
          style={{ backgroundImage: `url(images/slide_2.jpg)` }}
          data-stellar-background-ratio="0.5"
        >
          <div className="fh5co-overlay"></div>
          <div className="container">
            <div className="row text-center fh5co-heading row-padded">
              <div className="col-md-8 col-md-offset-2 to-animate">
                <h2 className="heading">Upcoming Events</h2>
                <p className="sub-heading">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="fh5co-event to-animate-2">
                  <h3>Kitchen Workshops</h3>
                  <span className="fh5co-event-meta">March 19th, 2016</span>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-event to-animate-2">
                  <h3>Music Concerts</h3>
                  <span className="fh5co-event-meta">March 19th, 2016</span>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="fh5co-event to-animate-2">
                  <h3>Free to Eat Party</h3>
                  <span className="fh5co-event-meta">March 19th, 2016</span>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary btn-outline">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="fh5co-contact" data-section="reservation">
          <div className="container">
            <div className="row text-center fh5co-heading row-padded">
              <div className="col-md-8 col-md-offset-2">
                <h2 className="heading to-animate">Reserve a Table</h2>
                <p className="sub-heading to-animate">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 to-animate-2">
                <h3>Contact Info</h3>
                <ul className="fh5co-contact-info">
                  <li className="fh5co-contact-address ">
                    <i className="icon-home"></i>
                    5555 Love Paradise 56 New Clity 5655, <br />
                    Excel Tower United Kingdom
                  </li>
                  <li>
                    <i className="icon-phone"></i> (123) 465-6789
                  </li>
                  <li>
                    <i className="icon-envelope"></i>info@freehtml5.co
                  </li>
                  <li>
                    <i className="icon-globe"></i>
                    <a href="http://freehtml5.co/" target="_blank">
                      freehtml5.co
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 to-animate-2">
                <h3>Reservation Form</h3>
                <div className="form-group ">
                  <label for="name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    type="text"
                  />
                </div>
                <div className="form-group ">
                  <label for="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    className="form-control"
                    placeholder="Email"
                    type="email"
                  />
                </div>
                <div className="form-group">
                  <label for="occation" className="sr-only">
                    Occation
                  </label>
                  <select className="form-control" id="occation">
                    <option>Select an Occation</option>
                    <option>Wedding Ceremony</option>
                    <option>Birthday</option>
                    <option>Others</option>
                  </select>
                </div>
                <div className="form-group ">
                  <label for="date" className="sr-only">
                    Date
                  </label>
                  <input
                    id="date"
                    className="form-control"
                    placeholder="Date &amp; Time"
                    type="text"
                  />
                </div>

                <div className="form-group ">
                  <label for="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name=""
                    id="message"
                    cols="30"
                    rows="5"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="form-group ">
                  <input
                    className="btn btn-primary"
                    value="Send Message"
                    type="submit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="fh5co-footer">
        <div className="container">
          <div className="row row-padded">
            <div className="col-md-12 text-center">
              <p className="to-animate">
                &copy; 2016 Foodee Free HTML5 Template. <br /> Designed by
                <a href="http://freehtml5.co/" target="_blank">
                  FREEHTML5.co
                </a>
                Demo Images:
                <a href="http://pexels.com/" target="_blank">
                  Pexels
                </a>
                <br /> Tasty Icons Free
                <a
                  href="http://handdrawngoods.com/store/tasty-icons-free-food-icons/"
                  target="_blank"
                >
                  handdrawngoods
                </a>
              </p>
              <p className="text-center to-animate">
                <a href="#" className="js-gotop">
                  Go To Top
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="fh5co-social">
                <li className="to-animate-2">
                  <a href="#">
                    <i className="icon-facebook"></i>
                  </a>
                </li>
                <li className="to-animate-2">
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li className="to-animate-2">
                  <a href="#">
                    <i className="icon-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
