import React from "react";
import Part1 from "./Part1";

const Form = () => {
  return (
    <>
      <div className="row mx-0 form">
        <div className="col-12 p-3 d-flex border-bottom">
          <h3 className="align-items-center d-flex px-2">
            <i className="fa fa-angle-left" />
          </h3>
          <h4 className="align-items-center fs-lg-4 d-flex px-2 design">Design Bot</h4>
          <div className="d-flex justify-content-center align-items-center position-absolute start-50 translate-middle-x configure">
            <h5 className="py-lg-2 ps-lg-4 pe-lg-5 border config p-2">
              <i className="fa fa-bomb" /> Configure with AI
            </h5>

            <h5 className="py-lg-2 px-lg-3 p-2 text-primary bg-success-subtle border manual">
              <i className="fa fa-bars pe-2" />
              Manual Configuration
            </h5>
          </div>
        </div>
        <div className="row m-0 px-0 bg-light first">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 border-end bg-light px-0 py-3">
            <Part1 />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-0 second bg-light py-3">
            <h5 className="py-3 ps-3">Preview</h5>
            <div className="justify-content-center align-items-center pt-lg-5 mt-lg-5 pt-3 twinker">
              <div className="d-flex justify-content-center my-3 mt-5">
                <img src="/assets/twinker.png" height="40vh" />
              </div>
              <h5 className="text-center py-2">Tinker with your bot</h5>
              <h6 className="text-center py-2 px-3">
                Improve your bot by testing and fine-tune it
              </h6>
            </div>
             <div className="bg-white border d-flex mx-3 rounded py-1">
              <input type="text" class="form-control input py-2 text-secondary" placeholder="Type Here" />
              <h6 className="text-secondary ms-auto px-3 mb-0 d-flex align-items-center">
                <i className="fa fa-paper-plane" />
              </h6>
            </div> 
           
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;
