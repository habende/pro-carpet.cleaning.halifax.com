function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Change 'Sheet1' to the name of your sheet
    var row = [
        e.parameter.name,
        e.parameter.email,
        e.parameter.phone,
        e.parameter.date,
        e.parameter.message,
        new Date()
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}


function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Ensure 'Sheet1' matches the name of your sheet
    var row = [
        e.parameter.name,
        e.parameter.email,
        e.parameter.phone,
        e.parameter.date,
        e.parameter.message,
        new Date()  // Adds a timestamp
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1'); // Ensure 'Sheet1' matches the name of your sheet
    var row = [
        e.parameter.name,
        e.parameter.email,
        e.parameter.phone,
        e.parameter.date,
        e.parameter.message,
        new Date()  // Adds a timestamp
    ];
    sheet.appendRow(row);
    return ContentService.createTextOutput('Success').setMimeType(ContentService.MimeType.TEXT);
}

