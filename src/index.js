import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./styles.css";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "", firstName: "", lastName: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Invalid email address")
        .required("Required field"),
      firstName: yup
        .string()
        .min(3, "Must be at least 3 characters")
        .max(15, "Cannot exceed 15 characters")
        .required("Required field"),
      lastName: yup
        .string()
        .min(5, "Must be at least 5 characters")
        .max(20, "Cannot exceed 20 characters")
        .required("Required field"),
    }),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        {...formik.getFieldProps("email")}
      />

      <div>
        {formik.errors.email && formik.touched.email && formik.errors.email}
      </div>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />

      <div>
        {formik.errors.firstName &&
          formik.touched.firstName &&
          formik.errors.firstName}
      </div>

      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
        {...formik.getFieldProps("lastName")}
      />

      <div>
        {formik.errors.lastName &&
          formik.touched.lastName &&
          formik.errors.lastName}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
