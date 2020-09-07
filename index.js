$(function () {
  openpgp.init();

  $("form[name='customer_details']").validate({
    // Specify validation rules
    rules: {
      prename: "required",
      surname: "required",
      birthday: "required",
      rsteetNr: "required",
      rzipcode: {
        required: true,
        minlength: 5,
      },
      rcity: "required",
      dname: "required",
      dstreetNr: "required",
      dcity: "required",
      dzipcode: {
        required: true,
        minlength: 5,
      },
      praparatName: "required",
      hersteller: "required",
      darreichung: "required",
      wirkstoffmenge: "required",
      packungsgrobe: "required",
      pzn: "required",
    },
    messages: {
      prename: "Please enter prename",
      surname: "Please enter surname",
      birthday: "Please enter birthday",
      rsteetNr: "Please enter steetNr",
      rzipcode: {
        required: "Please enter zipcode",
        minlength: "Pleas enter valid zipcode",
      },
      rcity: "Please enter city",
      dname: "Please enter name",
      dstreetNr: "Please enter street",
      dcity: "Please enter city",
      dzipcode: {
        required: "Please enter zipcode",
        minlength: "Pleas enter valid zipcode",
      },
      praparatName: "Please enter praparatName",
      hersteller: "Please enter hersteller",
      darreichung: "Please enter darreichung",
      wirkstoffmenge: "Please enter wirkstoffmenge",
      packungsgrobe: "Pleas enter packungsgrobe",
      pzn: "Please enter pzn",
    },
    submitHandler: function (form, event) {
      event.preventDefault();
      $("#customer_details").serialize();
      console.log($("#customer_details").serialize());
    },
  });

  $("#isCustomMedicEnabled").change(function (e) {
    const { checked } = e.target;
    if (checked) {
      $("#cmName").attr("disabled", false);
      $("#cmFachgebiet").attr("disabled", false);
      $("#cmAddressline1").attr("disabled", false);
      $("#cmAddressline2").attr("disabled", false);
      $("#cmTel").attr("disabled", false);
      $("#cmFax").attr("disabled", false);
      $("#cmBsnr").attr("disabled", false);
      $("#cmLanr").attr("disabled", false);
    } else {
      $("#cmName").attr("disabled", true);
      $("#cmFachgebiet").attr("disabled", true);
      $("#cmAddressline1").attr("disabled", true);
      $("#cmAddressline2").attr("disabled", true);
      $("#cmTel").attr("disabled", true);
      $("#cmFax").attr("disabled", true);
      $("#cmBsnr").attr("disabled", true);
      $("#cmLanr").attr("disabled", true);
    }
  });

  $("#isDatabaseMedic").change(function (e) {
    const { checked } = e.target;
    if (checked) {
      $("#dmFachgebiet").attr("disabled", false);
      $("#dmLanr").attr("disabled", false);
    } else {
      $("#dmFachgebiet").attr("disabled", true);
      $("#dmLanr").attr("disabled", true);
    }
  });
});
