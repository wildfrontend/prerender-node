import { NavLink } from "react-router";

const AboutPage: React.FC = () => {
  return (
    <div>
      <h1> About page
      </h1>
      <div>
        <NavLink to='/'>Go Homepage</NavLink>
      </div>
    </div>
  );
};

export default AboutPage;
