import React from 'react';
import SideBar from './elements/Sidebar';
import logo from './elements/images/logo.ico';




function Aboutus() {
  return (
    <div>
      <SideBar />
    <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Sai Brothers <img src={logo} className="logo" />
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Sai Brothers is a Ecommerce website servering grocery from door to door we serve in<strong> Gandhidham </strong> if you want to order less than 250 you can take delivery from our home by imforming us on <strong>9909169991</strong> Address will be given to you on the call only 😄😄😄
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Terms and conditions 
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Generally to get the fresh vegetables you can order at <strong>Night</strong> Otherwise you can order anytime but there is a chance to get late delivery as we deliver only fresh vegetables and fruits 😄😄😄
    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How to have delivery 
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       You can get delivery from us by confirming the details given by you in the form filled during order and bill will be sent through email so give correct email address 😄😄😄😄😄😄
    </div>
    </div>
  </div>
    <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        How to reach us 
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        To reach us you can contact us on <strong> 9825062685 or  8460212523</strong> always on service Thank-you 😄😄😄
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Aboutus
