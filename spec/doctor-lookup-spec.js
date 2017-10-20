import { DoctorLookup } from './../js/doctor-lookup.js';

describe('DoctorLookup', function(){
  let doctorsResult;

  beforeEach(function(){
    doctorsResult = new DoctorLookup();
  });

  it('should return "Yes" when give true as an argument', function(){
    expect(doctorsResult.booleanConverter(true)).toEqual("Yes")
  });

  it('should return "No" when give false as an argument', function(){
    expect(doctorsResult.booleanConverter(false)).toEqual("No")
  });

  it('should return phone number in user friendly form', function(){
    expect(doctorsResult.phoneNumberConverter("1111111111")).toEqual("111-111-1111")
  });
});
