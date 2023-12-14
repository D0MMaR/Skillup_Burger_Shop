import React, { useState } from "react";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Login = () => {
  const [justifyActive, setJustifyActive] = useState("tab1");

  return (
    <MDBContainer className="my-5">
      <MDBTabs justify className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink onClick={() => setJustifyActive("tab1")} active={justifyActive === "tab1"}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => setJustifyActive("tab2")} active={justifyActive === "tab2"}>
            Signup
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
             {/* Login Tab */}
          <MDBTabsPane show={justifyActive === "tab1"}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
                <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>
          <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
            <a href="#!">Forgot password?</a>
          </div>
          <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          <p className="text-center">
            Not a member? <a href="#!">Register</a>
          </p>
        </MDBTabsPane>

        {/* Signup Tab */}
        <MDBTabsPane show={justifyActive === "tab2"}>
          
        <div className="text-center mb-3">
            <p>Sign up with:</p>
            {/* Social media signup buttons */}
            <div className="d-flex justify-content-between mx-auto" style={{ width: "40%" }}>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="facebook-f" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="twitter" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="google" size="sm" />
              </MDBBtn>
              <MDBBtn tag="a" color="none" className="m-1" style={{ color: "#1266f1" }}>
                <MDBIcon fab icon="github" size="sm" />
              </MDBBtn>
            </div>
            <p className="text-center mt-3">or:</p>
          </div>

          {/* Signup form fields */}
          <MDBInput wrapperClass="mb-4" label="Full Name" id="signupFormName" type="text" />
          <MDBInput wrapperClass="mb-4" label="Email address" id="signupFormEmail" type="email" />
          <MDBInput wrapperClass="mb-4" label="Password" id="signupFormPassword" type="password" />

          {/* Checkbox and link */}
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="I agree to the terms and conditions" />
          </div>

          {/* Signup button */}
          <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>

          {/* Login link */}
          <p className="text-center">
            Already a member? <a href="#!">Login</a>
          </p>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
};

export default Login;
     
