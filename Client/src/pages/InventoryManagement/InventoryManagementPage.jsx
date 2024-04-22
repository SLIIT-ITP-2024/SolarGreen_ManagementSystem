
import React from 'react'
import WithLayout from '../../hoc'
import axios from 'axios';

const InventoryManagementPage = () => {
  const [inventories, setInventories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    noofitems: 0
  });

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = async () => {
    try {
      const response = await axios.get('/api/inventories');
      setInventories(response.data);
    } catch (error) {
      console.error('Error fetching inventories:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/inventories', formData);
      fetchInventories();
      setFormData({
        name: '',
        price: 0,
        noofitems: 0
      });
    } catch (error) {
      console.error('Error creating inventory:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/inventories/${id}`);
      fetchInventories();
    } catch (error) {
      console.error('Error deleting inventory:', error);
    }
  };

  return (
    <div>
      <h1>Inventory Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="number"
          name="noofitems"
          placeholder="Number of Items"
          value={formData.noofitems}
          onChange={handleChange}
        />
        <button type="submit">Add Inventory</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Number of Items</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventories.map((inventory) => (
            <tr key={inventory._id}>
              <td>{inventory.name}</td>
              <td>${inventory.price}</td>
              <td>{inventory.noofitems}</td>
              <td>
                <button onClick={() => handleDelete(inventory._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryManagementPage;