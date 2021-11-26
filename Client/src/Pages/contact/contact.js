import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Contact = () => {
    return (
        <div >
          <Navigation></Navigation>
            <div class="contact3 py m-5">
                <div class="row no-gutters">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="card-shadow">
                          <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/2.jpg" class="img-fluid" alt="anything"></img>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <div class="contact-box ml-3">
                          <h1 class="font-weight-light mt-2">Quick Contact</h1>
                          <form class="mt-4">
                            <div class="row">
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="text" placeholder="name"></input>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="email" placeholder="email address"></input>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <input class="form-control" type="text" placeholder="phone"></input>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group mt-2">
                                  <textarea class="form-control" rows="3" placeholder="message"></textarea>
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <button type="submit" style={{backgroundColor:'purple'}}class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="card mt-4 border-0 mb-4">
                          <div class="row">
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail pl-0">
                                <div class="mr-3 align-self-center">
                                  <img alt="anything" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"></img>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Address</h6>
                                  <p class="">601 Sherwood Ave.
                                  <p>San Bernandino</p>
                                    </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center">
                                  <img alt="anything" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"></img>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Phone</h6>
                                  <p class=""> 251 546 9442
                                  <p> 446 8851</p>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                              <div class="card-body d-flex align-items-center c-detail">
                                <div class="mr-3 align-self-center">
                                  <img alt="anything" src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"></img>
                                </div>
                                <div class="">
                                  <h6 class="font-weight-medium">Email</h6>
                                  <p class="">
                                    info@sparkling-glittters.com 
                                    <p>123@sparkling-glitters.com</p>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer></Footer>
        </div>
    );
};

export default Contact;