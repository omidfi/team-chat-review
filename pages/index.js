import React from "react"
import Head from "next/head"
import Link from 'next/link'

export default () =>
  <div>
    <Head>
      <title>Team Chat Review</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1>Team Chat Review</h1>
    <p>What team chat app works best for your team?</p>
    <div className="card-container">
      <style jsx>
        {`
          .card-container {
            display: flex;
            flex-flow: row wrap;
            min-height: 50vh;
            justify-content: center;
          }
          .card {
            background-color: #00bcd4;
            margin: 10px;
            padding: 10px;
            min-width: 200px;
            width: 40%;
            border-radius: 5px;
          }
          @media (max-width: 600px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
      <div className="card">
         <Link href="/flowdock">
           <a><h2>Flowdock</h2></a>
        </Link>
        <p></p>
      </div>
      <div className="card">
        <h2>IRC</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Rocket.chat</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Zulip</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Twist</h2>
      </div>
      <div className="card">
        <h2>Slack</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Hipchat</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Stride</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Skype</h2>
        <p></p>
      </div>
      <div className="card">
        <h2>Basecamp</h2>
        <p></p>
      </div>
    </div>
    <footer>
      <style jsx>
        {`
          footer {
            margin-top: 30px;
            color: #444;
          }
        `}
      </style>
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        <img
          alt="Creative Commons License"
          src="https://i.creativecommons.org/l/by/4.0/88x31.png"
        />
      </a>
      <br />This work is licensed under a &nbsp;
      <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
        Creative Commons Attribution 4.0 International License
      </a>.
    </footer>
  </div>
