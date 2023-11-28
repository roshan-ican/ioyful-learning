import React from "react";
import Input from "../ui/forms/input";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <Input label="Full Name" inputTextSize="text 14"/>
      </div>
      <div className="col-12">
      <Input label="Email" inputTextSize="text 14"/>
      </div>
      <div className="col-12">
      <Input label="Subject" inputTextSize="text 14"/>
      </div>
      <div className="col-12">
        <Input label="Your Message" inputTextSize="text 14"/>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
