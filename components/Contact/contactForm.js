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

export async function getStaticProps() {
  const my_key = process.env.TEST_KEY;

  if (my_key === "123456789") {
    return {
      props: {
        my_key,
      },
    };
  }
}

export default function ContactForm({ my_key }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(my_key);

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
            <button className={styles["contact-inner-button"]}>SUBMIT</button>
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
