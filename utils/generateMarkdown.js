const lic = {
   "Apache License 2.0": ["https://img.shields.io/badge/License-Apache_2.0-blue.svg", "https://opensource.org/licenses/Apache-2.0"],
   "GNU General Public License": ["https://img.shields.io/badge/License-GPLv3-blue.svg", "https://www.gnu.org/licenses/gpl-3.0"],
   "MIT License": ["https://img.shields.io/badge/License-MIT-yellow.svg", "https://opensource.org/licenses/MIT"],
   "BSD 2-Clause \"Simplified\"": ["https://img.shields.io/badge/License-BSD_2--Clause-orange.svg", "https://opensource.org/licenses/BSD-2-Clause"],
   "BSD 3-Clause \"New\" or \"Revised\" License": ["https://img.shields.io/badge/License-BSD_3--Clause-blue.svg", "https://opensource.org/licenses/BSD-3-Clause"],
   "Boost Software License 1.0": ["https://img.shields.io/badge/License-Boost_1.0-lightblue.svg", "https://www.boost.org/LICENSE_1_0.txt"],
   "Creative Commons Zero v1.0 Universal": ["https://licensebuttons.net/l/zero/1.0/80x15.png", "http://creativecommons.org/publicdomain/zero/1.0/"],
   "Eclipse Public License 2.0": ["https://img.shields.io/badge/License-EPL_1.0-red.svg", "https://opensource.org/licenses/EPL-1.0"],
   "GNU Affero General Public License v3.0": ["https://img.shields.io/badge/License-AGPL_v3-blue.svg", "https://www.gnu.org/licenses/agpl-3.0"],
   "GNU General Public License v2.0": ["https://img.shields.io/badge/License-GPL_v2-blue.svg", "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"],
   "GNU Lesser General Public License v2.1": ["https://img.shields.io/badge/License-LGPL_v3-blue.svg", "https://www.gnu.org/licenses/lgpl-3.0"],
   "Mozilla Public License 2.0": ["https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg", "https://opensource.org/licenses/MPL-2.0"],
   "The Unlicense": ["https://img.shields.io/badge/license-Unlicense-blue.svg", "http://unlicense.org/"],  
}

function renderLicenseBadge (license) { 
   var licBadge;

   for (var entry in lic) {
      if (entry === license){
         licBadge = lic[entry][0];
      }    
   }
   return (license ? licBadge : "");   
}

function renderLicenseLink(license) {
   var licLink;

   for (var entry in lic) {
      if (entry === license){
         licLink = lic[entry][1];
      }   
   }
   return (license ? licLink : "");   
}

function generateMD ({title, description, install, usage, test, contribute, github, email, license}){
   const renderedBadge = renderLicenseBadge(license);
   const renderedLink = renderLicenseLink(license);
   let githubConcat = ("https://github.com/" + github);

   const md = `#${title} [![License](${renderedBadge})](${renderedLink})
   ## Table of Contents:
   * [Description](#description)
   * [Install](#install)
   * [Usage](#usage)
   * [Test](#test)
   * [Contribute](#contribute)
   ## Description: 
   ${description}
   ## Install: 
   ${install}
   ## Usage: 
   ${usage}
   ## Test: 
   ${test}
   ## Contribute: 
   ${contribute}
   ## License Info:
   This project is covered under the ${license} license. Click [here](${renderedLink}) for info.
   ## Questions:
   * Github: [${githubConcat}](${githubConcat})
   * Email: [${email}](mailto:${email})
   `;
return md;
}

module.exports = {generateMD};