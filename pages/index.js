import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Black Car Service</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar contact={false} />
      <div id="home" className={styles.body}>
        {/* -- BEGINNING INTRO BANNER -- */}
        <div className={styles.backgroundImage}></div>

        <div className={styles.card}>
          <h1>DYNAMIC BLACK CAR SERVICE</h1>
          <p>
            We pride ourselves on a black car service that is luxurious yet
            affordable. Our most popular service involves transporting clients
            to and from SFO airport.
          </p>
          <button>REQUEST A QUOTE</button>
        </div>
        {/* -- ENDING INTRO BANNER -- */}

        <section id="about" className={styles.about}>
          <div className={styles["about-img"]}></div>
          <div className={styles["about-text"]}>
            <h1>ABOUT US</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="vehicles" className={styles.vehicles}>
          <div className={styles["vehicles-display"]}>
            <div className={styles["vehicle-a-screen"]}></div>
            <div className={styles["vehicle-item-a"]}></div>
            <div className={styles["vehicle-a-description"]}>
              <h1>LUXURY SEDANS</h1>
              <p>
                Pellentesque nec euismod ex. Nunc faucibus nulla et felis tempus
                egestas. Pellentesque nec euismod ex. Nunc faucibus nulla et
                felis tempus egestas. Pellentesque nec euismod ex. Nunc faucibus
                nulla et felis tempus egestas. sPellentesque nec euismod ex.
              </p>
            </div>
            <div className={styles["vehicle-b-screen"]}></div>
            <div className={styles["vehicle-item-b"]}></div>
            <div className={styles["vehicle-b-description"]}>
              <h1>SPORT UTILITY VEHICLES</h1>
              <p>
                Pellentesque nec euismod ex. Nunc faucibus nulla et felis tempus
                egestas. sPellentesque nec euismod ex. Nunc faucibus nulla et
                felis tempus egestas. Pellentesque nec euismod ex. Nunc faucibus
                nulla et felis tempus egestas. sPellentesque nec euismod ex.
              </p>
            </div>
            <div className={styles["vehicle-text"]}>
              <h1>VEHICLES</h1>
            </div>
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles["services-display"]}>
            <div className={styles["service-a-screen"]}></div>
            <div className={styles["service-a"]}></div>
            <div className={styles["service-a-info"]}>
              <h1>BAY AREA AIRPORTS</h1>
            </div>
            <div className={styles["service-b-screen"]}></div>
            <div className={styles["service-b"]}></div>
            <div className={styles["service-b-info"]}>
              <h1>WINE COUNTY TOURS</h1>
            </div>
            <div className={styles["service-c-screen"]}></div>
            <div className={styles["service-c"]}></div>
            <div className={styles["service-c-info"]}>
              <h1>TRANSFERS IN THE CITY</h1>
            </div>
            <div className={styles["service-text"]}>
              <h1>SERVICES</h1>
            </div>
          </div>
        </section>
      </div>
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          textAlign: "center",
          padding: "1rem 0 0 0",
        }}
      >
        <a href="#home">
          <FontAwesomeIcon icon={faArrowAltCircleUp} size="2x" color="coral" />
        </a>
        <p>BACK TO TOP</p>
      </div>
      <Footer />
    </div>
  );
}
