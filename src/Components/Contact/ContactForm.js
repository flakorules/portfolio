import React from "react";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="col-lg-8 col-xl-7">
      <form
        encType="multipart/form-data"
        method="post"
        action="https://www.freedback.com/mail.php"
        acceptCharset="UTF-8"
      >
        <div>
          <input
            type="hidden"
            name="acctid"
            id="acctid"
            value="ec2lgkk8l3nre32x"
          />
          <input type="hidden" name="formid" id="formid" value="2002458" />
          <input
            type="hidden"
            name="required_vars"
            id="required_vars"
            value="name,email,field-263e8d000b35812"
          />
        </div>

        <div className="form-floating mb-3">
          <input
          maxLength="100"
            className="form-control"
            name="name"
            id="name"
            type="text"
            placeholder="Enter your name..."
          />
          <label htmlFor="name">Full name</label>
        </div>
        <div className="form-floating mb-3">
          <input
          maxLength="100"
            className="form-control"
            name="email"
            id="email"
            type="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>

        {/* <!-- Message input--> */}
        <div className="form-floating mb-3">
          <textarea
          maxLength="1000"
            className="form-control"
            name="field-263e8d000b35812"
            id="field-263e8d000b35812"
            rows="6"
            cols="40"
            type="text"
            placeholder="Enter your message here..."
          ></textarea>
          <label htmlFor="message">Message</label>
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
      <br />
      <center>
        <font face="Arial, Helvetica" size="1">
          <b>
            This <a href="https://www.freedback.com">online form</a> was
            provided by Freedback.
          </b>
        </font>
      </center>
    </div>
  );
};
