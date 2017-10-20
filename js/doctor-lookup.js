export class DoctorLookup {
  constructor(){
  }

  getDoctors(){
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013, -122.335167,100&skip=0&limit=3&user_key=3df2d26e3fe30c15f597ce18fedf4144`)
    .then(function(response){
      const doctors = response.data;
      doctors.forEach(function(doctor){
        $("#doctor-results").append(`<li>${doctor.profile.first_name} ${doctor.profile.last_name}</li>`)
      });
    }).fail(function(error){
      $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  }
}
