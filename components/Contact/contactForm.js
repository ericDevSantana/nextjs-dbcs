import React, { useReducer, useState } from "react";
import styles from "../Contact/ContactForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
    default:
      throw new Error();
  }
}

export default function ContactForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: initialState.email,
        fullname: initialState.name,
        subject: "Inquiry",
        message: initialState.message,
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
    console.log(fullname, email, subject, message);
  };

  return (
    <div className={styles["contact-form"]}>
      <div className={styles["contact-background-image"]}></div>
      <div className={styles["contact-main"]}>
        <div className={styles["contact-title"]}>
          <h1>CONTACT US</h1>
        </div>
        <div className={styles["contact-outer-form"]}>
          <div className={styles["contact-full-form"]}>
            <div className={styles["contact-inner-form"]}>
              <div className={styles["contact-field"]}>
                <label>Name</label>
                <input
                  onChange={(event) =>
                    dispatch({ type: "name", payload: event.target.value })
                  }
                  placeholder="Your name"
                ></input>
              </div>
              <div className={styles["contact-field"]}>
                <label>Phone Number</label>
                <input
                  onChange={(event) =>
                    dispatch({ type: "phone", payload: event.target.value })
                  }
                  placeholder="Your phone number"
                ></input>
              </div>
              <div className={styles["contact-field"]}>
                <label>E-mail</label>
                <input
                  onChange={(event) =>
                    dispatch({ type: "email", payload: event.target.value })
                  }
                  placeholder="Your e-mail"
                ></input>
              </div>
              <label>Message</label>
              <textarea
                onChange={(event) =>
                  dispatch({ type: "message", payload: event.target.value })
                }
                rows="5"
                placeholder="Type your message..."
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
              <p>DYNAMICBLACKCAR@GMAIL.COM</p>
            </div>
            <div className={styles["contact-info-item"]}>
              <FontAwesomeIcon icon={faPhone} size="2x" color="coral" />
              <p>1+ (415) 767-6551</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
