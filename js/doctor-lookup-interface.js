import { DoctorLookup } from './../js/doctor-lookup.js';

$(document).ready(function(){
  const doctorsResult = new DoctorLookup();

  $(".btn").click(function(){
    doctorsResult.getDoctors();
  })
});
