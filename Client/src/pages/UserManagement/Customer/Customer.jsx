import React, { useEffect, useState } from "react";
import AddCustomer from "./AddCustomer";
import CustomerList from "./ViewCustomer";
import WithLayout from "../../../hoc";
import axios from "axios";
import DropdownMenu from "../../../components/dropdown";
import { customerStatusOption } from "../../../utils/dropdownConstOption";

const apiUrl = import.meta.env.VITE_APIURL;

const Customer = () => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(1);
  const [filter, setFilter] = useState({
    name: "",
    status: "",
  });
  const [customers, setCustomers] = useState([]);

  const handleModalClose = () => setModal(false);

  useEffect(() => {
    const fetchAllCustomer = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/v1/customer-employee/customer`,
          {
            params: { name: filter?.name, status: filter?.status },
          }
        );
        console.log("Server response:", response.data);
        if (response.data.successMsg) {
          setCustomers(response?.data?.customers);
        } else {
          console.log("Error response:", response.data.errorMsg);
        }
      } catch (error) {
        console.error("Error:", error.response.data.errorMsg);
      }
    };

    fetchAllCustomer();
  }, [loader]);

  const handleSearchChange = (event) => {
    setFilter({ ...filter, name: event.target.value });
  };

  const handleStatusSelect = ({ value }) => {
    setFilter({ ...filter, status: value });
    setLoader(loader + 1);
  };

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
              placeholder={"Status"}
              options={customerStatusOption}
              onSelect={handleStatusSelect}
            />
          </div>
        </div>
        <div className="flex gap-x-3 w-1/2 justify-end">
          <button
            type="button"
            onClick={() => setModal(true)}
            className="px-6 w-1/2 py-2 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
          >
            Add Customer
          </button>
        </div>
      </div>
      <CustomerList
        setLoader={setLoader}
        loader={loader}
        customers={customers}
        setCustomers={setCustomers}
      />
      {modal && (
        <AddCustomer
          closeModal={handleModalClose}
          setLoader={setLoader}
          loader={loader}
        />
      )}
    </div>
  );
};

export default WithLayout(Customer);
// export default Customer;
