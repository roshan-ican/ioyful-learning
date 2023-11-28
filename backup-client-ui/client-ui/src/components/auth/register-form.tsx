import Input from "@/components/ui/forms/input";
import Checkbox from "../ui/forms/checkbox";
import routes from "@/config/routes";
import Link from "next/link";
import React from "react";

const RegisterForm = () => {
  return (
    <form className="row y-gap-20">
      <div className="col-12">
        <h1 className="text-22 fw-500">Welcome back</h1>
        <p className="mt-10">
          Already have an account yet?{" "}
          <Link href={routes.auth.login} className="text-blue-1">
            Log in
          </Link>
        </p>
      </div>
      {/* INPUTS */}
      <div className="col-12">
        <Input label="First Name" inputTextSize="text-14" />
      </div>
      <div className="col-12">
        <Input label="Last Name" inputTextSize="text-14" />
      </div>

      <div className="col-12">
        <Input label="Email" inputTextSize="text-14" />
      </div>
      <div className="col-12">
        <Input label="Password" inputTextSize="text-14" />
      </div>
      <div className="col-12">
        <Input label="Confirm Password" inputTextSize="text-14" />
      </div>

      {/* CHECKBOX IS NOT THERE IN THE INPUT COMP */}
      <div className="col-12">
        <div className="d-flex ">
         <Checkbox />
          <div className="text-15 lh-15 text-light-1 ml-10">
            Email me exclusive Agoda promotions. I can opt out later as stated
            in the Privacy Policy.
          </div>
        </div>
      </div>
      {/* REGISTER */}

      <div className="col-12">
        <button
          type="submit"
          className="button py-20 -dark-1 bg-blue-1 text-white w-100"
        >
          Sign Up <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
