export function lineCreator(doctors) {
  doctors.forEach(function(doctor) {
    $("#doctor-results").append(
      `<li class="well col-sm-2 col-md-4">
			<center><img src=${doctor.profile.image_url} alt="Doctor's photo"></center>
				<p>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name},${doctor
        .profile.title}</p>
				<p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0]
        .visit_address.city},${doctor.practices[0].visit_address.state} ${doctor
        .practices[0].visit_address.zip}</p>
				<p>${phoneNumberConverter(doctor.practices[0].phones[0].number)}</p>
				<div class="web-container">
				<p>Accepting New Patients: ${booleanConverter(
          doctor.practices[0].accepts_new_patients
        )}</p>
				<a href=${doctor.practices[0]
          .website}><button type="button" class="btn btn-info">Visit Doctor's Website</button></a>
				</div>
      </li>`
    );
  });
}

export function error() {
  $(".errors").text(
    `There was an error processing your request: ${error.responseText}. Please try again.`
  );
}

function booleanConverter(booleanResponse) {
  return booleanResponse ? "Yes" : "No";
}

function phoneNumberConverter(phoneNumber) {
  let convertedNumber;
  let numbers = phoneNumber.split("");
  numbers.splice(3, 0, "-");
  numbers.splice(7, 0, "-");
  convertedNumber = numbers.join("");
  return convertedNumber;
}
