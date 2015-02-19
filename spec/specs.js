describe("Patient", function() {
  describe("herpesRisk", function() {
    it("calculates the risk of a patient getting herpes", function() {
      var testPatient = Object.create(Patient);
      testPatient.sexPartners = 30;
      expect(testPatient.herpesRisk()).to.equal(1);

    });
  });

});
