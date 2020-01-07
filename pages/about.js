import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { Script } from "domelementtype";

const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link href='https://fonts.googleapis.com/css?family=Zilla Slab' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Collapsible trigger="-Spotify-">
      <div className="sticky">
        <iframe src="https://open.spotify.com/embed/playlist/4ish9qQpJIAjWIu3trxZIF" width="650" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </Collapsible>

    <div className="spotify" padding-right="500px">
       <Link><input type="image" width="40" height="40" src="/spotify.png"></input></Link>
    </div>

    <div className="hero">
    <h1 className="hero-title">
        <a href="/index" className="hero-title-link">A. Marcus</a>
        </h1>
      <div className="hero-social-links">
        <Link href="/about">
          <a className="social-link">Hakkında</a>
        </Link>
        <Link href="https://www.twitter.com/ordansutuvar">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/yalcing">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/gokyalcin6">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>

    <div className="blog">
        <h2 className="blog-title">
          <Link href="/about">
            <a>About</a>
          </Link>
        </h2>
        <div className="blog-text">
        He was born in Istanbul, 1998... and this article will be completed.
        </div>
      </div>



    <style jsx>{`
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        font-family:'Zilla Slab';
        margin-right: 8px;
      }

      .hero-title {
        font-size: 48px;
        font-family:'Zilla Slab';
      }

      .hero-title-link {
        font-size: 48px;
        font-family:'Zilla Slab';
        color: #000000;
      }

      .blog-date {
        font-family:'Zilla Slab';
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
      }

      .blog-text {
        font-family:'Josefin Sans';

      }

      .blog-title {
        font-family:'Open Sans';
      }

      a {
        color: #02732A;
        text-decoration: none;
      }



    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
