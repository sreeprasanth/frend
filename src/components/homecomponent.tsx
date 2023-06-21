import React, { useState } from "react";
import { Message } from "primereact/message";
import { InputText } from "primereact/inputtext";
import "../App.css";
import { Button } from "primereact/button";
// import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { useRouter } from "next/router";
// import { NavLink, redirect } from "react-router-dom";
import TableComponent from "./tablecomponent";
// import { useHistory } from "react-router-dom";

export default function HomeComponent() {
  const [state, setState]: any = useState(1);
  const credentials = [
    {
      username: "username",
      password: "password",
    },
  ];
  // const history = useHistory();
  console.log("e", credentials[0]?.username);
  return (
    <div className="card">
      {state == 1 ? (
        <div>
          <h1>Sign Up</h1>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={async (values: any) => {
              console.log("values", values?.username);
              if (
                values?.username === credentials[0]?.username &&
                values?.password === credentials[0]?.password
              ) {
                console.log("sucess");
                setState(2);

                // return <redirect to="/profile" />;
              }

              // await new Promise((r) => setTimeout(r, 500));
              // alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <label htmlFor="firstName">User Name</label>
              <Field id="firstName" name="username" placeholder="Jane" />

              <label htmlFor="lastName">Password</label>
              <Field id="lastName" name="password" placeholder="Doe" />
              {/* 
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
            /> */}
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      ) : (
        <TableComponent />
      )}
    </div>
  );
}
