import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Data = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Lindsay Walton', address: '1528 Camren Fall Apt. 197', contact: '(1234)567890' },
        { id: 2, name: 'Courtney Henry', address: '302 Cummings Fort', contact: '(2345)678901' },
        { id: 3, name: 'Tom Cook', address: '338 Elvera Harbors', contact: '(3456)789012' },
        { id: 4, name: 'Whitney Francis', address: '41831 Stamm Terrace Suite 728', contact: '(4567)890123' },
        { id: 5, name: 'Leonard Krasner', address: '96084 Erich Ville', contact: '(5678)901234' },
        { id: 6, name: 'Floyd Miles', address: '261 Randi Estate Apt. 967', contact: '(6789)012345' },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', address: '', areaCode: '', mainNumber: '' });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setNewUser({ name: '', address: '', areaCode: '', mainNumber: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const addUser = () => {
        if (!newUser.name) {
            alert('Name cannot be empty.');
            return;
        }

        const contactFormat = /^\(\d{4}\) \d{6}$/;
        const fullContact = `(${newUser.areaCode}) ${newUser.mainNumber}`;
        if (!newUser.areaCode || !newUser.mainNumber || !contactFormat.test(fullContact)) {
            alert('Contact must be in the format (0000) 000000.');
            return;
        }

        const formattedAreaCode = `(${newUser.areaCode})`;
        const userId = users.length ? users[users.length - 1].id + 1 : 1;

        setUsers([...users, { id: userId, name: newUser.name, address: newUser.address, contact: `${formattedAreaCode}${newUser.mainNumber}` }]);
        closeModal();
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <div className="flex justify-between items-center mb-4">
                <div className="my-10">
                    <h2 className="text-4xl font-bold">Patients</h2>
                    <p>A list of all the patients including their name, address, and contact.</p>
                </div>
                <button
                    onClick={openModal}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                    Add Patient
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Address
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Contact
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {user.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.address}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.contact}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-medium px-4 py-2 rounded-md focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Modal for Add Patient */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add User"
                className="fixed inset-0 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Add User</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newUser.name}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={newUser.address}
                                onChange={handleInputChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </div>
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Area Code</label>
                                <input
                                    type="text"
                                    name="areaCode"
                                    value={newUser.areaCode}
                                    onChange={handleInputChange}
                                    placeholder="0000"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    maxLength={4} // Limit to 4 digits
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-700">Main Number</label>
                                <input
                                    type="text"
                                    name="mainNumber"
                                    value={newUser.mainNumber}
                                    onChange={handleInputChange}
                                    placeholder="000000"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    maxLength={6} // Limit to 6 digits
                                />
                            </div>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={addUser}
                                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
                            >
                                Add User
                            </button>
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default Data;
