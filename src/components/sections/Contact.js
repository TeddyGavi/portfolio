import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submit, setSubmit] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
    [executeRecaptcha]
  );

  // You can use useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   onSubmit();
  // }, [onSubmit]);

  const submitFormWithToken = async (token, formData) => {
    // serverless api call, sends the token from recaptcha hook to google recaptcha api
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
      if (parsedRes?.status === "success") {
        try {
          // await emailjs.send(
          //   process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
          //   process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
          //   formData,
          //   process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
          // );
          const emailSendRes = await fetch("/api/emailSend", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },

            body: JSON.stringify({ formData }),
          });
          const emailRes = emailSendRes.json();
          if (emailRes.status === "success") {
            setSubmit(parsedRes.message);
          } else if (emailRes.status === "failure") {
            setSubmit("Error Sending Email");
          }
        } catch (error) {
          setSubmit("Error sending email");
        }
      } else {
        setSubmit(parsedRes.message);
      }
    } catch (error) {
      setSubmit("Error with captcha");
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
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center rounded-lg w-full md:w-fit dark:text-white dark:hover:bg-stone-400 focus:ring-4 focus:outline-none dark:focus:ring-stone-100 dark:bg-stone-800 dark:bg-opacity-50 text-stone-900 bg-stone-200 focus:ring-stone-900 hover:bg-stone-800 hover:text-white transition-all duration-200"
          >
            Send message
          </button>
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
            {submit && (
              <span className=" text-white md:text-xl text-md text-center">
                {submit}
              </span>
            )}
          </section>
        </form>
      </article>
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
