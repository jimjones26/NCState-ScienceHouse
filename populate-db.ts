import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

initializeApp(firebaseConfig);






// for each parent node
// 1. create a reference var to the spot in firebase I want the data pushed to
// 2. create an object that maps data from my data file to nodes in the db
// 3. take that object and push to database through firebase node reference variable
// 4. on each push, save the firebase key that was created, which will be used in association node




const officesReference = database().ref('offices');
const countiesReference = database().ref('counties');
const districtsReference = database().ref('districts');
const schoolsReference = database().ref('schools');


dbData.offices.forEach(office => {
  // push offices
  officesReference.push({
    name: office.name
  })
    .then((snap) => {
      office.counties.forEach(county => {
        // push counties
        countiesReference.push({
          name: county.name,
          officeId: snap.key
        })
          .then((snap2) => {
            county.districts.forEach(district => {
              // push districts
              districtsReference.push({
                name: district.name,
                countyId: snap2.key
              })
                .then((snap3) => {
                  district.schools.forEach(school => {
                    // push schools
                    schoolsReference.push({
                      name: school.name,
                      districtId: snap3.key
                    });
                  });
                });
            });
          });
      });
    });
});






/*dbData.offices.forEach(office => {

  // push offices
  console.log('adding office', office.name);
  const officeRef = officesRef.push({
    name: office.name, url: office.url, street: office.street,
    city: office.city, state: office.state, zip: office.zip, phone: office.phone, fax: office.fax
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
        name: district.name,
        // countyId:
      }).key);
      console.log('WHAT', countyKeysPerOffice);
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
*/
