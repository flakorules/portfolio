import React from "react";

export const ContactForm = () => {
  return (
    <>
      <form
        enctype="multipart/form-data"
        method="post"
        action="https://www.freedback.com/mail.php"
        accept-charset="UTF-8"
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
        <table cellspacing="5" cellpadding="5" border="0">
          <tr>
            <td valign="top">
              <strong>Name:</strong>
            </td>
            <td valign="top">
              <input type="text" name="name" id="name" size="40" value="" />
            </td>
          </tr>
          <tr>
            <td valign="top">
              <strong>Email Address:</strong>
            </td>
            <td valign="top">
              <input type="text" 
              name="email" 
              id="email" size="40" value="" />
            </td>
          </tr>
          <tr>
            <td valign="top">
              <strong>Comentario</strong>
            </td>
            <td valign="top">
              <textarea
                name="field-263e8d000b35812"
                id="field-263e8d000b35812"
                rows="6"
                cols="40"
              ></textarea>
            </td>
          </tr>
          <tr>
            <td colspan="2" align="center">
              <input type="submit" value=" Submit Form " />
            </td>
          </tr>
        </table>
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
    </>
  );
};
