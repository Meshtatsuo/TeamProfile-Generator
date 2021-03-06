const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;

    // html for card is stored on the object
    this.html = `


        <!-- INTERN CARD BEGIN -->
        <div class="col s12 m12 l4" id="card">
          <div class="card">
            <div class="card-content white-text blue darken-3">
              <h5>${this.name}</h5>
              <h6 class="valign-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 172 172"
                  style="fill: #000000"
                >
                  <g
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                    style="mix-blend-mode: normal"
                  >
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                      <path
                        d="M86,6.55078l-86.95182,36.61719l29.61849,11.85579v9.47624c-7.16667,14.33333 -14.33333,44.43333 -14.33333,78.83333h29.95443c8.56092,10.51738 22.08833,21.5 41.71224,21.5c19.62392,0 33.15132,-10.98262 41.71224,-21.5h29.95443c0,-34.4 -7.16667,-64.5 -14.33333,-78.83333v-9.47624l14.33333,-5.73893v36.71517h14.33333v-42.4541l0.95182,-0.37793zM86,22.11589l49.20084,20.71615l-6.20084,2.47754v19.19043h-86v-19.19043l-6.20085,-2.47754zM57.33333,78.83333h57.33333c7.88333,0 14.33333,6.45 14.33333,14.33333v7.16667c0,10.0097 -2.67678,18.16285 -6.08886,24.67741c-5.21374,9.04302 -17.33465,25.48926 -36.91114,25.48926c-19.57648,0 -31.6974,-16.44624 -36.91113,-25.48926c-3.41209,-6.51456 -6.08887,-14.66771 -6.08887,-24.67741v-7.16667c0,-7.88333 6.37833,-14.33333 14.33333,-14.33333z"
                      ></path>
                    </g>
                  </g>
                </svg>
                &ensp; Intern
              </h6>
            </div>
            <div class="card-action">
              <ul class="collection">
                <li class="collection-item">ID: ${this.id}</li>
                <li class="collection-item">
                  Mail:
                  <a href="mailto: ${this.email}" class="blue-text"
                    >${this.email}</a
                  >
                </li>
                <li class="collection-item">School: ${this.school}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- INTERN CARD END -->

        
        `;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;