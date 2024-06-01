import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* 





Think about how to structure my components.

Make a plan for what I want first. 

Then plan on how to execute what I want.


|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|
|------------------------------------|

I want three apps on the top left that are collapsable.
 I want one named General Information with name, email, and phone number.
 I want one with Education information with school name, area of study, and date of study.
 I want one Work Experience with company name, position title, responsibilites, and dates.

 I want the info to update the CV as it is entered.

I want to add a option to customize the layout of the CV that would replace the three apps with information and give options to change layout, color, and font.

Make a sidebar component 
  make a generalinfo component
  make a education component
  make a experience component

Make a edit style component
  make a edit layout component
  make a edit color component
  make a edit font component

Make a cv component


put them all in app.js

put app.js into main.js
*/
