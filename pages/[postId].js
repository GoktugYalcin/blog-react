import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Collapsible from 'react-collapsible';
import { Script } from "domelementtype";
import Nav from "../components/nav"

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
    <link href='https://fonts.googleapis.com/css?family=Zilla Slab' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'/>
      <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'/>
      <title>{post.title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className="blog">
      <h2 className="blog-title">
        <Link href="#">
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}</div>
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

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`https://marcus-blog.com/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
