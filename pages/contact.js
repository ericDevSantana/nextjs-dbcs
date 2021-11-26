import Head from "next/head";
import ContactForm from "../components/Contact/contactForm";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Arrive on time and in style." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar contact={true} />
      <div className={styles["contact-form"]}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
