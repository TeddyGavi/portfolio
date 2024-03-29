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
    reset,
  } = useForm();

  const resetSubmit = useCallback(
    (timeOut = 1000) => {
      setTimeout(() => {
        setSubmit("");
        reset();
        setLoading(false);
        setValidate(false);
      }, timeOut);
    },
    [setSubmit, setValidate, reset, setLoading],
  );

  const submitFormWithToken = useCallback(
    async (token, formData) => {
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
              return;
            } else if (emailRes.status === "error") {
              setSubmit("Error Sending Email");
              resetSubmit();
              return;
            }
          } catch (error) {
            setSubmit("Error sending email");
            resetSubmit();
          }
        } else {
          setSubmit(parsedRes.message);
          resetSubmit();
        }
      } catch (error) {
        setSubmit("Error with captcha Try again");
        resetSubmit();
      }
    },
    [resetSubmit],
  );

  const onSubmit = useCallback(
    async (formData) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("submitFormWithToken");
      // Do whatever you want with the token
      submitFormWithToken(token, formData);
      // console.log(token, formData);
    },
    [executeRecaptcha, submitFormWithToken],
  );

  return (
    <motion.section
      tabIndex={0}
      aria-label="contact"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center justify-center font-source "
    >
      <article className="flex flex-col w-full px-4 py-8 lg:py-16 ">
        <h3
          tabIndex={0}
          className="inline-flex justify-center text-3xl font-extrabold text-center font-main dark:text-stone-200 md:text-6xl text-stone-900"
        >
          Hello!
          <SpeakerWaveIcon className="w-6 h-6 ml-2 animate-bounce" />
        </h3>
        <p
          tabIndex={0}
          className="m-2 font-light text-center lg:mt-16 dark:text-stone-400 text-stone-900 sm:text-xl"
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
              className="block w-full p-3 text-sm border border-gray-800 rounded-lg shadow-sm dark:border-gray-300 dark:text-gray-100 dark:focus:ring-stone-100 dark:focus:border-stone-50 dark:bg-stone-800 text-stone-900 focus:ring-stone-900 focus:border-stone-800 bg-stone-200 dark:bg-opacity-50"
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
              <p className="py-3 text-sm font-bold text-center underline dark:text-white text-stone-900 md:text-md font-main underline-offset-4 h-fit w-fit">
                {submit}
              </p>
            ) : (
              <button
                disabled={validate}
                type="submit"
                className="w-full px-5 py-3 text-sm font-medium text-center transition-all duration-200 rounded-lg md:text-md md:w-fit dark:text-white dark:hover:bg-stone-400 focus:ring-4 focus:outline-none dark:focus:ring-stone-100 dark:bg-stone-800 dark:bg-opacity-50 text-stone-900 bg-stone-200 focus:ring-stone-900 hover:bg-stone-800 hover:text-white"
              >
                Send message
              </button>
            )}
          </div>
        </form>
      </article>
      <section
        className="flex flex-col gap-2 mt-0 mb-2 text-red-700 dark:text-red-500"
        aria-label="error section"
      >
        {errors.email && (
          <span aria-expanded="true">Your Email is required</span>
        )}
        {errors.subject && (
          <span aria-expanded="true">A Subject is required</span>
        )}
        {errors.message && (
          <span aria-expanded="true">A Message is required</span>
        )}{" "}
      </section>
      <aside>
        <p className="text-sm font-light tracking-normal text-center dark:text-stone-400 text-stone-900 md:text-md">
          This site is protected by reCAPTCHA and the Google&nbsp;
          <a
            className="underline decoration-stone-400"
            href="https://policies.google.com/privacy"
          >
            Privacy Policy
          </a>
          &nbsp;and&nbsp;
          <a
            className="underline decoration-stone-400"
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
