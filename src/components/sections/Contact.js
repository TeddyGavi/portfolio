import { SpeakerWaveIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export default function Contact() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [submit, setSubmit] = useState("");

  const onSubmit = useCallback(
    async (formData) => {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }

      const token = await executeRecaptcha("submitFormWithToken");
      // Do whatever you want with the token
      submitFormWithToken(token, formData);
      console.log(token, formData);
    },
    [executeRecaptcha]
  );

  // You can use useEffect to trigger the verification as soon as the component being loaded
  // useEffect(() => {
  //   onSubmit();
  // }, [onSubmit]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitFormWithToken = async (token, formData) => {
    // serverless api call
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
          await emailjs.send(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
            formData,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
          );
        } catch (error) {
          setSubmit("Error sending email");
        }

        setSubmit(parsedRes.message);
      } else {
        setSubmit(parsedRes.message);
      }
    } catch (error) {
      setSubmit("Error with captcha");
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.7 }}
      className="font-source flex flex-col items-center justify-center "
    >
      <article className="flex flex-col w-full py-8 lg:py-16 px-4 ">
        <h3 className=" inline-flex justify-center text-5xl font-main font-extrabold text-center text-stone-200 md:text-6xl">
          Hello!
          <SpeakerWaveIcon className="h-6 w-6 ml-2 blink" />
        </h3>
        <p className="m-2 lg:mt-16 font-light text-center  text-stone-400 sm:text-xl">
          Whats on your mind?
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <section aria-label="email section of contact form">
            <label
              name="email"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Your email
            </label>

            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-stone-100 focus:border-stone-50 block w-full p-2.5 bg-stone-800 bg-opacity-50"
              placeholder="name@gmail.com"
              required
            />
          </section>
          <section>
            <label
              name="subject"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Subject
            </label>

            <input
              {...register("subject", { required: true })}
              type="text"
              id="subject"
              className="block p-3 w-full text-sm shadow-sm border border-gray-300 text-gray-100 rounded-lg focus:ring-stone-100 focus:border-stone-50 bg-stone-800 bg-opacity-50"
              placeholder="Let us know how we can help you"
              required
            />
          </section>
          <section aria-label="message text area" className="sm:col-span-2">
            <label
              name="message"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Your message
            </label>

            <textarea
              {...register("message", { required: true })}
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-100 shadow-sm border border-gray-300 rounded-lg focus:ring-stone-100 focus:border-stone-50  bg-stone-800 bg-opacity-50"
              placeholder="Say Hello..."
            ></textarea>
          </section>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-full md:w-fit hover:bg-stone-400 focus:ring-4 focus:outline-none focus:ring-stone-100 bg-stone-800 bg-opacity-50"
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
            {submit.status && (
              <span className=" text-white text-xl">{submit.msg}</span>
            )}
          </section>
        </form>
      </article>
      <aside>
        <p className="font-light text-stone-400 text-sm md:text-md text-center">
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
