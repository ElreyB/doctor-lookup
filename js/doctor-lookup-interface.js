import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  const doctorsResult = new DoctorLookup();

  $(".all").click(function(){
    doctorsResult.getDoctors();
  });

  $("form#issue-form").submit(function(e){
    e.preventDefault();
    const userIssueInput = $("input#issue").val();
    doctorsResult.getByIssue(userIssueInput);
  });

  $("form#name-form").submit(function(e){
    e.preventDefault();
    const userDoctorNameInput = $("input#name").val();
    doctorsResult.getByName(userDoctorNameInput);
  });
});
