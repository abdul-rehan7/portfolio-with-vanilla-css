import React from "react";
import CardComp from "../components/Card";

export default function page() {
  return (
    <div>
      <div className="my-heading">
        My Projects
        <div className="project-section">
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
          <CardComp />
        </div>
      </div>
    </div>
  );
}
