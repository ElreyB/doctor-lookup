import { apiKey } from "./../.env";
import { lineCreator, error, createOptions } from "./../js/helpers.js";

export class DoctorLookup {
  getDoctors() {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013, -122.335167,100&skip=0&limit=100&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByIssue = response.data;
        lineCreator(doctorsByIssue);
      })
      .fail(error);
  }

  getByIssue(issue) {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=47.608013, -122.335167,100&skip=0&limit=100&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByIssue = response.data;
        if (typeof doctorsByIssue[0] !== "undefined") {
          lineCreator(doctorsByIssue);
        } else {
          $("#doctor-results").append(
            `<li><span class="line-header">Sorry! Currently there are no doctors in the area that specializes in that issue. Please, try a different entry 😷 😷 😷.</span></li><br>`
          );
        }
      })
      .fail(error);
  }

  getByName(name) {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=47.608013%2C%20-122.335167%2C100&skip=0&limit=40&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByName = response.data;
        if (typeof doctorsByName[0] !== "undefined") {
          lineCreator(doctorsByName);
        } else {
          $("#doctor-results").append(
            `<li><span class="line-header">Sorry! Currently there are no doctors in the area by that name. Please, try a different entry 👨‍⚕️ 👩‍⚕️.</span></li><br>`
          );
        }
      })
      .fail(error);
  }
  getConditions() {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/conditions?fields=name&user_key=3df2d26e3fe30c15f597ce18fedf4144`
    )
      .then(function(response) {
        const conditionsByName = response.data;
        createOptions(conditionsByName);
      })
      .fail(error);
  }
}
