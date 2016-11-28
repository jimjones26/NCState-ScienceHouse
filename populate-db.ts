import { database, initializeApp } from 'firebase';
import { firebaseConfig } from './src/environments/firebase.config';
import { dbData } from './db-data';

initializeApp(firebaseConfig);

const officesReference = database().ref('offices');
const countiesReference = database().ref('counties');
const districtsReference = database().ref('districts');
const schoolsReference = database().ref('schools');
const rolesReference = database().ref('roles');

dbData.offices.forEach(office => {
  // push offices
  console.log('Adding office', office.name);
  officesReference.push({
    name: office.name,
    url: office.url,
    street: office.street,
    city: office.city,
    state: office.state,
    zip: office.zip,
    phone: office.phone,
    fax: office.fax
  }).then((officeSnapshot) => {

    office.counties.forEach(county => {

      // push counties
      console.log('-- Adding county ' + county.name + ' to ' + office.name);

      countiesReference.push({
        name: county.name,
        officeId: officeSnapshot.key
      }).then((countySnapshot) => {

        // create association node
        let countyKeysPerOffice = [];

        countyKeysPerOffice.push(countySnapshot.key);

        const association = database().ref('countiesPerOffice');
        const countiesPerOffice = association.child(officeSnapshot.key);

        countyKeysPerOffice.forEach(countyKey => {
          console.log('adding county to office');
          const countyOfficeAssociation = countiesPerOffice.child(countyKey);
          countyOfficeAssociation.set(true);
        });
        // end create association node

        county.districts.forEach(district => {

          // push districts
          console.log('---- Adding district ' + district.name + ' to ' + county.name);

          districtsReference.push({
            name: district.name,
            countyId: countySnapshot.key
          }).then((districtSnapshot) => {

            // create association node
            let districtKeysPerCounty = [];

            districtKeysPerCounty.push(districtSnapshot.key);

            const association2 = database().ref('districtsPerCounty');
            const districtsPerCounty = association2.child(countySnapshot.key);

            districtKeysPerCounty.forEach(districtKey => {
              console.log('---- adding district to county');
              const districtCountyAssociation = districtsPerCounty.child(districtKey);
              districtCountyAssociation.set(true);
            });
            // end create association node

            district.schools.forEach(school => {
              // push schools
              console.log('---------- Adding school ' + school.name + ' to ' + district.name);

              schoolsReference.push({
                name: school.name,
                street: school.street,
                city: school.city,
                state: school.state,
                zip: school.zip,
                phone: school.phone,
                fax: school.fax,
                districtId: districtSnapshot.key
              }).then((schoolSnapshot) => {

                // create district association node
                let schoolKeysPerDistrict = [];

                schoolKeysPerDistrict.push(schoolSnapshot.key);

                const association3 = database().ref('schoolsPerDistrict');
                const schoolsPerDistrict = association3.child(districtSnapshot.key);
                const association4 = database().ref('schoolsPerOffice');
                const schoolsPerOffice = association4.child(officeSnapshot.key);

                schoolKeysPerDistrict.forEach(schoolKey => {
                  const schoolDistrictAssociation = schoolsPerDistrict.child(schoolKey);
                  schoolDistrictAssociation.set(true);

                  console.log('--------------- adding', school.name + ' to ' + office.name);
                  const schoolOfficeAssociation = schoolsPerOffice.child(schoolKey);
                  schoolOfficeAssociation.set(true);
                });
                // end district create association node
              });
            });
          });
        });
      });
    });
  });
});

dbData.roles.forEach(role => {
  // push roles
  console.log('Adding Role ', role.name);
  rolesReference.push({
    name: role.name
  });

});
