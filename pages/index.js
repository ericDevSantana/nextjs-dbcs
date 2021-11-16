import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dynamic Black Car Service</title>
        <meta name="description" content="Arrive on time and in style." />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Arrive on time and in style."
        />
        <meta property="og:title" content="Dynamic Black Car Service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextjs-dbcs.vercel.app/" />
        <meta
          property="og:image"
          content="https://nextjs-dbcs.vercel.app/s450.jpg"
        />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
      </Head>
      <NavBar contact={false} />
      <div id="home" className={styles.body}>
        {/* -- BEGINNING INTRO BANNER -- */}
        <div className={styles.backBanner}>
          <div className={styles.backgroundImage}></div>

          <div className={styles.card}>
            {/* <img src="/brandBanner.jpg"></img> */}
            <h1>DYNAMIC BLACK CAR SERVICE</h1>
            <p>
              We pride ourselves on a black car service that is luxurious yet
              affordable. Our most popular service involves transporting clients
              to and from SFO airport.
            </p>
            <Link href="/contact">
              <button>REQUEST A QUOTE</button>
            </Link>
          </div>
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
              <h1>WINE COUNTRY TOURS</h1>
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
      <img src="/card.jpeg"></img>
      <div
        style={{
          color: "white",
          backgroundColor: "black",
          textAlign: "center",
          padding: "1rem 0 0 0",
          fontSize: "1rem",
        }}
      >
        <Link href="#home">
          <a>
            <FontAwesomeIcon icon={faArrowUp} size="1x" />
          </a>
        </Link>
        <p>BACK TO TOP</p>
      </div>
      <Footer />
    </div>
  );
}
