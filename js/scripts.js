var Patient = {
  name: "",
  sex: "",
  age: 0,
  sexPartners: 0,
  herpesRisk: function() {
    if(((this.sexPartners / 30) * 100) > 100){
      return 100;
    } else {
    return parseInt((this.sexPartners / 30) * 100);
    }
  },
  cigsPerDay: 0,
  yearsSmoking: 0,
  blackLungRisk: function() {
    if ((((this.cigsPerDay / 80) + (this.yearsSmoking / 80)) * 100 ) > 100) {
      return 100;
    } else {
      return parseInt(((this.cigsPerDay / 80) + (this.yearsSmoking / 80)) * 100);
    }
  }
};

$(document).ready(function() {
  $("form#basic-info").submit(function(event) {
    event.preventDefault();

    var newName = $("input#new-name").val();
    var newSex = $("[name=sex]:checked").val();
    var newAge = parseInt($("input#age").val());

    var newPatient = Object.create(Patient);
    newPatient.name = newName;
    newPatient.sex = newSex;
    newPatient.age = newAge;

    $("form#basic-info").hide();

    $(".name").text(newPatient.name);
    $(".sex").text(newPatient.sex);
    $(".age").text(", " + newPatient.age);

    $("form#factor1").show("slow");
    $("form#factor1").submit(function(event) {
      event.preventDefault();

      var newSexPartners = parseInt($("input#sexPartners").val());
      newPatient.sexPartners = newSexPartners;

      $("form#factor1").hide();
      $("form#factor2").show("slow");
      $("form#factor2").submit(function(event) {
        event.preventDefault();
        var newCigsPerDay = parseInt($("input#smoking1").val());
        var newyearsSmoking = parseInt($("input#smoking2").val());
        newPatient.cigsPerDay = newCigsPerDay;
        newPatient.yearsSmoking = newyearsSmoking;

        $("form#factor2").hide();

        $(".statistics").append("<li>Chance of black lung: " + newPatient.blackLungRisk() + "%</li>");
        $(".results").show("slow");
      });

      $(".statistics").append("<li>Chance of herpes: " + newPatient.herpesRisk() + "%</li>");
    });

  });
});
