import React, { Component } from 'react';
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Collapsible from 'react-collapsible';
import { Script } from "domelementtype";
import Nav from "../components/nav"
import TextTruncate from "react-text-truncate"
const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Home</title>
      <link href='https://fonts.googleapis.com/css?family=Zilla Slab' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
        <TextTruncate
            line={3}
            element="span"
            truncateText="…"
            text={post.details}
            textTruncateChild={<a href={post.slug}>Devamı için tıklayınız.</a>}
        />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}



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
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("https://marcus-blog.herokuapp.com/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
