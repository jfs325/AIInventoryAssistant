import React from 'react';
import TutorialHeader from './TutorialHeader';
import AppProcess from './Pictures/Application_Process.png';
import Commands from './Pictures/commands.png';
import Result from './Pictures/result.png';
import "./TutorialPage.css"

const header1 = "AI Powered InventoryAssistant";
const header2 = "Your personal assistant when taking inventory. You can talk to it like a human, and it will take your commands and return an inventory spreadsheet back to you, intelligently tracking all your items!";
const paragraph1 = "The purpose of this software is to save users time when taking physical inventory of items. The intended use case is dictating text into the text box on one's mobile device. This improves efficiency by allowing the user only to have to visually scan for items, and then quickly move on to the next set of items. Once a user is done giving commands, they press the button 'submit commands' which delivers those commands to chatGPT, compiling the commands into a JSON list of inventory items, which then gets converted into a CSV file.";
const caption1 = "Below is a visual representation of how data flows through the application: ";
const useCase = "Example Use Case";
const caption2 = "Here is an example of a list of commands you could give the application, for taking inventory of food items:";
const result = "Here is the spreadsheet that is returned to the user:";
const caption3 = "Note that the application was able to intelligently track previously stated items, and add or subtract units from those items to free up time for the user to keep taking inventory.";
const improvement = (
    <div>
      This is by far not a perfect application, just an exploration of a use case for humanizing software using Language Learning Models.<br />
      Here are some things I hope to work on in the future:<br />
      <br />
      Error checking to ensure that if the user enters non-inventory text, then it will tell the user that that is not what is supposed to do.<br />
      <br />
      Exploring different ways inventory can be represented, and accounting for multiple representations in the model.<br />
      <br />
      Fine-tuning the model in order to allow subunits of items to be added. The model can add main units like "boxes" or "cases," but struggles to add smaller units, like cans within those boxes.<br />
      <br />
      Bigger vision: a much more ambitious goal, but the next evolution of this software I can imagine, is a full mobile app that can dynamically represent the inventory the user is taking. So not submitting one big list of commands, but seeing a spreadsheet or some representation of the inventory happening at each command the user gives.<br />
    </div>
  );

const TutorialPage = () => {

  return (
    <div className='tutorial-text'>
      <TutorialHeader />
      <h1 className='header-text'>{header1}</h1>
      <h2 className='header-text'>{header2}</h2>
      <p>{paragraph1}</p>
      <p>{caption1}</p>
      <img className="tutorial-image" src={AppProcess} style={{width: '800px', height: 'auto'}}></img>
      <h2 className='header-text'>{useCase}</h2>
      <p>{caption2}</p>
      <p>{caption2}</p>
      <img className="tutorial-image" src={Commands}></img>
      <p>{result}</p>
      <p>{result}</p>
      <img className="tutorial-image" src={Result}></img>
      <p>{caption3}</p>
      <h2 className='header-text'>Notes For Improvement</h2>
      <p>{improvement}</p>
    </div>
  );
};

export default TutorialPage;
