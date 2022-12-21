const { faker } = require("@faker-js/faker");
const express= require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const userObject = () => {
  const newFake = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    phoneNumber: faker.phone.number("059-###-###"),
    id: faker.datatype.uuid(),
  };
  return newFake;
};

const companyObject=()=>{
    const newCompany = {
      id: faker.datatype.uuid(),
      name: faker.company.name(),
      address: {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      },
    };
    return newCompany;
}

const users = [];
const companies = [];



// new api user
app.post("/api/users/new", (req, res) => {
    users.push(userObject());
    res.json({message: "OK"});
});

app.get("/api/users", (req, res) => {
    res.json(users);
});


// new api company 
app.post("/api/companies/new", (req, res) => {
  companies.push(companyObject());
  res.json({ message: "OK" });
});

app.get("/api/companies", (req, res) => {
  res.json(companies);
});
// mex user and company
app.post("/api/user/company", (req, res) => {
  users.push(userObject());
  companies.push(companyObject());
  res.json({ message: "OK" });
});

app.get("/api/companies", (req, res) => {
  res.json(companies);
});


app.listen(8000, () => console.log('Listening on port: 8000'));