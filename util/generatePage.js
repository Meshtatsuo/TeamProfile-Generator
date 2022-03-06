const fs = require("fs");


function generatePage(managers, engineers, interns) {
  let managerCards = ``;
  let engineerCards = ``;
  let internCards = ``;
  // iterate through each array
  managers.forEach(i => {
    managerCards += i.html;
  })
  // iterate through each array 
  engineers.forEach(i => {
    engineerCards += i.html;
  })
  // iterate through each array 
  interns.forEach(i => {
    internCards += i.html;
  })
  // string literal for writing to file
  return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Team Profile</title>
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <!-- My Stylesheet -->
  <link rel="stylesheet" href="./style.css" />
</head>

<body>
  <header class="row center-align blue-grey darken-4">
    <h1 class="col s12 white-text">Team Profiles</h1>
  </header>

  <main class="container">
    <!-- Profile Content-->
    <div class="row">

    ${managerCards}
    ${engineerCards}
    ${internCards}


 </div>
    <!-- CONTENT END -->
  </main>

  <footer>
    <!-- Footer -->
  </footer>

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</body>

</html>
  `
}

function writeToFile(content) {
  fs.writeFile('./dist/profile.html', content, err => {
    if (err) {
      console.error(err)
      return;
    }
  })
}

exports.generatePage = generatePage;
exports.writeToFile = writeToFile;