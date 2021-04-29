// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseType;

  switch (license) {
    case 'MIT':
      licenseType = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'ISC':
      licenseType = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Apache License 2.0':
      licenseType = '[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'none':
      licenseType = '';
      break;
  }
  return licenseType;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink;

  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'ISC':
      licenseLink = 'https://opensource.org/licenses/ISC';
      break;
    case 'Apache':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'none':
      licenseLink = '';
      break;
    
  }
  return licenseLink;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  return `
  # Project Name:
  ${data.projectName}

  ## License
  ${licenseBadge} - [View License](${licenseLink})

  ## Table of Contents
- [Title](#Project-Name)
- [License](#License)
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Tests](#Tests)
- [Questions](#Questions)

  ## Description
  ${data.description}

  ## Installation 
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Tests
  ${data.test}

  ## Questions
  For any questions or suggestions please contact at ${data.email} or visit [https://github.com/${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
