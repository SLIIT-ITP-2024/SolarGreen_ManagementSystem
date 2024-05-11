import React, { useState } from 'react';
import AddCustomer from './AddCustomer';
import CustomerList from './ViewCustomer';
import WithLayout from '../../../hoc';

const Customer = () => {
  const [modal, setModal] = useState(false);
  const [loader, setLoader] = useState(1);

  const handleModalClose = () => setModal(false);

  return (
    <div className="flex flex-col h-screen w-full bg-solo-green2 p-10">
      <div className="w-full flex justify-end">
        <button
          type="button"
          onClick={() => setModal(true)}
          className="px-6 py-2 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
        >
          Add Customer
        </button>
      </div>
      <CustomerList setLoader={setLoader} loader={loader} />
      {modal && <AddCustomer closeModal={handleModalClose} setLoader={setLoader} loader={loader} />}
    </div>
  );
};

// export default WithLayout(Customer);
export default Customer;