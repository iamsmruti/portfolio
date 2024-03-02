import React, { useRef, useState } from "react";
import Container from "../../../components/CustomUI/Container";
import HeadingLarge from "../../../components/CustomUI/HeadingLarge";
import EmojiPicker from "emoji-picker-react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const [emoji, setEmoji] = useState("");

  const [emojiWidgetOpen, setEmojiWidgetOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbzTIjgkolfDkXOHBxFiWAFRrRCeksrkH53XW1lc4alrEp3Pn5CFeXih9g0jhMpUZqtV/exec";
    const formData = new FormData(formRef.current);
    formData.append("Mood", emoji);

    fetch(scriptUrl, { method: "POST", body: formData })
      .then((res) => {
        setEmoji("")
        setEmail("")
        setName("")
        setMessage("")

        alert('Your message has been Sent !');
      })
      .catch((err) => console.log(err));
  };

  const customInput = {
    outline: "none",
    padding: "1rem",
    background: "#30332E",
  };

  return (
    <div>
      <Container>
        <form ref={formRef} className="lg:h-[90vh] md:h-[60vh] h-[70vh] sm:h-[50vh]">
          <HeadingLarge title="Contact Me" />

          <div className="max-w-[700px] w-[100%] mb-10">
            <input
              className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              style={customInput}
              value={name}
              name="Name"
            />
            <input
              className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              style={customInput}
              value={email}
              name="Email"
            />

            <div className="relative flex items-center mb-3">
              <p className="flex justify-center">Your Mood right now: </p>
              <p>
                <span className="text-5xl ml-3">{emoji}</span>
              </p>
              <div
                className="cursor-pointer border-[0.5px] border-gray-400 bg-blackOlive px-3 py-1 ml-5"
                onClick={() => setEmojiWidgetOpen((p) => !p)}
                name="Mood"
              >
                {emoji === "" ? "Set Your Mood" : "Change Mood"}
              </div>
              <div className="absolute md:right-0 top-10 md:top-2">
                <EmojiPicker
                  value={emoji}
                  open={emojiWidgetOpen}
                  height={400}
                  width={300}
                  theme="dark"
                  searchPlaceHolder="What's in your mood ?"
                  onEmojiClick={(e) => {
                    setEmoji(e.emoji);
                    setEmojiWidgetOpen(false);
                  }}
                />
              </div>
            </div>

            <textarea
              className="shadow-md bg-gray-100 dark:bg-black dark:border-[1px] dark:border-gray-900 w-[100%] mb-3"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              name="Message"
              rows="4"
              value={message}
              style={customInput}
            ></textarea>

            <div className="">
              <button
                className="bg-blue text-black px-3 py-1"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default ContactPage;
