import AboutHero from "./components/AboutHero";
import Cta from "./components/Cta";
import Freelancers from "./components/Freelancers";
import MembershipPlans from "./components/Membership";
import Sponsors from "./components/Sponsors";
import Testimonials from "./components/Testimonials";
import ValueProp from "./components/ValueProp";

export default function Home() {
  return (
    <>
      <AboutHero />
      <ValueProp />
      <Testimonials />
      <Freelancers />
      <MembershipPlans />
      <Sponsors />
      <Cta />
    </>
  );
}
