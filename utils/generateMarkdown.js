// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.license)} 

 ## Description
  ${data.description}
  
  ## Table of Contents (Optional)
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installations
  Installations required include:
 ${data.installation}

  
  ## Usage
  
 ${data.usage}
      
  
  ## Contributors
  
  ${data.contributors}
  
  
 ## License

 ${renderLicenseSection(data.license)}
  
  ## Tests
  To test this program please do the following:
${data.tests}
  
## Questions
    If you have any additional questions feel free to contact me!
  <ul>
       <li> <a href='mailto://${data.email}?subject="contact me&body"="hi" '> Email Me </a> </li>
        <li> <a href='https://github.com/${data.username}'> My Github Profile </a> </li>
    </ul>
`;
}

module.exports = generateMarkdown;
