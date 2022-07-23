var replace = require('replace-in-file');
var fs      = require('fs');
var apiUrl  = process.env.AWS_SKILLS_MAPPING_API_URL

var prod_file_template = 'src/environments/environment.prod.ts.template'
var prod_file          = 'src/environments/environment.prod.ts'
var dev_file_template  = 'src/environments/environment.ts.template'
var dev_file           = 'src/environments/environment.ts'
fs.copyFile( prod_file_template, prod_file, (err) => {if (err) console.log("Error Found:", err);})
fs.copyFile( dev_file_template,  dev_file, (err) => {if (err) console.log("Error Found:", err);})

const prod_options = {
  files: 'src/environments/environment.prod.ts',
  from: /{AWS_SKILLS_MAPPING_API_URL}/g,
  to: apiUrl,
  allowEmptyPaths: false,
};

const dev_options = {
  files: 'src/environments/environment.ts',
  from: /{AWS_SKILLS_MAPPING_API_URL}/g,
  to: apiUrl,
  allowEmptyPaths: false,
};

try {
  console.log("");
  console.log("Environment Variables Set");
  console.log("-------------------------")
  console.log('API URL: ' + apiUrl);
  console.log("");
  let changedProdFiles = replace.sync(prod_options);
  let changedDevFiles = replace.sync(dev_options);
} catch (error) {
  console.error('Error occurred:', error);
}