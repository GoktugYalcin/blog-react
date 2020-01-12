import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Collapsible from 'react-collapsible';
import { Script } from "domelementtype";
const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>

    <div className="sticky">
        <Collapsible trigger="-Spotify-">
        <iframe src="https://open.spotify.com/embed/playlist/4ish9qQpJIAjWIu3trxZIF" width="580" height="330" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </Collapsible>
    </div>

    <div className="spotify" padding-right="500px">
       <Link><input type="image" width="40" height="40" src="/spotify.png"></input></Link>
    </div>

    <div className="hero">
      <h1 className="hero-title">
        <a href="/index" className="hero-title-link">A. Marcus</a>
        </h1>
      <div className="hero-social-links">
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

      div.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        padding-right: 50px;
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }

      .blog-title {
        font-family:'Open Sans';
      }

      a {
        color: #02732A;
        text-decoration: none;
      }

      Collapsible{
        font-family:'Josefin Sans';
      }
    `}</style>
  </nav>
)

export default Nav
