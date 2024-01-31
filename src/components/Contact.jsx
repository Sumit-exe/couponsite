import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8jl5wv6",
        "template_d9qp72l",
        form.current,
        "7vl2vb33Vkxcok265"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <section
      className="flex flex-col justify-center items-center gap-10 "
    >
      <h1 className="text-2xl font-bold mt-10">
        Contact Us
      </h1>

      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col gap-3 w-2/4 max-md:w-3/4 flex-1 items-center mb-10"
      >
        <input
          type="text"
          className="border-2 p-3 rounded-lg w-full "
          placeholder="Your Name"
          name="your_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="border-2 p-3 rounded-lg w-full"
          placeholder="Your Email"
          name="your_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className="border-2 p-3 rounded-lg w-full"
          rows="5"
          placeholder="your Message"
          name="message"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button  type="submit" value="send" className="btn border">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
