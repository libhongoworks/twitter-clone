import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>Twitter</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="twitter, social media, digital communication"
      />
      <link rel="stylesheet" type="text/css" href="../static/index.css" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
        integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP"
        crossorigin="anonymous"
      />
    </Head>
    <main className="row">
      <div className="col landingLeft">
        <div>
          <p>
            <i className="fas fa-search" /> Follow your interests
          </p>
          <p>
            <i className="fas fa-users" /> Hear what people are talking about
          </p>
          <p>
            <i className="far fa-comments" /> Join the conversation
          </p>
        </div>
      </div>
      <div className="col landingRight container">
        <form className="loginForm row">
          <div className="col" id="form-div">
            <input
              type="email"
              placeholder="Email address"
              className="form-control"
            />
          </div>
          <div className="col" id="form-div">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
            />{" "}
            <small>
              <Link href="/passwordReset">Forgot password</Link>
            </small>
          </div>
          <div className="col" id="form-div">
            <button className="btn btn-outline-primary">
              <Link href="/login">Log in</Link>
            </button>
          </div>
        </form>
        <div className="container item-container">
          <div id="see-happening">
            <b>See what's happening in the world right now.</b>
          </div>
          <br />
          <div>
            <b>Join Twitter today.</b>
          </div>
          <br />
          <div>
            <button className="btn btn-outline-primary cta" id="btn-signup">
              <Link href="/signup">
                <a id="btn-signup-link">
                  <b>Sign up</b>
                </a>
              </Link>
            </button>
            <br />
            <button className="btn btn-outline-primary cta" id="btn-login">
              <Link href="/login">
                <a id="btn-login-link">
                  <b>Log in</b>
                </a>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
);
