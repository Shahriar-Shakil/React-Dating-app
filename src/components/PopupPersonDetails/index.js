import { Link } from "react-router-dom";
import ROUTE from "../RouteUrls";
import React from "react";
import { Wave } from "react-animated-text";
import styled from "styled-components";

const PopupPersonDetails = ({ person, closePopup }) => {
  return (
    <StyledDiv className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-4 avater">
            <img
              src={require("../../assets/profiles/ben.png")}
              alt="person"
              className="rounded"
            />
          </div>
          <div className="col-8 text-orange pl-0">
            <h3 className="name text-orange m-0 font-16">{person.name}</h3>
            <soan className="badge font-12">Age : {person.age}</soan>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <Link
              to={ROUTE.SIGNIN}
              className="btn btn-warning text-orange w-100 btn-sm font-14"
              onClick={() => closePopup()}
            >
              <Wave text="Chat now!" />
            </Link>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default PopupPersonDetails;

const StyledDiv = styled.div``;
