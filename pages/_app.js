import React, { Component } from "react";
import '../assets/css/main.css';
import { Link } from "../routes";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

