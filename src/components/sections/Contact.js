import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <section
      id="contact"
      className="font-source flex flex-col items-center justify-center  "
    >
      <div className="flex flex-col w-full py-8 lg:py-16 px-4 ">
        <h3 className=" inline-flex justify-center text-5xl font-main font-extrabold text-center text-stone-200 md:text-6xl">
          Hello!
          <SpeakerWaveIcon className="h-6 w-6 ml-2 blink" />
        </h3>
        <p className="mb-8 lg:mb-16 font-light text-center text-stone-400 sm:text-xl">
          Whats on your mind?
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              name="email"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-100 focus:border-stone-50 block w-full p-2.5 bg-stone-800 bg-opacity-50"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <label
              name="subject"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm shadow-sm border border-gray-300 text-gray-900 rounded-lg focus:ring-stone-100 focus:border-stone-50 bg-stone-800 bg-opacity-50"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              name="message"
              className="block mb-2 text-sm font-medium text-stone-200"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900shadow-sm border border-gray-300 text-gray-900  rounded-lg focus:ring-stone-100 focus:border-stone-50  bg-stone-800 bg-opacity-50"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 w-full md:w-fit hover:bg-stone-400 focus:ring-4 focus:outline-none focus:ring-stone-100 bg-stone-800 bg-opacity-50"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
