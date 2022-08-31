import logo from "../logo.svg";

export function HomePage({ accountProps }) {
  return (
    <header className="App-header">
      <div className="container">
        <p>
          This is a Web3 frontend starter project to help you quickly bootstrap
          the frontend of a project on Polygon. The starter uses React and has
          routing, Rainbowkit, and Material UI set up. All you need to do to get
          started is add your Alchemy ID.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Run <code>`touch .env`</code> to create an env file in the root of
          this project.
        </p>
        <p>
          Add a REACT_APP_ALCHEMY_ID to the <code>.env</code> file with a new
          app id from the{" "}
          <a
            className="App-link"
            href="https://alchemy.com/?r=zU2MTQwNTU5Mzc2M"
            rel="noreferrer"
            target="_blank"
          >
            Alchemy UI
          </a>
        </p>
      </div>
    </header>
  );
}
