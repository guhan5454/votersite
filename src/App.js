import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState({
    chairman:1,
    viceChairman:1,
    secretary:1,
    jointSecretary:1,
    culturalSecretary:1,
    sportsSecretary:1
  })

  const handleChange = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      chairman: e.target.value === "guhan" ? "guhan" : 1,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderFieldset = (step) => {
    switch (step) {
      case 1:
        return (
          <fieldset>
            <h2 className="fs-title">Chairman</h2>
            <h3 className="fs-subtitle">Select any one</h3>
            <imput type="radio" name="guhan" value="guhan" className="radio-button" checked={selectedPerson.chairman === "guhan"} onChange={handleChange} />
            {/* <input type="text" name="email" placeholder="Email" className="input-field" />
            <input type="password" name="pass" placeholder="Password" className="input-field" />
            <input type="password" name="cpass" placeholder="Confirm Password" className="input-field" /> */}
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <h2 className="fs-title">Social Profiles</h2>
            <h3 className="fs-subtitle">Your presence on the social network</h3>
            <input type="text" name="twitter" placeholder="Twitter" className="input-field" />
            <input type="text" name="facebook" placeholder="Facebook" className="input-field" />
            <input type="text" name="gplus" placeholder="Google Plus" className="input-field" />
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );
      case 3:
        return (
          <fieldset>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">We will never sell it</h3>
            <input type="text" name="fname" placeholder="First Name" className="input-field" />
            <input type="text" name="lname" placeholder="Last Name" className="input-field" />
            <input type="text" name="phone" placeholder="Phone" className="input-field" />
            <textarea name="address" placeholder="Address" className="input-field"></textarea>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">Submit</a>
          </fieldset>
        );
      default:
        return null;
    }
  };

  return (
    <form id="msform">
      <ul id="progressbar">
        <li className={currentStep === 1 ? 'active' : ''}>Account Setup</li>
        <li className={currentStep === 2 ? 'active' : ''}>Social Profiles</li>
        <li className={currentStep === 3 ? 'active' : ''}>Personal Details</li>
      </ul>
      {renderFieldset(currentStep)}
    </form>
  );
};

export default App;
