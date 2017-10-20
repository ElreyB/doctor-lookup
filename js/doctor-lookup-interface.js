import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  const doctorsResult = new DoctorLookup();

  $(".all").click(function(){
    doctorsResult.getDoctors();
  })

  $("form#issue-form").submit(function(e){
    e.preventDefault();
    const userIsssueInput = $("input#issue").val();
    doctorsResult.getByIssue(userIsssueInput);
  });

  $("form#name-form").submit(function(e){
    e.preventDefault();
    const userDoctorNameInput = $("input#name").val();
    doctorsResult.getByName(userDoctorNameInput);
  });
});
