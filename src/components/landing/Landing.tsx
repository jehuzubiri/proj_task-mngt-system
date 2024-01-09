import React from "react";

//COMPONENTS
import LandingItem from "./other/LandingItem";
import AccSetup from "./userview/AccSetup";
import AdminAccList from "./adminview/AdminAccList";

const Landing: React.FC = () => {
  return (
    <section className="landing d-flex-row">
      <LandingItem
        title="User View"
        desc="This is what user's Landing Page looks like."
      >
        <AccSetup />
      </LandingItem>
      <LandingItem
        title="Admin View"
        desc="This is the list of created accounts on admin's POV."
      >
        <AdminAccList />
      </LandingItem>
    </section>
  );
};

export default Landing;
