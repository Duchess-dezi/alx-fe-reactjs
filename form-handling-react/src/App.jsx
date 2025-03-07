import React from "react";
import FormikForm from "./components/formikForm.js";
import RegistrationForm from "./components/RegistrationForm.jsx";

function App() {
  return (
    <div>
      <h1>Controlled Form</h1>
      <RegistrationForm />
      <h1>Registration Form</h1>
      {/* <FormikForm /> */}
    </div>
  );
}

export default App;
