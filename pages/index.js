import Welcome from "../components/Welcome";
import Services from "../components/Services";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <div>
      <Welcome /> <Services /> <Contact />{" "}
    </div>
  );
}
