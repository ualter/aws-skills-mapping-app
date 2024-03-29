# :wrench: AWS Skills Mapping Application

A simple Angular application used by [aws-skills-mapping-iac](https://github.com/ualter/aws-skills-mapping-iac) (*an [AWS-CDK](https://aws.amazon.com/es/cdk/) Python [IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) Blueprint Solution*), as a sample application to build and prepare its required infrastructure (environment) and its CI/CD Pipeline, all on AWS using AWS-CDK (Python).

---

## :running: **Running in Development Mode**

To run/test this application in your local environment using mock data.

### :pencil2: **Requirements**

- nodejs
- npx ( `npm i npx` )
- Angular Client ( `npm install @angular/cli -g` )
  - Run the command "`ng version`", to complete the installation in case appears the question:
    "`Would you like to share pseudonymous usage data about this project... blahn, blah (y/N) ?`

---

### :pushpin: **Steps**

#### :one: **Install dependencies**
```bash
npm install
```

#### :two: **Set DEV environment variables**
```bash
export AWS_SKILLS_MAPPING_API_URL=http://localhost:8080/app/
export AWS_SKILLS_MAPPING_STAGE=DEV
```

#### :three: **Run application**
```bash
npm run start:dev
```
