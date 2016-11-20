import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

initializeApp(firebaseConfig);

const officesRef = database().ref('offices');
const countiesRef = database().ref('counties');
const districtsRef = database().ref('districts');
const schoolsRef = database().ref('schools');

dbData.offices.forEach(office => {

  // push offices
  console.log('adding office', office.name);
  const officeRef = officesRef.push({
    name: office.name,
    url: office.url,
    street: office.street,
    city: office.city,
    state: office.state,
    zip: office.zip,
    phone: office.phone,
    fax: office.fax
  });

  // push counties listed under each office
  let countyKeysPerOffice = [];

  office.counties.forEach(county => {

    console.log('adding county ', county.name);
    countyKeysPerOffice.push(countiesRef.push({
      name: county.name,
      officeId: officeRef.key
    }).key);

    // push districts listed under each county
    let districtKeysPerCounty = [];

    county.districts.forEach(district => {
      console.log('addin district ', district.name);
      districtKeysPerCounty.push(districtsRef.push({
        name: district.name
      }).key);
    });

  });

  const association = database().ref('countiesPerOffice');
  const countiesPerOffice = association.child(officeRef.key);

  countyKeysPerOffice.forEach(countyKey => {

    console.log('adding county to office ');
    const countyOfficeAssociation = countiesPerOffice.child(countyKey);
    countyOfficeAssociation.set(true);
  });

});
