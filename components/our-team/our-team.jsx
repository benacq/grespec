import React from "react";
import OurTeamFrame from "./our-team-frame";

function OurTeam() {
  return (
    <section className="responsive py-10">
      <h3>Our Team</h3>

      <OurTeamFrame
        backgroundImage={"bg-[url('/agribusiness.png')]"}
        name="Ebenezer Boahene Annoh"
        title="Operations Manager/CEO"
        description="He has experience in preparing business contracts and research in new technologies and alternative methods to maximize efficiency He is a graduate from KNUST-Kumasi (BSc. Agriculture), holds a Postgraduate diploma in International Financial Management, UK and a Master of Arts in Ministry"
        descriptionContd="His vision is to give direction and a sense of purpose to his generation with his God-given abilities through the sharing of knowledge and skills. For this reason, he mentors young people with his message of leadership, entrepreneurship and personal life experiences. He has passion for sales and marketing, and strategic planning and management."
      />

      <div className="mt-20" />

      <OurTeamFrame
        backgroundImage={"bg-[url('/agribusiness.png')]"}
        name="Anita Yeboaa Amponsah "
        title="Sales and Marketing Manager"
        description="She joined Greepec Consult in 2017 and is responsible for product development, sale and staying in touch with our clients while coordinating with the organizations to know feedback of products sold."
        descriptionContd=" She holds a degree in BSc Banking and Finance. She finds out from clients their challenges and relay that information to management. "
      />
    </section>
  );
}

export default OurTeam;
