import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";
import { Global, css } from "@emotion/react";

function App() {
  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@400;500;600;700&family=Roboto+Condensed:wght@700&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --heading-font: "Bebas Neue", sans-serif;
            --heading-font-cyrillic: "Roboto Condensed", sans-serif;
            --body-font: "Open Sans", Arial, sans-serif;
          }

          html {
            scroll-behavior: smooth;
            height: 100%;
          }

          body {
            font-family: var(--body-font);
            line-height: 1.5;
            color: #333;
            width: 100%;
            min-height: 100%;
            overflow-x: hidden;
            margin: 0;
            padding: 0;
          }

          /* Apply different font for Cyrillic text in headings */
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: var(--heading-font);
          }

          /* Target Cyrillic text specifically */
          :lang(bg) h1,
          :lang(bg) h2,
          :lang(bg) h3,
          :lang(bg) h4,
          :lang(bg) h5,
          :lang(bg) h6 {
            font-family: var(--heading-font-cyrillic);
            letter-spacing: 0.5px; /* Adjust letter spacing for better readability */
            text-transform: uppercase;
            font-weight: 700;
          }

          #root {
            width: 100%;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: stretch;
          }

          main {
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          section {
            width: 100vw;
          }
        `}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
