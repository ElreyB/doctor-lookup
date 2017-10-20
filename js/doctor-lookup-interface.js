import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  const doctorsResult = new DoctorLookup();

  $(".all").click(function(){
    doctorsResult.getDoctors();
  })

  $("form.issue-form").submit(function(e){
    e.preventDefault();
    const userIsssue = $("input#issue").val();
    doctorsResult.getByIssue(userIsssue);
  });
});
