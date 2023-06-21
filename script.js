function updateOptions() {
    var branch = document.getElementById("branch").value;
    var dropdown = document.getElementById("year");

    dropdown.innerHTML = "";
    var opt = document.createElement("option");
    opt.text = "--Select your Year--";
    dropdown.add(opt);

    if (branch == "BTech") {
        for (var i = 1; i <= 4; i++) {
            var opt = document.createElement("option");
            opt.text = i;
            dropdown.add(opt);
        }
    } else if (branch == "BSc" || branch == "BBA") {
        for (var i = 1; i < 4; i++) {
            var opt = document.createElement("option");
            opt.text = i;
            dropdown.add(opt);
        }
    } else if (branch == "Mtech" || branch == "MSc" || branch == "MBA") {
        for (let i = 1; i < 3; i++) {
            var opt = document.createElement("option");
            opt.text = i;
            dropdown.add(opt);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var branchDropdown = document.getElementById("branch");
    if (branchDropdown) {
        branchDropdown.addEventListener("change", updateOptions);
    }

    var studentForm = document.getElementById("studentForm");
    if (studentForm) {
        studentForm.addEventListener("submit", function(e) {
            e.preventDefault();

            var fName = document.getElementById("fn").querySelector("input").value;
            var mName = document.getElementById("mn").querySelector("input").value;
            var lName = document.getElementById("ln").querySelector("input").value;
            var mail = document.getElementById("mail").querySelector("input").value;
            var branch = document.getElementById("branch").value;
            var year = document.getElementById("year").value;

            var stuData = {
                "Name": fName + ' ' + lName,
                "email": mail,
                "Branch": branch,
                "Year": year
            };

            // Convert stuData to JSON
            var jsonData = JSON.stringify(stuData);
            console.log(jsonData);

            // Additional code to save or process the JSON data as needed

            // Reset the form
            studentForm.reset();
        });
    }
});

function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
      var output = document.getElementById('preview');
      output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }