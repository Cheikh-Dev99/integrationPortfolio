import React from "react";
import { Items } from "../utils/Utils";
import { MdPhoneAndroid } from "react-icons/md";
import { CiMail, CiLocationOn, CiBank } from "react-icons/ci";
import profil from "../assets/me.png";
import wave from "../assets/wave.svg";

export default function Section1() {
  return (
    <>
      <div className="flex flex-col sm:flex-row border border-w m-5">
        <div className="relative info-dev flex flex-col justify-center w-full sm:w-2/3 p-5 text-w">
          <div className="flex flex-col mb-8">
            <h1 className="text-4xl font-bold text-w">
              Hello ! je suis <span className="text-y">Cheikh A.T. Gueye</span>
            </h1>
            <p className="text-4xl font-semibold mb-8">Développeur web</p>
          </div>
          <div
            className="relative flex flex-col rounded-md text-md font-bold sm:flex-row sm:justify-around p-5"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 150, 135, 0.3), rgba(255, 255, 255, 0.0))",
            }}
          >
            <Items icon={MdPhoneAndroid}>78 176 33 25</Items>
            <Items icon={CiMail}>cheikhahmedtidiane219@gmail.com</Items>
            <Items icon={CiLocationOn}>Dakar Plateau</Items>
            <Items icon={CiBank}>Bakeli</Items>
          </div>
        </div>
        <div className="relative profil-dev flex justify-center w-full sm:w-1/3">
          <img
            src={profil}
            alt="photo de profil"
            className="w-[300px] h-[300px] sm:w-full sm:h-full rounded-full sm:rounded-lg p-8 mb-10"
          />
        </div>
      </div>
        {/* <img src={wave} alt="" className="bottom-0 w-full " /> */}
    </>
  );
}
