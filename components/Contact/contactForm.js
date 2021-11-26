import React, { useReducer, useRef, useState } from "react";
import Link from "next/link";
import styles from "../Contact/ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import validator from "email-validator";
import ContactFeedback from "./contactFeedback";

const initialState = {
  name: "",
  phone: "",
  email: "",
  message: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "phone":
      return { ...state, phone: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "message":
      return { ...state, message: action.payload };
    case "reset":
      return { name: "", phone: "", email: "", message: "" };
    default:
      throw new Error();
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [messageSent, setMessageSent] = useState(false);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const contactRef = useRef(null);

  const validateContactInput = (state) => {
    if (state.name && state.phone && state.message.trim() !== "") {
      if (validator.validate(state.email.trim())) {
        // console.log("Message sent!");
        emailRef.current.style.color = "black";
        nameRef.current.style.color = "black";
        phoneRef.current.style.color = "black";
        messageRef.current.style.color = "black";
        return true;
      } else {
        messageRef.current.style.color = "black";
        emailRef.current.style.color = "red";
        return false;
      }
    } else {
      // console.log("Fill up the form.");
      if (state.name === "") nameRef.current.style.color = "red";
      if (state.phone === "") phoneRef.current.style.color = "red";
      if (state.message.trim() === "") messageRef.current.style.color = "red";
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateContactInput(state)) {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: state.email,
          fullname: state.name,
          phone: state.phone,
          subject: "Dynamic Black Car Service Website",
          message: state.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        return;
      }

      dispatch({ type: "reset" });
      setMessageSent(true);
    } else {
      // console.log("Message Not Sent!");
    }
    handleScrollTop();
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={contactRef} className={styles["contact-form"]}>
      <div className={styles["contact-background-image"]}></div>
      <div className={styles["contact-main"]}>
        <div className={styles["contact-title"]}>
          <h1>CONTACT US</h1>
        </div>
        <form>
          <div className={styles["contact-outer-form"]}>
            {messageSent ? <ContactFeedback onClick={setMessageSent} /> : null}
            <div className={styles["contact-full-form"]}>
              <div className={styles["contact-inner-form"]}>
                <div className={styles["contact-field"]}>
                  <label ref={nameRef}>Name*</label>
                  <input
                    onChange={(event) => {
                      dispatch({ type: "name", payload: event.target.value });
                      nameRef.current.style.color = "black";
                    }}
                    placeholder="Your name"
                    value={state.name}
                  ></input>
                </div>
                <div className={styles["contact-field"]}>
                  <label ref={phoneRef}>Phone Number*</label>
                  <input
                    onChange={(event) => {
                      dispatch({ type: "phone", payload: event.target.value });
                      phoneRef.current.style.color = "black";
                    }}
                    placeholder="Your phone number"
                    value={state.phone}
                  ></input>
                </div>
                <div className={styles["contact-field"]}>
                  <label ref={emailRef}>E-mail*</label>
                  <input
                    onChange={(event) => {
                      dispatch({ type: "email", payload: event.target.value });
                      emailRef.current.style.color = "black";
                    }}
                    placeholder="Your e-mail"
                    value={state.email}
                  ></input>
                </div>
                <label ref={messageRef}>Message*</label>
                <textarea
                  onChange={(event) =>
                    dispatch({ type: "message", payload: event.target.value })
                  }
                  rows="5"
                  placeholder="Type your message..."
                  value={state.message}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className={styles["contact-inner-button"]}
              >
                SUBMIT
              </button>
            </div>
            <div className={styles["contact-info"]}>
              <h1>Any questions?</h1>
              <div className={styles["contact-info-item"]}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" color="coral" />
                <p>{process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
              </div>
              <div className={styles["contact-info-item"]}>
                <FontAwesomeIcon icon={faPhone} size="2x" color="coral" />
                <Link href="tel:+1-415-767-6551">
                  <p>1+ (415) 767-6551</p>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
