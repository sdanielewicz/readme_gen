// const fs = require('fs');
const lic = {
   "Apache License 2.0": [
      "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      "https://opensource.org/licenses/Apache-2.0"],
  "GNU General Public License": ["Hello","Goodbye"],
  "MIT License": ["Hello","Goodbye"],
  "BSD 2-Clause \"Simplified\"": ["Hello","Goodbye"],
  "BSD 3-Clause \"New\" or \"Revised\" License Boost Software License 1.0": ["Hello","Goodbye"],
  "Creative Commons Zero v1.0 Universal": ["Hello","Goodbye"],
  "Eclipse Public License 2.0": ["Hello","Goodbye"],
  "GNU Affero General Public License v3.0": ["Hello","Goodbye"],
  "GNU General Public License v2.0": ["Hello","Goodbye"],
  "GNU Lesser General Public License v2.1": ["Hello","Goodbye"],
  "Mozilla Public License 2.0": ["Hello","Goodbye"],
  "The Unlicense": ["Hello","Goodbye"],
   
}

// function readLic (){
// fs.readFile('./lic.json', 'utf8', function(err, data){
//     const obj = JSON.parse(data)  
//    // Display the file content
//    // console.log(obj["Apache License 2.0"]);
//    return obj;
// });

 
// console.log('readFile called');
// }

// const read =   fs.readFile('./lic.json', 'utf8', function(err, data){
//       if(err){
//          throw err;
//       }
//       const file = JSON.parse(data);

//       return file;
//    });


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
   
   
   
   var licBadge =" ";

  


   for (var entry in lic) {
      if (entry === license){
         console.log("MATCH!!!!!!!"+entry+license)
         console.log(lic[entry][0])
         // console.log(lic[entry][1])
         licBadge = lic[entry][0];
         console.log("THISSSSS"+licBadge);
      }
    
   }
         return licBadge;

}


   
   
   
// });

// return licBadge;



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
   var licLink =" ";

  


   for (var entry in lic) {
      if (entry === license){
        
         console.log(lic[entry][1])
         licLink = lic[entry][1];
         console.log("THISSSSS"+licLink);
      }
    
   }
         return licLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
   // THEN a badge for that license is added near the top of the README and a notice is added to 
   // the section of the README entitled License that explains which license the application is covered under
}

// TODO: Create a function to generate markdown for README
function generateMD ({title, description, install, usage, test, contribute, license}){
const renderedBadge = renderLicenseBadge(license);
const renderedLink = renderLicenseLink(license);


   
const md = `# Title: ${title} 
   # Lic: [![License](${renderedBadge})](${renderedLink})
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
   

   END`;
return md;
}

module.exports = {generateMD};


// const generateMD = ({title, description, install, usage, test, contribute, license}) => 
// 