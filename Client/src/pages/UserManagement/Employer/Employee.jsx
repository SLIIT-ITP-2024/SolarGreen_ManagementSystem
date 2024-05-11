import React, { useState } from 'react';
import AddEmployee from './AddEmployee';
import EmployeeList from './ViewEmployee';

const Employee = () => {
    const [modal, setModal] = useState(false);
    const [loader, setLoader] = useState(1);
    
    const handleModalClose = () => setModal(false);
    
    return (
    <div className="flex flex-col h-screen w-full bg-solo-green2 p-10">
        <div className="w-full flex justify-end">
            <button
            type="button"
            onClick={() => setModal(true)}
            className="px-6 py-2 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl">
                Add Employee
            </button>
            
            </div>
            <EmployeeList setLoader={setLoader} loader={loader} />
            {modal && <AddEmployee closeModal={handleModalClose} setLoader={setLoader} />}
            </div>
    );
};

// export default WithLayout(UserManagementPage);
export default Employee;