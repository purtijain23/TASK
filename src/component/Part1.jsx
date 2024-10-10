import React from "react";
import { FcCancel } from "react-icons/fc";
import { CiCircleAlert } from "react-icons/ci";

const Part1 = () => {
  return (
    <>
      <div className="row mx-2 my-0 part1">
        <div className="col-12">
          <div className="bg-danger-subtle rounded mb-3 mt-2 d-flex align-items-center py-3 enabled">
            <h6 className="text-secondary px-3 mb-0 input">
              Enabled at:{" "}
              <span className="px-2">
                <FcCancel />
              </span>
              Not enabled for any inbox
            </h6>
            <h6 className="text-secondary ms-auto pe-4 me-1 mb-0">
              <i className="fa fa-angle-down" />
            </h6>
          </div>
          <div className="bg-body-secondary py-3 align-items-center">
            <h6 className="text-secondary px-3 pb-3 mb-0 d-flex align-items-center input">
              Company Info
            </h6>

            <div className="row mx-2">
              <div className="col-6 px-2">
                  <input
                    type="text"
                    class="form-control input text-secondary"
                    placeholder="Company Name*"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                  />
              </div>
              <div className="col-6 px-2">
                <div class="input-group ">
                  <select class="form-select se text-secondary" id="inputGroupSelect01">
                    <option selected>Industry Type</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="border rounded mt-3 mx-3 p-2 bg-white d-flex">
              <h6 className="text-secondary mb-0 d-flex align-items-center input ps-1">
                Company description <sup className="text-danger">*</sup>
              </h6>
              <h6 className="ms-auto">
                <CiCircleAlert />
              </h6>
            </div>
          </div>
          <div className="bg-body-secondary mt-3 py-3 ">
            <div className="d-flex">
              <h6 className="text-secondary px-3 pb-3 mb-0 d-flex align-items-center input">
                Instruction <span className="px-2"><CiCircleAlert /></span>
              </h6>
              <h6 className="text-secondary ms-auto px-3 pb-3 mb-0 d-flex align-items-center">
                GPT-4o
              </h6>
            </div>
            <div className="rounded mx-3 bg-white">
              <input type="text" class="form-control input py-2 text-secondary" placeholder="Prompt*" />
            </div>
          </div>

          <div className="ps-2 pe-3 bg-body-secondary">
            
          <select
            class="form-select bg-body-secondary text-secondary se mt-3 py-3"
            aria-label="Default select example"
          >
            <option selected>
              Tools and Description(Optional) <span className="px-2"><CiCircleAlert /></span>
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>

          <div className="ps-2 pe-3 bg-body-secondary ">
          <select
            class="form-select bg-body-secondary text-secondary se mt-3 py-3 "
            
          >
            <option selected>
              Conversation Starter(Optional) <span className="px-2"><CiCircleAlert /></span>  
            </option>

            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          </div>
        </div>
      </div>
    </>
  );
};
export default Part1;
