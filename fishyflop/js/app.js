function testerSubmit() {
    //create blank json object
    var testerJSON = {}
        //add values
    testerJSON.testerName = $('#testerName').val();
    testerJSON.testerEmail = $('#testerEmail').val();

    //confirm in console
    console.log(testerJSON);

    //send object with AJAX to correct spreadsheet scripts
    jQuery.ajax({
            url: "https://script.google.com/macros/s/AKfycbwsIkz5sSiL_DW1cEGDX2rP1BEFwX2oFqJmWwp0DUuxTow7E-o/exec",
            type: 'POST',
            dataType: 'json',
            data: testerJSON
        })
        .done(function (data) {
            alert("Thanks! We will be in touch soon.");
        })
        .fail(function () {
            alert("Error! please try again.");
        });
}

function contactSubmit() {
    //create blank json object
    var contactJSON = {}
        //add values
    contactJSON.contactName = $('#contactName').val();
    contactJSON.contactEmail = $('#contactEmail').val();
    contactJSON.contactMessage = $('#contactMessage').val();

    //confirm in console
    console.log(contactJSON);

    //send object with AJAX
    jQuery.ajax({
            url: "https://script.google.com/a/macros/derey.es/s/AKfycbz5iDblxeLDJicedZSArPnbd1TQkZQcscd5NEQ_3veCm8mhNOQ/exec",
            type: 'POST',
            dataType: 'json',
            data: contactJSON
        })
        .done(function (data) {
            alert("Thanks! We will be in touch soon.");
        })
        .fail(function () {
            alert("Error! please try again.");
        });
}