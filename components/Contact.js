import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_g4jxybc",
    //     "template_c9kq9u7",
    //     form.current,
    //     "g5KfgP6FJKpmtRuTk"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log("message sent");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };
  return (
    <section className="py-10 w-screen">
      <div>
        <h3 className="text-3xl py-1 text-black dark:text-white ">Contact</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer {","} Ive done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use{"."}
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services {","} including brand design{" "}
          {","}
          programming and teaching{"."}
        </p>
      </div>

      <h1>Contact</h1>
      <ul>
        <li>
          <h2>
            Let{"&apos;"}s chat{"."}
          </h2>
          <p>
            I{"&apos;"}d love to hear from you! Don{"&apos;"}t hesitate to send
            me a message—whether you have thoughts to share or feedback {","} it
            {"&apos;"}s all welcomed. I{"&apos;"}ll respond as soon as possible.
            Looking forward to connecting with you{"!"}
          </p>
        </li>
        <li>
          <form onSubmit={sendEmail} ref={form}>
            <div>
              <label>NAME</label>
              <input type="text" name="user_name" id="name" required />
            </div>

            <div>
              <label>EMAIL</label>
              <input type="text" name="user_email" id="email" required />
            </div>

            <div>
              <label>MESSAGE</label>
              <textarea name="message" required />
            </div>

            <input type="submit" value="Send" />
          </form>
        </li>
      </ul>
    </section>
  );
}
