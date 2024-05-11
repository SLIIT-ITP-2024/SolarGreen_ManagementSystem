import { useNavigate } from 'react-router-dom';

const UserManagementPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full h-screen bg-solo-green2 p-10">
      <div className="w-full h-full flex items-center justify-center gap-x-5">
        <button
          type="button"
          onClick={() => navigate('/customer')}
          className="px-6 py-2 h-12 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
        >
          Add Customer
        </button>
        <button
          type="button"
          onClick={() => navigate('/employee')}
          className="px-6 py-2 h-12 bg-solo-green1 hover:bg-emerald-400 text-xl font-bold rounded-xl"
        >
          Add Employee
        </button>
      </div>
    </div>
  );
};

// export default WithLayout(UserManagementPage);
export default UserManagementPage;