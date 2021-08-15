
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// ${data.description}
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// **** https://img.shields.io/github/license/<Github-Username>/<Repository> **** //
// **** [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/) **** //

const renderBadges = (badges,user,repo) => {
  let badgeArray = [];
  if(!badges) {
    return '';
  }
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  [![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)

  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

  [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
    
  ('![GitHub language count](https://img.shields.io/github/languages/count/')
      
     
     ('![GitHub top language](https://img.shields.io/github/languages/top/')
       
     
     ('![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/')
       
      
     ('![GitHub repo size](https://img.shields.io/github/repo-size/')
      
    
     ('![GitHub issues](https://img.shields.io/github/issues-raw/')
      
     ('![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/')
      
      
     ('![GitHub release (latest by date)](https://img.shields.io/github/v/release/')
     
    }
 
  return badges

`;


module.exports = generateMarkdown;
