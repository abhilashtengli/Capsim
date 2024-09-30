import React, { useEffect, useRef, useState } from "react";
import BgBox from "./BgBox";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import emailjs from "@emailjs/browser";
import CapsimAddress from "./CapsimAddress";
import DelayedComponent from "./DelayedComponent";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const form = useRef();
  const [sentMessage, setSentMessage] = useState(true);
  const [show, setShow] = useState(false);
  // const whatsappLink = "https://wa.me/6362566003";

  const sendEmail = (e) => {
    e.preventDefault();

    // Extract form values
    const formData = new FormData(form.current);
    const values = Object.fromEntries(formData.entries());

    // Validate form fields
    const errors = {};
    if (!values.user_name) {
      errors.user_name = "Required";
      // console.log("required");
    }
    if (!values.user_email) {
      errors.user_email = "Required";
      // console.log("required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
    ) {
      errors.user_email = "Invalid email address";
    }
    if (!values.country_code) {
      errors.country_code = "Required";
    }
    if (!values.user_mobilenumber) {
      errors.user_mobilenumber = "Required";
    }

    if (Object.keys(errors).length !== 0) {
      return;
    }

    // If no errors, send the email
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSentMessage(true);
          setShow(true);
          setTimeout(() => {
            setSentMessage(false);
            setShow(false);
          }, 5000);

          // Reset the form
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div>
        <BgBox rowNum={5} />
        {show ? (
          <motion.div
            className="absolute flex justify-center w-full items-center py-2 z-50"
            initial={{
              y: -400,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <h1
              className={`fixed ${
                sentMessage ? "bg-green-700" : "bg-red-500"
              }  rounded-lg w-72 py-1 mt-52 text-white font-semibold text-lg text-center`}
            >
              {sentMessage ? "Message sent ✅" : "Message Not Sent !"}
            </h1>
          </motion.div>
        ) : (
          ""
        )}
        <DelayedComponent state="animate-left-to-right">
          <h1 className="text-4xl w-full  text-zinc-600  md:px-12 pt-32 font-semibold px-4 lg:px-0 lg:pl-40">
            Contact
          </h1>
        </DelayedComponent>
        <p className="mt-5 lg:pl-40 px-4 md:pl-12 lg:px-0 text-lg">
          For inquiries, quotes, or more information about our products, please
          reach out to us.
        </p>
      </div>
      <div className=" w-full lg:px-40 pt-2  gap-5 flex lg:flex-row flex-col items-center lg:items-start justify-start mb-16">
        <div className=" py-5 lg:w-[50%]   space-y-6 lg:mt-10  lg:pl-20">
          <section className=" flex gap-3 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
              />
            </svg>
            <p className="w-60 text-base font-semibold text-zinc-600">
              28-12-13/2 2nd floor, Suryabagh, Visakhapatnam, Andhra Pradesh Pin
              code - 530020
            </p>
          </section>
          <section className="flex  gap-3 items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
              />
            </svg>
            <p className="text-base font-semibold text-zinc-600 -mt-0.5">
              +91 9110778178
            </p>
          </section>
          <section className="flex  gap-3 items-start mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5"
            >
              <path
                fill="#4682b4"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
            <p className="text-base font-semibold text-zinc-600 -mt-1">
              info@capsim.in
            </p>
          </section>
          <ul className="flex gap-16  -ml-1">
            <a
              href="http://www.linkedin.com/in/chiraag-lodha-46abb132b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-10 h-10"
                >
                  <path
                    fill="#4682b4"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </li>
            </a>
            <a
              href="https://x.com/capsim505"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-10 h-10"
                >
                  <path
                    fill="#4682b4"
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </li>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61566286208207"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-10 h-10"
                >
                  <path
                    fill="#4682b4"
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </li>
            </a>
          </ul>
        </div>
        <div className=" lg:w-[50%] lg:pl-20">
          <div className="relative  bg-white z-10 lg:mx-0 mx-4  border lg:w-[25rem]  px-5 border-[#6286ff]  pt-10 pb-5 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-[#6286ff] text-center animate-bottom-to-top">
              Contact
            </h2>

            <Formik
              initialValues={{
                user_name: "",
                user_email: "",
                country_code: "",
                user_mobilenumber: "",
                message: "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.user_name) {
                  errors.user_name = "Required";
                }
                if (!values.user_email) {
                  errors.user_email = "Required";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    values.user_email
                  )
                ) {
                  errors.user_email = "Invalid email address";
                }
                if (!values.country_code) {
                  errors.country_code = "Required";
                }
                if (!values.user_mobilenumber) {
                  errors.user_mobilenumber = "Required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  resetForm();
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form ref={form} onSubmit={sendEmail}>
                  <div className="flex w-full justify-center gap-10">
                    <div className="mb-4">
                      <label
                        htmlFor="user_name"
                        className="block font-medium mb-1 pl-1 text-zinc-600 animate-bottom-to-top"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="user_name"
                        className="form-input w-full border p-1 px-2 border-blue-500 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="user_name"
                        component="div"
                        className="text-red-600 pl-1 "
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="user_email"
                        className="block font-medium mb-1 pl-1 text-zinc-600 animate-bottom-to-top"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="user_email"
                        className="form-input w-full p-1 px-2 border border-blue-500 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="user_email"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>
                  </div>

                  <div className="flex  w-full justify-center gap-10">
                    <div className="mb-4">
                      <label
                        htmlFor="country_code"
                        className="block font-medium mb-1 pl-1 text-zinc-600 animate-bottom-to-top"
                      >
                        Country Code
                      </label>
                      <Field
                        type="number"
                        name="country_code"
                        className="form-input w-full p-1 px-2 border border-blue-500 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="country_code"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        htmlFor="user_mobilenumber"
                        className="block font-medium mb-1 pl-1 text-zinc-600 animate-bottom-to-top"
                      >
                        Mobile No.
                      </label>
                      <Field
                        type="number"
                        name="user_mobilenumber"
                        className="form-input w-full p-1 px-2 border border-blue-500 rounded-lg animate-bottom-to-top"
                      />
                      <ErrorMessage
                        name="user_mobilenumber"
                        component="div"
                        className="text-red-600 pl-1"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block font-medium mb-1 pl-1 text-zinc-600 animate-bottom-to-top"
                    >
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      className="form-textarea w-full p-1 px-2 border border-blue-500 rounded-lg animate-bottom-to-top"
                    />
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      className="px-4 py-1 mt-4  relative rounded-lg  text-sm hover:shadow-2xl hover:shadow-purple-500/[0.3] transition duration-200 border border-blue-500"
                      disabled={isSubmitting}
                      type="submit"
                      value="Send"
                      whileTap={{
                        scale: "0.8",
                      }}
                      whileHover={{
                        scale: "0.95",
                      }}
                    >
                      {/* <div className="absolute inset-x-0 h-[2px] w-2/3 mx-auto -bottom-[2px] shadow-2xl  bg-gradient-to-r from-transparent via-yellow-400 to-transparent" /> */}
                      <span className="font-semibold text-zinc-700">
                        Submit
                      </span>
                    </motion.button>
                  </div>
                </Form>
              )}
            </Formik>
            <h1 className="text-center mt-3.5 text-zinc-500 text-sm">
              info@capsim.in
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <CapsimAddress />
      </div>
    </>
  );
};

export default Contact;
