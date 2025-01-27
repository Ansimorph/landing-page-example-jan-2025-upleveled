import "./App.css";
import ExplainerList from "./ExplainerList";
import Header from "./Header";
import LinkButton from "./LinkButton";
import demoImage from "./images/jive-phones.png";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Don’t make connecting awkward</h1>

        <p>
          No more fumbling for business cards or searching for lost contacts
          after an event. Jive makes it easy to exchange info and keep the
          conversation going straight from your inbox.
        </p>

        <LinkButton size="l" href="/signup">
          Sign up for free
        </LinkButton>

        <img
          src={demoImage}
          className="demoImage"
          alt="Two phones showing a QR code and a new message being sent to a jive contact"
        />

        <h2>Here's how it works</h2>

        <p>More jiving, less shucking.</p>

        <ExplainerList />
      </main>
    </div>
  );
}
