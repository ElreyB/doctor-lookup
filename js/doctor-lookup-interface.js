import { DoctorLookup } from "./../js/doctor-lookup.js";
function clearResults() {
  $("ul#doctor-results").empty();
}

function hideHeaders() {
  $(".main-header, .area-header, .issue-header, .name-header").addClass("hide");
}

$(document).ready(function() {
  const doctorsResult = new DoctorLookup();

  doctorsResult.getConditions();
  setTimeout(() => {
    doctorsResult.getSpecialties();
  }, 1000);

  $(".area-header, .issue-header, .name-header").addClass("hide");

  $(document).ajaxStart(function() {
    $("#wait").css("display", "block");
    $(".col-md-9").show();
  });
  $(document).ajaxComplete(function() {
    $("#wait").css("display", "none");
    $(".results-container").show();
  });

  $(".all").click(function() {
    clearResults();
    hideHeaders();
    $(".area-header").removeClass("hide");
    doctorsResult.getDoctors();
  });

  $("form#issue-form").submit(function(e) {
    e.preventDefault();
    clearResults();
    hideHeaders();
    $(".issue-header").removeClass("hide");
    const userIssueInput = $("select#issue-options").val();
    $("#issue").text(userIssueInput);
    doctorsResult.getByIssue(userIssueInput);
  });

  $("form#name-form").submit(function(e) {
    e.preventDefault();
    clearResults();
    hideHeaders();
    $(".name-header").removeClass("hide");
    const userDoctorNameInput = $("input#name").val();
    doctorsResult.getByName(userDoctorNameInput);
  });

  $("form#specialties-form").submit(function(e) {
    e.preventDefault();
    clearResults();
    hideHeaders();
    $(".name-header").removeClass("hide");
    const userSpecialtyListInput = $(
      "input:checkbox[name=specialty-list]:checked"
    ).val();
    doctorsResult.getBySpecialty(userSpecialtyListInput);
  });

  $("button.return-home").click(function() {
    window.location.reload(false);
  });
});
