import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import logo from './Assests/blank-profile-picture-973460_1280.webp'
import sankaralogo from './Assests/sankaralogo.png'
import useSound from 'use-sound';
import beep from './Assests/bleep.mp3' 
import wrong from './Assests/red-cross-mark-icon-negative-choice-symbol-sign-app-button_744955-339.avif'
import tickmark from './Assests/green-check-mark-icon-symbol-logo-circle-tick-symbol-green-color-vector-illustration_685751-503.avif'
import images from './Images';

const App = () => {
  const [play] = useSound(beep);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPerson, setSelectedPerson] = useState({
    president:'',
    vicePresident:'',
    secretary:'',
    jointSecretary:'',
    culturalSecretary:'',
    sportsSecretary:''
  })
  
  const handlePresident = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      president: e.target.value
    }));
  };
  const handleVicePresident = (e) => {
    setSelectedPerson((prevSelectedPerson) => ({
      ...prevSelectedPerson,
      vicePresident: e.target.value
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
  // console.log(selectedPerson.president)

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
      setTimeout(function(){
        window.location.reload();
     }, 5000);

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
            <h2 className="fs-title">President</h2>
            <h3 className="fs-subtitle">Select any one</h3>
            <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.TheebanPresident} ></img>
                <label className='namefield'  >
                  Theeban Anand
                </label>
                <input type="radio" name="Theeban" value="Theeban" className="radioButton" checked={selectedPerson.president === "Theeban"} onChange={handlePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.PramodhPresident} ></img>
                <label className='namefield'>
                  Pramodh 
                </label>
                <input type="radio" name="Pramodh" value="Pramodh" className="radioButton" checked={selectedPerson.president === "Pramodh"} onChange={handlePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.MadhanrajPresident} ></img>
                <label className='namefield'>
                  Madhanraj
                </label>
                <input type="radio" name="Madhanraj" value="Madhanraj" className="radioButton" checked={selectedPerson.president === "Madhanraj"} onChange={handlePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.KarthikPresident} ></img>
                <label className='namefield'>
                  Karthik
                </label>
                <input type="radio" name="Karthik" value="Karthik" className="radioButton" checked={selectedPerson.president === "Karthik"} onChange={handlePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA1" value="NOTA1" className="radioButton" checked={selectedPerson.president === "NOTA1"} onChange={handlePresident}  />
              </div>
              
 
            </div>
            <input type="button" name="next" className="next action-button" value="Next" onClick={handleNext} />
          </fieldset>
        );
      case 2:
        return (
          <fieldset>
            <h2 className="fs-title">Vice President</h2>
            <h3 className="fs-subtitle">Select any one</h3>
            <div className='buttonContainer'>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.NavaneethVP} ></img>
                <label className='namefield'>
                  Navaneeth
                </label>
                <input type="radio" name="Navaneeth" value="Navaneeth" className="radioButton" checked={selectedPerson.vicePresident === "Navaneeth"} onChange={handleVicePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.PreethikaVP} ></img>
                <label className='namefield'>
                  Preethika
                </label>
                <input type="radio" name="Preethika" value="Preethika" className="radioButton" checked={selectedPerson.vicePresident === "Preethika"} onChange={handleVicePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.KaviPriyaVP} ></img>
                <label className='namefield'>
                  Kavi Priya
                </label>
                <input type="radio" name="KaviPriya" value="KaviPriya" className="radioButton" checked={selectedPerson.vicePresident === "KaviPriya"} onChange={handleVicePresident}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA2" value="NOTA2" className="radioButton" checked={selectedPerson.vicePresident === "NOTA2"} onChange={handleVicePresident}  />
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
                <img alt=''  className='profile' src={images.PraneethaSecretary} ></img>
                <label className='namefield'>
                  Praneetha
                </label>
                <input type="radio" name="Praneetha" value="Praneetha" className="radioButton" checked={selectedPerson.secretary === "Praneetha"} onChange={handleSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.MouliSecretary} ></img>
                <label className='namefield'>
                  Mouli
                </label>
                <input type="radio" name="Mouli" value="Mouli" className="radioButton" checked={selectedPerson.secretary === "Mouli"} onChange={handleSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA3" value="NOTA3" className="radioButton" checked={selectedPerson.secretary === "NOTA3"} onChange={handleSecretary}  />
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
                <img alt=''  className='profile' src={images.SaranyaJS} ></img>
                <label className='namefield'>
                  Saranya
                </label>
                <input type="radio" name="Saranya" value="Saranya" className="radioButton" checked={selectedPerson.jointSecretary === "Saranya"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.MadhumithaJS} ></img>
                <label className='namefield'>
                  Madhumitha
                </label>
                <input type="radio" name="Madhumitha" value="Madhumitha" className="radioButton" checked={selectedPerson.jointSecretary === "Madhumitha"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.AkashJS} ></img>
                <label className='namefield'>
                  Akash
                </label>
                <input type="radio" name="Akash" value="Akash" className="radioButton" checked={selectedPerson.jointSecretary === "Akash"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.KrithikaJS} ></img>
                <label className='namefield'>
                  Kiruthika
                </label>
                <input type="radio" name="Kiruthika" value="Kiruthika" className="radioButton" checked={selectedPerson.jointSecretary === "Kiruthika"} onChange={handleJointSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA4" value="NOTA4" className="radioButton" checked={selectedPerson.jointSecretary === "NOTA4"} onChange={handleJointSecretary}  />
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
                <img alt=''  className='profile' src={images.RudhraCS} ></img>
                <label className='namefield'>
                  Ruthra
                </label>
                <input type="radio" name="Ruthra" value="Ruthra" className="radioButton" checked={selectedPerson.culturalSecretary === "Ruthra"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.RaziyaBegamCS} ></img>
                <label className='namefield'>
                  RaziyaBegam
                </label>
                <input type="radio" name="RaziyaBegam" value="RaziyaBegam" className="radioButton" checked={selectedPerson.culturalSecretary === "RaziyaBegam"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.RejiCS} ></img>
                <label className='namefield'>
                  Riji
                </label>
                <input type="radio" name="Riji" value="Riji" className="radioButton" checked={selectedPerson.culturalSecretary === "Riji"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.SathyadeviCS} ></img>
                <label className='namefield'>
                  Sathyadevi
                </label>
                <input type="radio" name="Sathyadevi" value="Sathyadevi" className="radioButton" checked={selectedPerson.culturalSecretary === "Sathyadevi"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.NehaCS} ></img>
                <label className='namefield'>
                  Neha Kumari
                </label>
                <input type="radio" name="Neha" value="Neha" className="radioButton" checked={selectedPerson.culturalSecretary === "Neha"} onChange={handleCulturalSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA5" value="NOTA5" className="radioButton" checked={selectedPerson.culturalSecretary === "NOTA5"} onChange={handleCulturalSecretary}  />
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
                <img alt=''  className='profile' src={images.ShriranjaniSS} ></img>
                <label className='namefield'>
                  Shriranjani
                </label>
                <input type="radio" name="Shriranjani" value="Shriranjani" className="radioButton" checked={selectedPerson.sportsSecretary === "Shriranjani"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.NarmathaSS} ></img>
                <label className='namefield'>
                  Narmatha
                </label>
                <input type="radio" name="Narmatha" value="Narmatha" className="radioButton" checked={selectedPerson.sportsSecretary === "Narmatha"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.TheerthaSS} ></img>
                <label className='namefield'>
                  Theertha
                </label>
                <input type="radio" name="Theertha" value="Theertha" className="radioButton" checked={selectedPerson.sportsSecretary === "Theertha"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={images.KalaiSuryaSS} ></img>
                <label className='namefield'>
                  KalaiSurya
                </label>
                <input type="radio" name="KalaiSurya" value="KalaiSurya" className="radioButton" checked={selectedPerson.sportsSecretary === "KalaiSurya"} onChange={handleSportsSecretary}  />
              </div>
              <div className='inputfield'>
                <img alt=''  className='profile' src={logo} ></img>
                <label className='namefield'>
                  N O T A
                </label>
                <input type="radio" name="NOTA6" value="NOTA6" className="radioButton" checked={selectedPerson.sportsSecretary === "NOTA6"} onChange={handleSportsSecretary}  />
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
              <td>President</td>
              <td>{selectedPerson.president}</td>
            </tr>
            <tr>
              <td>Vice President</td>
              <td>{selectedPerson.vicePresident}</td>
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
          <input type="button" name="previous" className="previous action-button" value="Previous" onClick={handlePrevious} />
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
        <li className={currentStep === 1 ? 'active' : ''}>President</li>
        <li className={currentStep === 2 ? 'active' : ''}>Vice President</li>
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
