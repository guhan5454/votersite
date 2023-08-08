import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import logo from './Assests/blank-profile-picture-973460_1280.webp'
import sankaralogo from './Assests/sankaralogo.png'
import useSound from 'use-sound';
import beep from './Assests/bleep.mp3' 
import wrong from './Assests/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.avif'
import tickmark from './Assests/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.avif'

const App = () => {
  const [play] = useSound(beep);
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
  const handleSportsSecretary = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      sportsSecretary: e.target.value
    }));
  };
  // console.log(selectedPerson.chairman)

  console.log(selectedPerson)
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async() => {
    try {
      play()
      // Make an HTTP POST request to the backend endpoint
      await axios.post('http://localhost:3001/data', selectedPerson);
      console.log('Data posted successfully');
      setCurrentStep((prevStep)=> prevStep +1)

      // Clear the form fields or perform any other actions
    } catch (error) {
      console.error('Error posting data:', error);
      // Handle the error
      setCurrentStep((prevStep)=> prevStep+2)
    }
  }

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
                  Sruthi
                </label>
                <input type="radio" name="Sruthi" value="Sruthi" className="radioButton" checked={selectedPerson.chairman === "Sruthi"} onChange={handleChairman}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sanjeev
                </label>
                <input type="radio" name="Sanjeev" value="Sanjeev" className="radioButton" checked={selectedPerson.chairman === "Sanjeev"} onChange={handleChairman}  />
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
            <h2 className="fs-title">Vice Chairman</h2>
            <h3 className="fs-subtitle">Select any one</h3>
            <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Subbu
                </label>
                <input type="radio" name="Subbu" value="Subbu" className="radioButton" checked={selectedPerson.viceChairman === "Subbu"} onChange={handleViceChairman}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Vasanth
                </label>
                <input type="radio" name="Vasanth" value="Vasanth" className="radioButton" checked={selectedPerson.viceChairman === "Vasanth"} onChange={handleViceChairman}  />
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
          <h2 className="fs-title">Secretary</h2>
          <h3 className="fs-subtitle">Select any one</h3> 
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
                  Nithin
                </label>
                <input type="radio" name="Nithin" value="Nithin" className="radioButton" checked={selectedPerson.secretary === "Nithin"} onChange={handleSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sherin
                </label>
                <input type="radio" name="Sherin" value="Sherin" className="radioButton" checked={selectedPerson.secretary === "Sherin"} onChange={handleSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Abiya
                </label>
                <input type="radio" name="Abiya" value="Abiya" className="radioButton" checked={selectedPerson.secretary === "Abiya"} onChange={handleSecretary}  />
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
          <h2 className="fs-title">Joint Secretary</h2>
          <h3 className="fs-subtitle">Select any one</h3> 
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
                  Tharun
                </label>
                <input type="radio" name="Tharun" value="Tharun" className="radioButton" checked={selectedPerson.jointSecretary === "Tharun"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Suganya
                </label>
                <input type="radio" name="Suganya" value="Suganya" className="radioButton" checked={selectedPerson.jointSecretary === "Suganya"} onChange={handleJointSecretary}  />
              </div>
 
            </div>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )
      case 5:
        return(
          <fieldset>
          <h2 className="fs-title">Cultural Secretary</h2>
          <h3 className="fs-subtitle">Select any one</h3> 
           <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Sundar
                </label>
                <input type="radio" name="Sundar" value="Sundar" className="radioButton" checked={selectedPerson.culturalSecretary === "Sundar"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Charan
                </label>
                <input type="radio" name="Charan" value="Charan" className="radioButton" checked={selectedPerson.culturalSecretary === "Charan"} onChange={handleCulturalSecretary}  />
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
          </fieldset>
        )
      case 6:
        return(
          <fieldset>
          <h2 className="fs-title">Sports Secretary</h2>
          <h3 className="fs-subtitle">Select any one</h3> 
           <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Krishna
                </label>
                <input type="radio" name="Krishna" value="Krishna" className="radioButton" checked={selectedPerson.sportsSecretary === "Krishna"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Keerthi
                </label>
                <input type="radio" name="Keerthi" value="Keerthi" className="radioButton" checked={selectedPerson.sportsSecretary === "Keerthi"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label>
                  Kannan
                </label>
                <input type="radio" name="Kannan" value="Kannan" className="radioButton" checked={selectedPerson.sportsSecretary === "Kannan"} onChange={handleSportsSecretary}  />
              </div>
 
            </div>
            <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        )
      case 7:
        return(
          <fieldset>
          <h2 className="fs-title">Your Votes</h2>
          <h3 className="fs-subtitle">The final choices will be submitted once you click on Sumbit button</h3> 
          <table className='table'>
          <thead className='tableHead'>
            <tr>
              <th>Position</th>
              <th>Selected Person</th>
            </tr>
          </thead>
          <tbody className='tableBody' >
            <tr>
              <td>Chairman</td>
              <td>{selectedPerson.chairman}</td>
            </tr>
            <tr>
              <td>Vice Chairman</td>
              <td>{selectedPerson.viceChairman}</td>
            </tr>
            <tr>
              <td>Secretary</td>
              <td>{selectedPerson.secretary}</td>
            </tr>
            <tr>
              <td>Joint Secretary</td>
              <td>{selectedPerson.jointSecretary}</td>
            </tr>
            <tr>
              <td>Cultural Secretary</td>
              <td>{selectedPerson.culturalSecretary}</td>
            </tr>
            <tr>
              <td>Sports Secretary</td>
              <td>{selectedPerson.sportsSecretary}</td>
            </tr>
            </tbody>
          </table>
          <input type="button" name="submit" className="next action-button" value="Submit" onClick={handleSubmit} />
          </fieldset>
          )
      case 8:
        return(
          <fieldset>
             <h2 className="fs-title">Your Voting is recorded Successfully</h2>
             <img alt=''  className='tickmark' src={tickmark} ></img>
          </fieldset>
        )
      case 9:
        return(
          <fieldset>
              <h2 className="fs-title">Error Submitting the vote</h2>
              <img alt=''  className='tickmark' src={wrong} ></img>
              <button onClick={play}>Boop!</button>;
          </fieldset>
        )
      default:
        return null;
    }
  };

  return (
    <form id="msform">
      <meta name="viewport"  content="width=device-width, initial-scale=1.0"></meta>
      <div>
      <img alt=''  className='headerLogo' src={sankaralogo} ></img>
      </div>
      <ul id="progressbar">
        <li className={currentStep === 1 ? 'active' : ''}>Chairman</li>
        <li className={currentStep === 2 ? 'active' : ''}>Vice Chairman</li>
        <li className={currentStep === 3 ? 'active' : ''}>Secretary</li>
        <li className={currentStep === 4 ? 'active' : ''}>Joint Secretary</li>
        <li className={currentStep === 5 ? 'active' : ''}>Cultural Secretary</li>
        <li className={currentStep === 6 ? 'active' : ''}>Sports Secretary</li>
        <li className={currentStep === 7 ? 'active' : ''}>Summary</li>
      </ul>
      {renderFieldset(currentStep)}
    </form>
  );
};

export default App;
