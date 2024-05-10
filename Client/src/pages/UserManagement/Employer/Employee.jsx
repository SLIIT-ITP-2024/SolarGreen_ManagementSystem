import React, { useEffect, useState } from "react";
import AddEmployee from "./AddEmployee";
import EmployeeList from "./ViewEmployee";
import axios from "axios";
import DropdownMenu from "../../../components/dropdown";
import { employeeRoleOption } from "../../../utils/dropdownConstOption";
import WithLayout from "../../../hoc";

const apiUrl = import.meta.env.VITE_APIURL;

const Employee = () => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(1);
  const [filter, setFilter] = useState({
    name: "",
    role: "",
  });
  const [employees, setEmployees] = useState([]);

  const handleModalClose = () => setModal(false);

  const handleSearchChange = (event) => {
    setFilter({ ...filter, name: event.target.value });
  };

  const handleRoleSelect = ({ value }) => {
    setFilter({ ...filter, role: value });
    setLoader(loader + 1);
  };

  useEffect(() => {
    const fetchAllEmployee = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/v1/customer-employee/employee`,
          {
            params: { name: filter?.name, role: filter?.role },
          }
        );
        console.log("Server response:", response.data);
        if (response.data.successMsg) {
          setEmployees(response?.data?.employees);
        } else {
          console.log("Error response:", response.data.errorMsg);
        }
      } catch (error) {
        console.error("Error:", error.response.data.errorMsg);
      }
    };

    fetchAllEmployee();
  }, [loader]);

  return (
    <div className="flex flex-col h-screen w-full p-10">
      <div className="w-full flex pb-10">
        <div className="flex items-start h-12 w-full">
          <div className="h-full border-y-2 border-s-2 w-full rounded-l-lg border-black">
            <input
              name="search"
              type="text"
              placeholder="Search"
              className="form-control h-full w-full border-0 focus:ring-0 focus:border-transparent"
              onChange={handleSearchChange}
              value={filter?.name}
            />
          </div>
          <button
            onClick={() => setLoader(loader + 1)}
            className="w-60 h-full flex items-center justify-center bg-solo-green1 rounded-r-lg text-lg font-bold"
          >
            Search
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-x-4 w-1/2 items-center">
          <div className="">Filter By:</div>
          <div>
            <DropdownMenu
              placeholder={"Select Role"}
              options={employeeRoleOption}
              onSelect={handleRoleSelect}
            />
          </div>
        </div>
        <div className="flex gap-x-3 w-1/2 justify-end">
          <button
            type="button"
            onClick={() => setModal(true)}
            className="px-6 w-1/2 py-2 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
          >
            Add Employee
          </button>
        </div>
      </div>
      <EmployeeList
        setLoader={setLoader}
        loader={loader}
        employees={employees}
        setEmployees={setEmployees}
      />
      {modal && (
        <AddEmployee
          closeModal={handleModalClose}
          setLoader={setLoader}
          loader={loader}
        />
      )}
    </div>
  );
};

export default WithLayout(Employee);
