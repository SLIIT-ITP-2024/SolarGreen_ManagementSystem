import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DropdownMenu from "../../../components/dropdown";
import {
  customerStatusOption,
  genderOptions,
} from "../../../utils/dropdownConstOption";
import { useFormik } from "formik";

const AddEmployee = ({ closeModal, setLoader, loader }) => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_APIURL;

  const handleGenderSelect = ({ value }) => {
    console.log("Selected Date Posted Value:", value);
    formik.setFieldValue("gender", value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      gender: "",
      phone: "",
      email: "",
      role: "",
      startingDate: "",
      personalDetail: "",
    },
    onSubmit: async (values) => {
      console.log("value: ", values);
      try {
        const response = await axios.post(
          `${apiUrl}/api/v1/customer-employee/add-employee`,
          values
        );
        console.log("Server response:", response.data);
        if (response.data?.successMsg) {
          closeModal();
          setLoader(loader + 2);
        } else {
          console.log("error response:", response.data.errorMsg);
        }
      } catch (error) {
        console.error("Error:", error.response.data.errorMsg);
      }
    },
  });

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
      <div className="w-3/4 h-5/6 bg-white p-14 overflow-y-auto rounded-lg">
        <div className="flex w-full justify-between items-center pb-10">
          <h2 className="text-3xl font-bold">Add Employee</h2>
          <button
            onClick={closeModal}
            className="text-lg font-bold w-fit hover:bg-red-500 px-2 rounded-md hover:text-white"
          >
            X
          </button>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-full gap-y-5"
        >
          <div className=" flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Employee Name
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <input
                name="name"
                type="text"
                placeholder="Enter Name"
                className="form-control h-full border-0 focus:ring-0 focus:border-transparent"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Gender
            </div>
            <DropdownMenu
              placeholder={"Gender"}
              options={genderOptions}
              onSelect={handleGenderSelect}
            />
          </div>
          <div className="flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Phone Number
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <input
                name="phone"
                type="text"
                placeholder="Enter Phone Number"
                className="form-control h-full border-0 focus:ring-0 focus:border-transparent"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Email
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <input
                name="email"
                type="text"
                placeholder="Enter Email"
                className="form-control h-full border-0 focus:ring-0 focus:border-transparent"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Role
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <input
                name="role"
                type="text"
                placeholder="Enter Role"
                className="form-control h-full border-0 focus:ring-0 focus:border-transparent"
                value={formik.values.role}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex items-start h-10">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Starting Date
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <input
                name="startingDate"
                type="date"
                placeholder="Enter Starting Date"
                className="form-control"
                value={formik.values.startingDate}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex items-start h-20">
            <div className="w-1/3 h-full flex items-center pl-5 bg-solo-green1 rounded-l-lg text-lg font-medium">
              Personal Details
            </div>
            <div className=" h-full border-y-2 border-e-2 w-full rounded-r-lg border-black">
              <textarea
                rows={3}
                name="personalDetail"
                type="text"
                placeholder="Enter your details"
                className="form-control h-full border-0 focus:ring-0 focus:border-transparent"
                value={formik.values.personalDetail}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          <div className="flex w-full justify-end">
            <div>
              <button
                type="submit"
                className="px-6 py-2 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
