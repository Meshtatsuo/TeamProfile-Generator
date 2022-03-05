const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;

    this.html = `
        <!-- ${this.name} CARD BEGIN -->
        <div class="col s12 m4" id="card">
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
                        d="M80.17708,5.65495c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172v17.2c-0.02924,2.06765 1.05709,3.99087 2.843,5.03322c1.78592,1.04236 3.99474,1.04236 5.78066,0c1.78592,-1.04236 2.87225,-2.96558 2.843,-5.03322v-17.2c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482zM103.11042,11.38828c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172v11.46667c-0.02924,2.06765 1.05709,3.99087 2.843,5.03322c1.78592,1.04236 3.99474,1.04236 5.78066,0c1.78592,-1.04236 2.87225,-2.96558 2.843,-5.03322v-11.46667c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482zM57.24375,17.12161c-3.16203,0.04943 -5.68705,2.6496 -5.64375,5.81172v5.73333c-0.02924,2.06765 1.05709,3.99087 2.843,5.03322c1.78592,1.04236 3.99474,1.04236 5.78066,0c1.78592,-1.04236 2.87225,-2.96558 2.843,-5.03322v-5.73333c0.02122,-1.54972 -0.58581,-3.04203 -1.68279,-4.1369c-1.09698,-1.09487 -2.59045,-1.69903 -4.14013,-1.67482zM35.29583,45.86667c-3.49733,0 -6.17641,3.09905 -5.66615,6.56198l12.30651,84.10755c0.73387,7.37307 7.37459,12.53047 14.74766,12.53047h47.90469c7.37307,0 13.27419,-5.1574 14.74765,-12.53047l2.22839,-16.1362h12.77683c8.52334,0 15.82219,-6.34795 17.02083,-14.78125l3.26979,-22.93333c1.45521,-10.2545 -6.67204,-19.61875 -17.03203,-19.61875h-8.10729l1.47812,-10.68281c0.47587,-3.44573 -2.20841,-6.51719 -5.68854,-6.51719zM127.9138,74.53333h9.6862c3.59494,0 6.18294,2.97675 5.67734,6.53958l-3.25859,22.93333c-0.40669,2.86137 -2.77989,4.92708 -5.67734,4.92708h-11.18672z"
                      ></path>
                    </g>
                  </g>
                </svg>
                &ensp; Manager
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
                <li class="collection-item">Office Number: ${this.office}</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- ${this.name} CARD END -->
        `;
  }

  getOfficeNumber() {
    return this.office;
  }
}

module.exports = Manager;
