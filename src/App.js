import React, { useState } from 'react';
import './App.css';
import logo from './Assests/blank-profile-picture-973460_1280.webp'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState({
    chairman:'',
    viceChairman:'',
    secretary:'',
    jointSecretary:'',
    culturalSecretary:'',
    sportsSecretary:''
  })

  const handleChairman = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      chairman: e.target.value
    }));
  };
  const handleViceChairman = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      viceChairman: e.target.value
    }));
  };
  const handleSecretary = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      secretary: e.target.value
    }));
  };
  const handleJointSecretary = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      jointSecretary: e.target.value
    }));
  };
  const handleCulturalSecretary = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      culturalSecretary: e.target.value
    }));
  };
  // const handleSportsSecretary = (e) => {
  //   setSelectedPerson((prevSelectedPerson) => ({
  //     ...prevSelectedPerson,
  //     sportsSecretary: e.target.value
  //   }));
  // };
  // console.log(selectedPerson.chairman)

  console.log(selectedPerson)
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
            <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Guhan
                </label>
                <input type="radio" name="Guhan" value="Guhan" className="radioButton" checked={selectedPerson.chairman === "Guhan"} onChange={handleChairman}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Dhanush
                </label>
                <input type="radio" name="Dhanush" value="Dhanush" className="radioButton" checked={selectedPerson.chairman === "Dhanush"} onChange={handleChairman}  />
              </div>
 
            </div>
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sruthi
                </label>
                <input type="radio" name="Sruthi" value="Sruthi" className="radioButton" checked={selectedPerson.viceChairman === "Sruthi"} onChange={handleViceChairman}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Nandana
                </label>
                <input type="radio" name="Nandana" value="Nandana" className="radioButton" checked={selectedPerson.viceChairman === "Nandana"} onChange={handleViceChairman}  />
              </div>
 
            </div>
            
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );
      case 3:
        return (
          <fieldset>
           <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Safeek
                </label>
                <input type="radio" name="Safeek" value="Safeek" className="radioButton" checked={selectedPerson.secretary === "Safeek"} onChange={handleSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sihla
                </label>
                <input type="radio" name="Sihla" value="Sihla" className="radioButton" checked={selectedPerson.secretary === "Sihla"} onChange={handleSecretary}  />
              </div>
 
            </div>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );  
      case 4:
        return (
          <fieldset>
          <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Monisha
                </label>
                <input type="radio" name="Monisha" value="Monisha" className="radioButton" checked={selectedPerson.jointSecretary === "Monisha"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sess
                </label>
                <input type="radio" name="Sess" value="Sess" className="radioButton" checked={selectedPerson.jointSecretary === "Sess"} onChange={handleJointSecretary}  />
              </div>
 
            </div>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )
      case 5:
        return(
          <fieldset>
           <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Jana
                </label>
                <input type="radio" name="Jana" value="Jana" className="radioButton" checked={selectedPerson.culturalSecretary === "Jana"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Yogesh
                </label>
                <input type="radio" name="Yogesh" value="Yogesh" className="radioButton" checked={selectedPerson.culturalSecretary === "Yogesh"} onChange={handleCulturalSecretary}  />
              </div>
 
            </div>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
            <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">Submit</a>
          </fieldset>
        )
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
        <li className={currentStep === 4 ? 'active' : ''}>Personal Details</li>
        <li className={currentStep === 5 ? 'active' : ''}>Personal Details</li>
        </ul>
      {renderFieldset(currentStep)}
    </form>
  );
};

export default App;
