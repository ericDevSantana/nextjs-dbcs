import ContactForm from "../components/Contact/contactForm";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <div>
      <NavBar contact={true} />
      <div className={styles["contact-form"]}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
