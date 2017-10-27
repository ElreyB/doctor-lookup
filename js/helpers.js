export function lineCreator(doctors) {
  doctors.forEach(function(doctor) {
    $("#doctor-results").append(
      `<li class="well col-sm-8">
      <div class="row">
        <div class="col-md-6 doctor-info">
          <img class="doctor-image" src=${checkImage(doctor.profile.image_url)} alt="Doctor's photo">
          <a href=${doctor.practices[0].website}>
          <h4 class="doctor-name">Dr. ${doctor.profile.first_name} ${doctor.profile
            .last_name},${doctor.profile.title}</h4>
            </a>
        </div>
        <div class="col-md-6 doctor-info">
            <p>${doctor.practices[0].name}</p>
            <p>${doctor.practices[0].visit_address.street}</p> <p>${doctor.practices[0]
              .visit_address.city},${doctor.practices[0].visit_address.state} ${doctor
                .practices[0].visit_address.zip}</p>
                <p>${phoneNumberConverter(doctor.practices[0].phones[0].number)}</p>
                <div class="web-container">
                <p>Accepting New Patients: ${booleanConverter(
                  doctor.practices[0].accepts_new_patients
                )}</p>
                </div>
        </div>
      </div>
      </li>`
    );
  });
}

export function createOptions(conditions) {
  conditions.forEach(function(condition) {
    $("#issue-options").append(`<option>${condition.name}</option>`);
  });
}

function checkImage(imageUrl) {
  const subImage = "images/no-headshot.jpg";
  return imageUrl.match(/.png/i) ? subImage : imageUrl;
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

// function websiteFitter(website) {
//   let
//   return website === 'undefined' ?
// }
