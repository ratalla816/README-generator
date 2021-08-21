

// If there is no license, return an empty string
// ${data.description} //
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {

 //   return `# ${data.title}
  return `# ${data.title}

  ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br/> 
  
  ## Description
  
   ${data.description}
 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Screenshot](#screenshot)
  - [Features](#features)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [Testing](#testing)
  - [Contact](#contact)

  ## Installation
  ${data.installation}
 
  ## Usage
  ${data.usage}

  ## Screenshot
  ![Screenshot](${data.screenshot})

  ## Features
  ${data.features}
  
  # Acknowledgements
  ${data.acknowledgements}
    
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-informational)
  <br/>
  Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>


  ## Testing
  ${data.testing}

  ## Contact:
  Holler at me! <a href="mailto:${data.email}">${data.email}</a><br>
 `;

}

module.exports = generateMarkdown;


