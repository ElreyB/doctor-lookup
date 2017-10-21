import { apiKey } from "./../.env";
import { lineCreater } from "./../helper.js";

export class DoctorLookup {
  constructor(options = {}) {
    this.name = options.name;
    this.issue = options.issue
  }

  setName(nameToSet){
    this.name = { name: nameToSet };
  }

  setIssue(issueToSet){
    this.issue = { issue: issueToSet };
  }

  getDoctors() {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?location=47.608013, -122.335167,100&skip=0&limit=100&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByIssue = response.data;
        lineCreater(doctorsByIssue);
      })
      .errorsHelper(errors);
  }

  getByIssue() {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?query=${this.issue}&location=47.608013, -122.335167,100&skip=0&limit=100&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByIssue = response.data;
        if (typeof doctorsByIssue[0] !== "undefined") {
          lineCreater(doctorsByIssue);
        } else {
          $("#doctor-results").append(
            `<li><span class="line-header">Sorry! Currently there are no doctors in the area that specializes in that issue. Please, try a different entry 😷 😷 😷.</span></li><br>`
          );
        }
      })
      .errorsHelper(errors);
      });
  }

  getByName() {
    $.get(
      `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&location=47.608013%2C%20-122.335167%2C100&skip=0&limit=40&user_key=${apiKey}`
    )
      .then(function(response) {
        const doctorsByName = response.data;
        if (typeof doctorsByName[0] !== "undefined") {
          lineCreater(doctorsByName);
        } else {
          $("#doctor-results").append(
            `<li><span class="line-header">Sorry! Currently there are no doctors in the area by that name. Please, try a different entry 👨‍⚕️ 👩‍⚕️.</span></li><br>`
          );
        }
      })
      .errorsHelper(errors);
  }

  static booleanConverter(booleanResponse) {
    return booleanResponse ? "Yes" : "No";
  }

  static phoneNumberConverter(phoneNumber) {
    let convertedNumber;
    let numbers = phoneNumber.split("");
    numbers.splice(3, 0, "-");
    numbers.splice(7, 0, "-");
    convertedNumber = numbers.join("");
    return convertedNumber;
  }
}
