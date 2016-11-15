import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

initializeApp(firebaseConfig);

const officesRef = database().ref('offices');
const countiesRef = database().ref('counties');

dbData.offices.forEach(office => {

  console.log('adding office', office.name);
  const officeRef = officesRef.push({
    name: office.name,
    url: office.url,
    street: office.street,
    ciy: office.city,
    state: office.state,
    zip: office.zip,
    phone: office.phone,
    fax: office.fax
  });

  let countyKeysPerOffice = [];

  office.counties.forEach((county: any) => {

    console.log('adding county ', county.name);
    countyKeysPerOffice.push(countiesRef.push({
      name: county.name,
      countyId: officeRef.key
    }).key);

  });


  const association = database().ref('countiesPerOffice');
  const countiesPerOffice = association.child(officeRef.key);

  countyKeysPerOffice.forEach(countyKey => {

    console.log('adding county to office ');
    const countyOfficeAssociation = countiesPerOffice.child(countyKey);
    countyOfficeAssociation.set(true);
  });

});
