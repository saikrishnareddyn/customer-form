$(function () {
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
    submitHandler: async function (form, event) {
      event.preventDefault();
      const formData = $("#customer_details").serializeArray();
      console.log(await encodeData(JSON.stringify(formData)));
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

  // (async function() {
  //   const cleartext = 'alert("an useless message")';
  //   const msg = openpgp.message.fromText(cleartext);
  //   const ciphertext = await openpgp.encrypt({
  //     message: msg,
  //     passwords: ["mypassword"],
  //     armor: true
  //   });
  //   // you'd be better saving as a text file though,
  //   // ecnoding and new line characters matter
  //   console.log(ciphertext.data);
  // })()
  // .catch(console.error);

  const encodeData = async (formData) => {
    const msg = openpgp.message.fromText(formData);

    const ciphertext = await openpgp.encrypt({
      message: msg,
      passwords: "ajay",
      armor: true,
    });
    console.log(await deCodeData(ciphertext.data));

    return ciphertext.data;
  };

  $("#decode-custom").click(function () {
    const encodedData = `-----BEGIN PGP MESSAGE-----
    Version: OpenPGP.js v4.3.0
    Comment: https://openpgpjs.org
    
    wy4ECQMICTBDT6zcNvfgT9AO2CmQYp1AE03vdmdg4xXubxWzrwvZc54IrkWV
    soIk0sEYAb3xvoN8i9g9mPT35TvLhCPpbUwrS3/7qpDWt83KjWEZ8nV1B9rL
    ztLirBF8N7Oadkb5QaCIawx6knIPsW5mCxzEP9Rh6YGjO7Oaa7ZMXWckAAfl
    QaFcnrhL3IhWWQNlWPFz/Ef6g7xRDl4Gc4g8Gax3xcanTIQT1bhcyvoo7c1g
    0RYqc7Bgh0WDatCBeR7bllKg+71AKVyjzCMzMjRSW4b6BeY4hMakHtpslKXN
    jYUA9GjmzVXtZJprGhu6eaBJMx8A3TG2OcrXSbk6J6TQLuyhhDZHF/cCTXRV
    SgC9nyLyiL+3lSqtj09Ppz7kyQfAS/Hvt2OmuOQ1egDrLchwMNQBtkMWVtoP
    MHgzzDID6lqfX3Cxx9ArO7xCghQ8nWD1ds5xdvWL8XkFwND3llA2+wScFL87
    xAdssUS2Ukix1i+StGnxjH+pd2TBbLEnNlFq4nXcLKQuF2MErAhVTR/CxJce
    aPw5/LJ1sBXye3qq2B+qadPl2MTqRbWOL8Rdn+PjtwTno4XnI50WM5eYmxM0
    /09Hru3PUWlGC8JQtrZHrHRMkI+mIuBlYLtuNWzfAJf76zgWzDrBsYnDFZ41
    NUaTVs7BmmRr+gFnd6l2p6THy2TYzgivaQWH4A==
    =a0k4
    -----END PGP MESSAGE-----`;
  });

  const deCodeData = async (encodedData) => {
    const decrypted = await openpgp.decrypt({
      message: await openpgp.message.readArmored(encodedData),
      passwords: "ajay",
    });
    const cleartext = decrypted.data;
    console.log(cleartext);
    new Function(cleartext)();
  };
});
