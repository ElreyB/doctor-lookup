import { DoctorLookup } from './../js/doctor-lookup.js';
function clearList(){
  $("ul#doctor-results").empty();
}

function hideheaders(){
  $(".main-header, .area-header, .issue-header, .name-header").addClass("hide");
}
$(document).ready(function(){
  const doctorsResult = new DoctorLookup();

  $(".area-header, .issue-header, .name-header").addClass("hide")

  $(document).ajaxStart(function(){
     $("#wait").css("display", "block");
   });
   $(document).ajaxComplete(function(){
     $("#wait").css("display", "none");
     $(".results-container").show();
   });

  $(".all").click(function(){
    clearList();
    hideheaders();
    $(".area-header").removeClass("hide");
    doctorsResult.getDoctors();
  });

  $("form#issue-form").submit(function(e){
    e.preventDefault();
    clearList();
    hideheaders();
    $(".issue-header").removeClass("hide");
    const userIssueInput = $("input#issue").val();
    doctorsResult.getByIssue(userIssueInput);
  });

  $("form#name-form").submit(function(e){
    e.preventDefault();
    clearList();
    hideheaders();
    $(".name-header").removeClass("hide");
    const userDoctorNameInput = $("input#name").val();
    doctorsResult.getByName(userDoctorNameInput);
  });

  $("button.return-home").click(function(){
     window.location.reload(false);
   });
});
