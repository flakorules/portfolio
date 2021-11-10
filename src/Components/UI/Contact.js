import React from "react";

export const Contact = () => {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Contact Me
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-code fa-2x"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
            <form
              enctype="multipart/form-data"
              method="post"
              action="https://www.freedback.com/mail.php"
              accept-charset="UTF-8"
            >
              {/* <!-- Name input--> */}

              <div>
                <input
                  type="hidden"
                  name="acctid"
                  id="acctid"
                  value="ec2lgkk8l3nre32x"
                />
                <input
                  type="hidden"
                  name="formid"
                  id="formid"
                  value="2002458"
                />
                <input
                  type="hidden"
                  name="required_vars"
                  id="required_vars"
                  value="name,email,field-263e8d000b35812"
                />
              </div>

              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  name="name" 
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label htmlFor="name">Full name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              {/* <!-- Email address input--> */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  name="email" 
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                />
                <label htmlFor="email">Email address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              
              
              {/* <!-- Message input--> */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  name="field-263e8d000b35812"
                  id="field-263e8d000b35812"
                  rows="6"
                  cols="40"
                  type="text"
                  placeholder="Enter your message here..."
                  data-sb-validations="required"
                ></textarea>
                <label htmlFor="message">Message</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>

                  <input type="submit" value=" Submit Form " className="btn btb-primary"/>
                </div>
              </div>
              {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* <!-- Submit Button--> */}
              <button
                className="btn btn-primary btn-xl"
                id="submitButton"
                type="submit"
                value=" Submit Form "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
