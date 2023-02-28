export default function Contact() {
  return (
    <section
      id="contact"
      className="font-source flex flex-col items-center justify-center  "
    >
      <div className="flex flex-col w-full py-8 lg:py-16 px-4 ">
        <h3 className=" inline-flex justify-center text-5xl font-main font-extrabold text-center text-stone-200">
          Hello!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 ml-2"
          >
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
            <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
          </svg>
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
