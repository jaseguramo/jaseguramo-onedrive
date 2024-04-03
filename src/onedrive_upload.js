$(document).ready(function() {
    $("#uploadButton").click(function() {
        var fileInput = document.getElementById('fileInput');
        var file = fileInput.files[0];
        
        if (file) {
            uploadToOneDrive(file);
        } else {
            alert("Please select a file to upload.");
        }
    });
});

function uploadToOneDrive(file) {
    var client_id = 'YOUR_CLIENT_ID'; // Replace with your OneDrive app client ID
    var redirect_uri = 'YOUR_REDIRECT_URI'; // Replace with your redirect URI
    
    var odOptions = {
        clientId: client_id,
        action: 'save',
        sourceInputElementId: 'fileInput',
        sourceUri: null,
        fileName: file.name,
        openInNewWindow: true,
        advanced: {},
        success: function(files) {
            alert("File uploaded successfully!");
        },
        progress: function(percent) {
            console.log(percent + "% uploaded");
        },
        cancel: function() {
            alert("Upload cancelled.");
        },
        error: function(e) {
            console.log(e);
            alert("Error uploading file.");
        }
    };

    OneDrive.save(odOptions);
}
