import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import React, { useEffect, useState } from "react";
import {
  updateGeoLocation,
  userGeoLocation,
  userReligion,
} from "./../redux/appState/actions";
import { useDispatch, useSelector } from "react-redux";

import LanguageChangeOption from "./../components/LanguageOpt/index";
import { Link } from "react-router-dom";
import LoginRoute from "./loginRoute";
import PopupPersonDetails from "../components/PopupPersonDetails";
import ROUTE from "./../components/RouteUrls/index";
import { Tooltip } from "antd";
import countryReligionList from "../assets/JSON/religion";
import img from "../assets/blackMap.jpg";
import markers from "../assets/JSON/markers";
import renderIcon from "../components/mapPointerIcon";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const API_KEY = "076636cb40a4483188db6c8672602ee7";
const LoginPageLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [person, setperson] = useState(null);
  const userGeoDetails = useSelector((state) => state.appState.userGeoDetails);
  const searchResult = useSelector((state) => state.appState.searchResultFound);
  const closePopup = () => {
    setperson(null);
  };
  useEffect(() => {
    if (userGeoDetails.country_name === "") {
      fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => dispatch(userGeoLocation(data)));
    }
  }, []);

  ///setUserReligion based on Geo location
  useEffect(() => {
    if (userGeoDetails.country_name !== "") {
      const getGeoBasedReligion = countryReligionList.filter(
        (item) => item.country === userGeoDetails.country_name
      );
      dispatch(userReligion(getGeoBasedReligion[0].religion));
    }
  }, []);
  useEffect(() => {
    navigator.geolocation.watchPosition(
      function (position) {
        dispatch(
          updateGeoLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );
      },
      function (error) {
        if (error.code == error.PERMISSION_DENIED) {
        }
      }
    );
  }, []);
  const latitude =
    userGeoDetails.latitude === undefined ? 45.4 : userGeoDetails.latitude;
  const longitude =
    userGeoDetails.longitude === undefined ? -75.7 : userGeoDetails.longitude;
  return (
    <StyledContainer
      className="h-100"
      meetPeople={location.pathname === ROUTE.MEET}
    >
      <div className="row m-0 h-100">
        <Map
          dragging={location.pathname === ROUTE.MEET}
          viewport={{
            center: [latitude, longitude],
            zoom: searchResult ? 12 : 6,
          }}
        >
          <Popup position={[latitude, longitude]}>
            <div>
              {userGeoDetails.city !== "" && (
                <span className="badge text-light font-13">
                  {userGeoDetails.city}
                </span>
              )}
              {userGeoDetails.country_name !== "" && (
                <span className="badge text-light font-13">
                  {userGeoDetails.country_name}
                </span>
              )}
            </div>
          </Popup>
          {/* other person */}
          {person && (
            <Popup
              position={person.position}
              onClose={() => {
                setperson(null);
              }}
            >
              <PopupPersonDetails person={person} closePopup={closePopup} />
            </Popup>
          )}
          {/* other person */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={[latitude, longitude]}

            // onClick={() => {
            //   setActivePark(park);
            // }}
          />
          {location.pathname === ROUTE.MEET &&
            markers.map((item) => {
              return (
                <Marker
                  onMouseOver={(e) => {
                    setperson(item);
                  }}
                  // onMouseDown={(e) => {
                  //   setperson(null);
                  // }}
                  icon={renderIcon(item.type)}
                  position={item.position}
                />
              );
            })}
          <div className=" h-100 overlay-top mt-0">
            <div class="row h-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-right laguageChangeOpt">
                    {location.pathname !== ROUTE.LANG && (
                      <LanguageChangeOption color="themeColor" />
                    )}
                  </div>
                </div>
                <div className="row">
                  <div class="col-sm-12  d-flex justify-content-center">
                    <LoginRoute />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Map>
      </div>
    </StyledContainer>
  );
};

export default LoginPageLayout;

const StyledContainer = styled.div`
  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: var(--midNight-blue);
  }
  .leaflet-popup-content{
    width: 200px; !importannt;
    margin: 10px 13px;
  }
  .leaflet-container {
    z-index: 0;
    font-family: "Slabo 13px", serif;
  }
  .leaflet-grab {
    /* pointer-events: none !important; */
  }

  .overlay-top {
    z-index: 999;
    position: inherit;
    background-color: ${(props) => (props.meetPeople ? "none" : "#00000040")};
    height: ${(props) => (props.meetPeople ? "auto" : "100%")}!Important;
    margin-top: 10px;

    /* display: none; */
    .laguageChangeOpt {
      position: absolute;
      width: 170px;
      right: 0px;
    }
  }
  /* .btn-outline-primary {
    border-color: var(--main-orange);
  }
  .btn {
    background-color: #fff;
  } */
  border: 1px solid #000;
  background: url(${img}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  background-size: cover;
`;
