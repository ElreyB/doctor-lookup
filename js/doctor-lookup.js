export class DoctorLookup {
  constructor(){
  }

  getDoctors(){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013, -122.335167,100&skip=0&limit=100&user_key=3df2d26e3fe30c15f597ce18fedf4144`)
    .then(function(response){
      const doctors = response.data;
      doctors.forEach(function(doctor){
        $("#doctor-results").append(
          `<li class="well col-sm-4 col-md-4">
            <img src=${doctor.profile.image_url} alt="Doctor's photo">
              <p>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name},${doctor.profile.title}</p>
              <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
              <p>${DoctorLookup.phoneNumberConverter(doctor.practices[0].phones[0].number)}</p>
              <div class="web-container">
                <p>Accepting New Patients: ${DoctorLookup.booleanConverter(doctor.practices[0].accepts_new_patients)}</p>
                <a href=${doctor.practices[0].website}><button type="button" class="btn btn-primary">Visit Doctor's Website</button></a>
              </div>
          </li>`)
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }

  getByIssue(issue){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.608013, -122.335167,100&skip=0&limit=100&user_key=3df2d26e3fe30c15f597ce18fedf4144`)
    .then(function(response){
      const doctors = response.data;
      doctors.forEach(function(doctor){
        $("#doctor-results").append(
          `<li class="well col-sm-4 col-md-4">
            <img src=${doctor.profile.image_url} alt="Doctor's photo">
              <p>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name},${doctor.profile.title}</p>
              <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
              <p>${DoctorLookup.phoneNumberConverter(doctor.practices[0].phones[0].number)}</p>
              <div class="web-container">
                <p>Accepting New Patients: ${DoctorLookup.booleanConverter(doctor.practices[0].accepts_new_patients)}</p>
                <a href=${doctor.practices[0].website}><button type="button" class="btn btn-primary">Visit Doctor's Website</button></a>
              </div>
          </li>`)
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }

  static booleanConverter(booleanResponse){
    return booleanResponse ? "Yes" : "No";
  }

  static phoneNumberConverter(phoneNumber){
    let convertedNumber;
    let numbers = phoneNumber.split("");
    numbers.splice(3,0,"-");
    numbers.splice(7,0,"-");
    convertedNumber = numbers.join("");
    return convertedNumber;
  }
}
