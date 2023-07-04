import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faPhone } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

export default function Home() {
  return (
    <div id="home" className={styles.container}>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        ></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        ></Script>
        <title>Dynamic Black Car Service</title>
        <meta
          name="description"
          content="Arrive on time and in style. Safe customer experience is an important goal in our service. Dedicated and carefully vetted drivers are making sure that you arrive comfortably and safely at your desired destination."
        />
        <meta
          name="keywords"
          content="limo, drivers, professional, time, on time, safe, Bay Area, San Francisco, bay, area, peninsula, SUV, black car, mercedes, luxury, guaranteed, service, car, dynamic, sedan, spacious, comfortable, leather, leather seats, clean, arrive, style, destination, quality, transportation, Uber, Lyft, ride-share, road, traffic, avoid, small business, business, transportation business, executive car, tourist, airport, pick up, drop off, transfers, city, downtown, hotel"
        />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="lang" content="en" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:description"
          content="Arrive on time and in style. Safe customer experience is an important goal in our service. Dedicated and carefully vetted drivers are making sure that you arrive comfortably and safely at your desired destination."
        />
        <meta property="og:title" content="Dynamic Black Car Service" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextjs-dbcs.vercel.app/" />
        <meta
          property="og:image"
          content="https://www.dynamicbcs.com/card.avif"
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
            <h2>ABOUT US</h2>
            <p>
              Dynamic Black Car Service is a company specializing in private
              luxury transportation solutions: private and group transfers,
              corporate and social events, tours, among other tailor-made
              transportation customizations for each Client.
            </p>
          </div>
          <div className={styles["about-img"]}>
            <Image
              alt="Image of a San Francisco California neighborhood."
              src="/sanfrancisco.jpg"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </section>

        <section id="vehicles" className={styles["vehicles-start"]}>
          <div className={styles["vehicles-display"]}>
            <div className={styles["vehicle-text"]}>
              <h2>VEHICLES</h2>
              <p>
                Since every corporate event is different, you can trust Dynamic
                Black Car Service to create a corporate travel package that best
                suits your specific needs. Hire a personal chauffeur while
                you`re in town for a roadshow, convention or a meeting and focus
                on your business without dealing with transfers from one place
                to another. Our Executive Car provides the latest luxury sedan
                and SUV models.
              </p>
            </div>
            {/* <div className={styles["vehicle-a-screen"]}></div> */}
            <div className={styles["vehicles"]}>
              <div className={styles["vehicle-item-a"]}>
                <Image
                  alt="Image of a luxury car's backseat."
                  src="/backseat.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles["vehicle-item-a"]}>
                <Image
                  alt="Image of four luxurious cars."
                  src="/carson-masterson-4uH8_ld-Vo8-unsplash.jpg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles["vehicle-item-b"]}>
                <Image
                  alt="Image of a black luxurious Sport Utility Vehicle."
                  src="/cadillacsuv.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles["vehicle-item-c"]}>
                <Image
                  alt="Image of a luxury car's interior."
                  src="/cadillac.jpeg"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            {/* <div className={styles["vehicle-b-screen"]}></div> */}
          </div>
        </section>

        <section id="services" className={styles.services}>
          <div className={styles["services-display"]}>
            <div className={styles["service-text"]}>
              <h2>SERVICES</h2>
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
                  <Image
                    alt="Image of a luxurious car and a private jet."
                    src="/MainAirport.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles["service-a-info"]}>
                  <h3>BAY AREA AIRPORTS</h3>
                </div>
              </div>
              {/* <div className={styles["service-b-screen"]}></div> */}
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image
                    alt="Image of Napa County."
                    src="/pexels-pixabay-51947.avif"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles["service-a-info"]}>
                  <h3>WINE COUNTRY TOURS</h3>
                </div>
              </div>
              {/* <div className={styles["service-c-screen"]}></div> */}
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image
                    alt="Image of a person in the back seat of a luxurious car using a laptop."
                    src="/tranfers.jpeg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles["service-a-info"]}>
                  <h3>TRANSFERS IN THE CITY</h3>
                </div>
              </div>
              <div className={styles["first-service"]}>
                <div className={styles["service-a"]}>
                  <Image
                    alt="Image of a conference."
                    src="/samuel-pereira-uf2nnANWa8Q-unsplash.jpg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className={styles["service-a-info"]}>
                  <h3>EVENTS AND MEETINGS</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <img
        className={styles["company-card"]}
        alt="Image of a business card."
        src="/card.avif"
      ></img>
      <div className={styles["business-card"]}>
        <Link href="#home">
          <FontAwesomeIcon icon={faArrowUp} size="1x" />
          <p>BACK TO TOP</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
