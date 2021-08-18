

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
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br/>
  
  
  # Description
  
   ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Questions](#questions)

  # Installation
  ${data.installation}
 
  # Usage
  ${data.usage}
  
  # Contributors
  ${data.contributors}
  
  # Test
  ${data.test}
  
  # License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br/>
  This application is covered by the ${data.license} license. 

  ## Questions:
  Visit my GitHub page: <a href="https://github.com/${data.username}"></a>
  <br/>
  Or, fire one off: <a href="mailto:${data.email}">${data.email}</a><br>
 `;

}

module.exports = generateMarkdown;

