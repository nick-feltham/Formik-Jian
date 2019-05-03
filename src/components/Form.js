import React from "react";
import {
  FormSectionWrapper,
  FormWrapper,
  FormText,
  InputBox,
  ErrorMsg,
  Consent,
  SubmitButton,
  ConsentLink,
  ConsentBox
} from "./formStyles";
import { withFormik } from "formik";
import * as Yup from "yup";
import * as emailjs from 'emailjs-com';

const SignUp = ({
  values,
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  isSubmitting
}) => (
  <FormSectionWrapper>
    <FormText>Hey! Send me all the offers!</FormText>
    <FormWrapper onSubmit={handleSubmit}>
      <label htmlFor="name">
        <InputBox
          type="text"
          onChange={handleChange}
          placeholder="Enter your Name"
          onBlur={handleBlur}
          value={values.name || ''}
          name="name"
        />
        {errors.name && touched.name && (
          <ErrorMsg id="feedback">{errors.name}</ErrorMsg>
        )}
      </label>
      <label htmlFor="email">
        <InputBox
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email || ''}
          name="email"
          placeholder="Enter your Email"
          noValidate
        />
        {errors.email && touched.email && (
          <ErrorMsg id="feedback">{errors.email}</ErrorMsg>
        )}
      </label>
      <label htmlFor="consent">
        <Consent>
          I agree with the
          <ConsentLink
            href="http://localhost:8000/static/terms-of-use-e595ca762c750a4691c0defcc8c70389.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            T&CS,
          </ConsentLink>
          <ConsentLink
            href="http://localhost:8000/static/privacy-policy-51fa98b3823b6a3c01549f1a8329a7be.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Privacy Policy
          </ConsentLink>{" "}
          and that FODE can contact me regarding their most excellent
          forthcoming promos
        </Consent>
        {errors.consent && touched.consent && (
          <ErrorMsg id="feedback">{errors.consent}</ErrorMsg>
        )}
        <ConsentBox
          type="checkbox"
          name="consent"
          checked={values.consent}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </label>
      <SubmitButton type="Submit" disabled={isSubmitting}>submit</SubmitButton>
    </FormWrapper>
  </FormSectionWrapper>
);

const Form = withFormik({
  mapPropsToValues: () => ({
    name: "",
    email: "",
    consent: false
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "Name must be more than 1 character")
      .required("Name is needed"),
    email: Yup.string()
      .email("Whoops, thats not a valid email address")
      .required("Email is needed"),
    consent: Yup.bool()
      .oneOf([true], "Please give us consent to contact you")
      .required("Please give us consent to contact you")
  }),

  handleSubmit: (values, {setSubmitting, resetForm }) => {
      const service_id = 'nick_email_service';
      const template_id = 'template_SQfNImnm';
      const user_id = 'user_37B2qmN4ljLbmrOLyQTzr';
      const template_params = {
          userName: values.name,
          userEmail: values.email
      };

      emailjs.send(service_id, template_id, template_params, user_id)
          .then(function (response) {
              alert("We've received your request and we'll respond ASAP");
              resetForm();
          }, function (error) {
              alert("Process failed. Please try again.");
              console.log('Email sending failed', error);
          });
  },

  displayName: "Basic Form"
})(SignUp);

export default Form;
