import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.AboutUsContainer}>
      <h1>About Us</h1>
      <section>
        <p>
          Welcome to our learning journey! We're on a mission to master the art
          of full-stack development, one React component at a time.
        </p>
        <h2>Our Mission</h2>
        <p>
          To build engaging web apps while leveling up our skills in React,
          React Router, and seamless API integrations.
        </p>
        <h2>Potential</h2>
        <p>
          By conquering these tools, we're unlocking the doors to crafting
          dynamic, user-friendly applications and advancing toward full-stack
          expertise.
        </p>
        <h2>Skills We're Gaining</h2>
        <ul>
          <li>Building interactive components with React</li>
          <li>Creating smooth navigation using React Router</li>
          <li>Fetching and managing data with API calls</li>
          <li>Designing modular and maintainable code</li>
        </ul>
        <p>
          Join us on this adventure as we transform lines of code into
          real-world solutions!
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
