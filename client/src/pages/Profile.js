import React, { useState } from "react";
import "../styles/Login.css";
import "../styles/Profile.css";
import FormGoalType from "../formComponents/FormGoalType.js";
import FormSocialGood from "../formComponents/FormSocialGood.js";
import FormPersonalGoal from "../formComponents/FormPersonalGoal.js";

export default function Profile() {
  const [step, setStep] = useState(1);
  const [goalType, setGoalType] = useState("");
  const [goalCategory, setGoalCategory] = useState("");

  const specifyState = (type) => {
    setGoalType(type);
  };

  const toPersonal = () => {
    setGoalType("personal");
    setStep(step + 1);
  };

  const toSocial = () => {
    setGoalType("social");
    setStep(step + 2);
  };

  const prevStep = () => {
    setStep(1);
  };

  const nextStep = (value) => {
    setGoalCategory(value);
  };

  const values = { goalType, goalCategory };

  switch (step) {
    case 1:
      return (
        <div className="container">
          <FormGoalType
            nextPersonal={toPersonal}
            nextSocial={toSocial}
            handleChange={(e) => setGoalType(e.target.value)}
          />
        </div>
      );

    case 2:
      return (
        <div className="container">
          <div>
            <FormPersonalGoal prevStep={prevStep} />
          </div>
        </div>
      );

    case 3:
      return (
        <div className="container">
          <div>
            <FormSocialGood prevStep={prevStep} />
          </div>
        </div>
      );

    default:
      console.log("default");
  }
}
