import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div id="home" className={styles.container}>
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
          content="https://nextjs-dbcs.vercel.app/image0.jpeg"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <NavBar contact={false} />
      <div className={styles.body}>
        {/* -- BEGINNING INTRO BANNER -- */}
        <div className={styles.backBanner}>
          <div className={styles.backgroundImage}></div>

          <div className={styles.card}>
            {/* <img src="/brandBanner.jpg"></img> */}
            <h1>DYNAMIC BLACK CAR SERVICE</h1>
            <p>
              Dynamic car service provides safe, dedicated and carefully vetted
              drivers in the San Francisco Bay Area.
            </p>
            <div className={styles["home-buttons"]}>
              <Link href="/contact">
                <div className={styles["call-button"]}>
                  <button>REQUEST A QUOTE</button>
                </div>
              </Link>
              <Link href="tel:+1-415-767-6551">
                <div className={styles["call-button"]}>
                  <button>CALL/TEXT NOW</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* -- ENDING INTRO BANNER -- */}

        <section id="about" className={styles.about}>
          <div className={styles["about-text"]}>
            <h1>ABOUT US</h1>
            <p>
              Dynamic Black Car Service is a company specializing in private
              luxury transportation solutions: private and group transfers,
              corporate and social events, tours, among other tailor-made
              transportation customizations for each Client.
            </p>
          </div>
          <div className={styles["about-img"]}>
            <Image src="/sanfrancisco.jpg" layout="fill" />
          </div>
        </section>

        <section id="vehicles" className={styles["vehicles-start"]}>
          <div className={styles["vehicles-display"]}>
            <div className={styles["vehicle-text"]}>
              <h1>VEHICLES</h1>
              <p>
                Since every corporate event is different, you can trust Dynamic
                Black Car Service to create a corporate travel package that best
                suits your specific needs. Hire a personal chauffeur while
                you`re in town for a roadshow, convention or a meeting and focus
                on your business without dealing with transfers from one place
                to another. Our Executive Car provides the latest luxury sedan
                and SUV models.
              </p>
            </div>
            {/* <div className={styles["vehicle-a-screen"]}></div> */}
            <div className={styles["vehicles"]}>
              <div className={styles["vehicle-item-a"]}>
                <Image src="/backseat.jpeg" layout="fill" />
              </div>
              <div className={styles["vehicle-item-a"]}>
                <Image
                  src="/carson-masterson-4uH8_ld-Vo8-unsplash.jpg"
                  layout="fill"
                />
              </div>
              <div className={styles["vehicle-item-b"]}>
                <Image src="/cadillacsuv.jpeg" layout="fill" />
              </div>
              <div className={styles["vehicle-item-c"]}>
                <Image src="/cadillac.jpeg" layout="fill" />
              </div>
            </div>
            {/* <div className={styles["vehicle-b-screen"]}></div> */}
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles["services-display"]}>
            <div className={styles["service-text"]}>
              <h1>SERVICES</h1>
              <p>
                Are you a tourist coming to town for an unforgettable vacation,
                a resident returning from a business trip, a professional in
                town for a conference or other business? No matter where you are
                or where you want to go, Dynamic Black Car Service® will be
                there for you. Whether you are traveling for business or
                leisure, we will pick you up and take you to the airport, your
                office, your home, or any other venue, all the while making sure
                that you have a safe, dependable, and comfortable experience.
                With Dynamic Black Car Service® you can look forward to a safe,
                trouble-free, in supreme comfort.
              </p>
            </div>
            <div className={styles["service-items"]}>
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image src="/luxury-1961577_1280.jpg" layout="fill" />
                </div>
                <div className={styles["service-a-info"]}>
                  <h1>BAY AREA AIRPORTS</h1>
                </div>
              </div>
              {/* <div className={styles["service-b-screen"]}></div> */}
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image src="/pexels-pixabay-51947.jpg" layout="fill" />
                </div>
                <div className={styles["service-a-info"]}>
                  <h1>WINE COUNTRY TOURS</h1>
                </div>
              </div>
              {/* <div className={styles["service-c-screen"]}></div> */}
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image src="/tranfers.jpeg" layout="fill" />
                </div>
                <div className={styles["service-a-info"]}>
                  <h1>TRANSFERS IN THE CITY</h1>
                </div>
              </div>
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image
                    src="/samuel-pereira-uf2nnANWa8Q-unsplash.jpg"
                    layout="fill"
                  />
                </div>
                <div className={styles["service-a-info"]}>
                  <h1>EVENTS AND MEETINGS</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img className={styles["company-card"]} src="/card.jpeg"></img>
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
