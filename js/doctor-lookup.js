export class DoctorLookup {
  constructor(){
  }

  getDoctors(){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013, -122.335167,100&skip=0&limit=100&user_key=3df2d26e3fe30c15f597ce18fedf4144`)
    .then(function(response){
      const doctors = response.data;
      doctors.forEach(function(doctor){
        $("#doctor-results").append(
          `<li class="well col-sm-6 col-md-4">
            <img src=${doctor.profile.image_url} alt="Doctor's photo">
              <p>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name},${doctor.profile.title}</p>
              <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0].visit_address.city},${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</p>
              <p>${DoctorLookup.phoneNumberConverter(doctor.practices[0].phones[0].number)}</p>
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
