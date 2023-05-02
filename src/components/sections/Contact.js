import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import Loading from "../Loading";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submit, setSubmit] = useState("");
  const [loading, setLoading] = useState(false);
  const [validate, setValidate] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const resetSubmit = (timeOut = 1000) => {
    setTimeout(() => {
      setSubmit("");
      setLoading(false);
      setValidate(false);
    }, timeOut);
  };

  const onSubmit =
    // (
    async (formData) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("submitFormWithToken");
      // Do whatever you want with the token
      submitFormWithToken(token, formData);
      // console.log(token, formData);
    };
  // [executeRecaptcha]
  // );

  // You can use useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   onSubmit();
  // }, [onSubmit]);

  const submitFormWithToken = async (token, formData) => {
    // serverless api call, sends the token from recaptcha hook to google recaptcha api
    setLoading(true);
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });
      const parsedRes = await res.json();
      if (parsedRes.status === "success") {
        try {
          const emailSendRes = await fetch("/api/emailSend", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ formData }),
          });
          const emailRes = await emailSendRes.json();
          if (emailRes.status === "success") {
            setLoading(false);
            setSubmit(emailRes.message);
            setValidate(true);
            resetSubmit();
            // setLoading(false);
            return;
          } else if (emailRes.status === "error") {
            setSubmit("Error Sending Email");
            resetSubmit();
            // setLoading(false);
            return;
          }
        } catch (error) {
          setSubmit("Error sending email");
          resetSubmit();
          // setLoading(false);
        }
      } else {
        setSubmit(parsedRes.message);
        resetSubmit();
        // setLoading(false);
      }
    } catch (error) {
      setSubmit("Error with captcha");
      resetSubmit();
      // setLoading(false);
    }
  };

  return (
    <motion.section
      tabIndex={0}
      aria-label="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className="font-source flex flex-col items-center justify-center "
    >
      <article className="flex flex-col w-full py-8 lg:py-16 px-4 ">
        <h3
          tabIndex={0}
          className=" inline-flex justify-center text-5xl font-main font-extrabold text-center dark:text-stone-200 md:text-6xl text-stone-900"
        >
          Hello!
          <SpeakerWaveIcon className="h-6 w-6 ml-2 animate-bounce" />
        </h3>
        <p
          tabIndex={0}
          className="m-2 lg:mt-16 font-light text-center  dark:text-stone-400 text-stone-900 sm:text-xl"
        >
          Whats on your mind?
        </p>

        <form
          tabIndex={0}
          aria-label="Contact Form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <section>
            <label
              name="email"
              className="block mb-2 text-sm font-medium dark:text-stone-200 text-stone-900"
            >
              Your email
            </label>

            <input
              {...register("email", { required: true })}
              aria-label="email section of contact form"
              type="email"
              id="email"
              className="shadow-sm border block w-full p-2.5 text-sm rounded-lg dark:border-gray-300 dark:text-gray-100  dark:focus:ring-stone-100 dark:focus:border-stone-50 dark:bg-stone-800  border-gray-800 text-stone-900 focus:ring-stone-900 focus:border-stone-800 bg-stone-200 dark:bg-opacity-50"
              placeholder="name@gmail.com"
              required
            />
          </section>
          <section>
            <label
              name="subject"
              className="block mb-2 text-sm font-medium dark:text-stone-200 test-stone-900"
            >
              Subject
            </label>

            <input
              {...register("subject", { required: true })}
              type="text"
              id="subject"
              aria-label="Subject of email"
              className="block p-3 w-full text-sm shadow-sm border rounded-lg dark:border-gray-300 dark:text-gray-100  dark:focus:ring-stone-100 dark:focus:border-stone-50 dark:bg-stone-800  border-gray-800 text-stone-900 focus:ring-stone-900 focus:border-stone-800 bg-stone-200 dark:bg-opacity-50"
              placeholder="how can I help?"
              required
            />
          </section>
          <section className="sm:col-span-2">
            <label
              name="message"
              className="block mb-2 text-sm font-medium dark:text-stone-200 text-stone-900"
            >
              Your message
            </label>

            <textarea
              {...register("message", { required: true })}
              aria-label="message"
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm  shadow-sm border rounded-lg dark:bg-opacity-50  dark:border-gray-300 dark:text-gray-100  dark:focus:ring-stone-100 dark:focus:border-stone-50 dark:bg-stone-800  border-gray-800 text-stone-900 focus:ring-stone-900 focus:border-stone-800 bg-stone-200"
              placeholder="Say Hello..."
            ></textarea>
          </section>

          <div
            role="status"
            aria-label="form button and status response"
            className=" h-4/5"
          >
            {loading ? (
              <div className="flex justify-center pt-3">
                <Loading />
              </div>
            ) : validate ? (
              <p className=" dark:text-white text-stone-900 md:text-md font-main font-bold underline underline-offset-4 text-sm text-center h-fit py-3 w-fit">
                {submit}
              </p>
            ) : (
              <button
                type="submit"
                className="py-3 px-5 text-sm md:text-md font-medium text-center rounded-lg w-full md:w-fit dark:text-white dark:hover:bg-stone-400 focus:ring-4 focus:outline-none dark:focus:ring-stone-100 dark:bg-stone-800 dark:bg-opacity-50 text-stone-900 bg-stone-200 focus:ring-stone-900 hover:bg-stone-800 hover:text-white transition-all duration-200"
              >
                Send message
              </button>
            )}
          </div>
        </form>
      </article>
      <section className="flex flex-col gap-2 mt-0">
        {errors.email && (
          <span className="text-red-500">Your Email is required</span>
        )}
        {errors.subject && (
          <span className=" text-red-500">A Subject is required</span>
        )}
        {errors.message && (
          <span className="text-red-500">A Message is required</span>
        )}{" "}
      </section>
      <aside>
        <p className="font-light dark:text-stone-400 text-stone-900 text-sm md:text-md text-center">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a
            className=" decoration-stone-400 underline"
            href="https://policies.google.com/privacy"
          >
            Privacy Policy
          </a>
          &nbsp;and&nbsp;
          <a
            className=" decoration-stone-400 underline"
            href="https://policies.google.com/terms"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </aside>
    </motion.section>
  );
}
