// Image Preview
var imgUpload = document.getElementById('img-upload');
var profileImg = document.getElementById('profile-img');
imgUpload.addEventListener('change', function (event) {
    var _a;
    var target = event.target;
    var file = (_a = target.files) === null || _a === void 0 ? void 0 : _a[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) {
                profileImg.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
});
// Generate Resume
var generateResumeButton = document.getElementById('generate-resume');
var printResumeButton = document.getElementById('print-resume');
var editResumeButton = document.getElementById('edit-resume');
var resumeOutput = document.getElementById('resume-output');
generateResumeButton.addEventListener('click', function () {
    console.log('Generate button clicked');
    var name = document.getElementById('for-name').value.trim();
    var email = document.getElementById('for-email').value.trim();
    var phone = document.getElementById('for-phone').value.trim();
    var genderInput = document.querySelector('input[name="gender"]:checked');
    var gender = genderInput ? genderInput.value : '';
    var education = document.getElementById('for-education').value.trim();
    var experience = document.getElementById('for-experience').value.trim();
    var skills = document.getElementById('for-skills').value.trim();
    var description = document.getElementById('for-description').value.trim();
    // Debugging logs
    console.log({ name: name, email: email, phone: phone, gender: gender, education: education, experience: experience, skills: skills, description: description });
    if (!name || !email || !phone || !gender) {
        alert('Please fill out all required fields.');
        return;
    }
    // Create the resume content
    var resumeContent = "\n        <div>\n            <img src=\"".concat(profileImg.src, "\" alt=\"Profile Image\" style=\"max-width: 150px; border-radius: 50%;\">\n        </div>\n        <h2>").concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Gender:</strong> ").concat(gender, "</p>\n        <h3>Education</h3><p>").concat(education, "</p>\n        <h3>Experience</h3><p>").concat(experience, "</p>\n        <h3>Skills</h3><p>").concat(skills, "</p>\n        <h3>Description</h3><p>").concat(description, "</p>\n    ");
    // Display the resume output
    resumeOutput.innerHTML = resumeContent;
    resumeOutput.style.border = "1px solid #ccc";
    resumeOutput.style.padding = "10px";
    resumeOutput.style.marginTop = "10px";
    // Show edit and print buttons
    generateResumeButton.style.display = 'none';
    printResumeButton.style.display = 'inline-block';
    editResumeButton.style.display = 'inline-block';
});
// Edit Resume
editResumeButton.addEventListener('click', function () {
    resumeOutput.innerHTML = '';
    resumeOutput.style.border = "none";
    generateResumeButton.style.display = 'inline-block';
    printResumeButton.style.display = 'none';
    editResumeButton.style.display = 'none';
});
// Print Resume as PDF
printResumeButton.addEventListener('click', function () {
    var resumeContent = resumeOutput.innerHTML;
    var printWindow = window.open('', '_blank');
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.write("\n        <html>\n            <head><title>Resume</title></head>\n            <body>".concat(resumeContent, "</body>\n        </html>\n    "));
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.document.close();
    printWindow === null || printWindow === void 0 ? void 0 : printWindow.print();
});
