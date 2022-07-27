var replace = require('replace-in-file');
var fs      = require('fs');

var apiUrl  = process.env.AWS_SKILLS_MAPPING_API_URL
var stage   = process.env.AWS_SKILLS_MAPPING_STAGE

var template              = 'src/environments/environment.ts.template'
var prod_file             = 'src/environments/environment.prod.ts'
var preprod_file          = 'src/environments/environment.preprod.ts'
var dev_file              = 'src/environments/environment.ts'
fs.copyFile( template, prod_file, (err) => {if (err) console.log("Error Found:", err);})
fs.copyFile( template, preprod_file, (err) => {if (err) console.log("Error Found:", err);})
fs.copyFile( template, dev_file, (err) => {if (err) console.log("Error Found:", err);})

try {
  console.log("");
  console.log("Environment Variables Set");
  console.log("-------------------------")
  console.log('Stage.....: ' + stage)
  console.log('API URL...: ' + apiUrl);
  console.log("");

  // API URL
  const prod_api_options = {
    files: 'src/environments/environment.prod.ts',
    from: /{AWS_SKILLS_MAPPING_API_URL}/g,
    to: apiUrl,
    allowEmptyPaths: false,
  };
  
  const preprod_api_options = {
    files: 'src/environments/environment.preprod.ts',
    from: /{AWS_SKILLS_MAPPING_API_URL}/g,
    to: apiUrl,
    allowEmptyPaths: false,
  };
  
  const dev_api_options = {
    files: 'src/environments/environment.ts',
    from: /{AWS_SKILLS_MAPPING_API_URL}/g,
    to: apiUrl,
    allowEmptyPaths: false,
  };
  replace.sync(prod_api_options);
  replace.sync(preprod_api_options);
  replace.sync(dev_api_options);

  // STAGE
  let stage_options = {
    files: 'src/environments/environment.prod.ts',
    from: [/production: {BOOL}/g, /preprod: {BOOL}/g, /dev: {BOOL}/g],
    allowEmptyPaths: false,
  };

  let prod_stage_options = stage_options
  let preprod_stage_options = stage_options
  let dev_stage_options = stage_options

  if (stage.toUpperCase() == "DEV") {
    dev_stage_options.files = 'src/environments/environment.ts'
    dev_stage_options.to = ['production: false', 'preprod: false', 'dev: true']
  } else if (stage.toUpperCase() == "PREPROD") {
    preprod_stage_options.files = 'src/environments/environment.preprod.ts'
    preprod_stage_options.to = ['production: false', 'preprod: true', 'dev: false']
  } else if (stage.toUpperCase() == "PROD") {
    prod_stage_options.files = 'src/environments/environment.prod.ts'
    prod_stage_options.to = ['production: true', 'preprod: false', 'dev: false']
  }
  replace.sync(prod_stage_options);
  replace.sync(preprod_stage_options);
  replace.sync(dev_stage_options);

} catch (error) {
  console.error('Error occurred:', error);
}