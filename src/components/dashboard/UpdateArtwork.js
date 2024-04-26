import React, { useState } from 'react';
import { Button } from '@mui/material';
import axios from 'axios';

const UpdateArtwork = () => {
    const [updateForm, setUpdateForm] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        mobileNumber: '',
        canvasSize: '',
        canvasPrice: '',
        image: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateForm((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/arts/${updateForm.id}`, updateForm);
            console.log(response.data);
            // Reset the form after successful update
            setUpdateForm({
                id: '',
                name: '',
                description: '',
                price: '',
                mobileNumber: '',
                canvasSize: '',
                canvasPrice: '',
                image: '',
            });
        } catch (error) {
            console.error('Error updating artwork:', error);
            // Handle error
        }
    };

    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '10px', boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 4px 2px rgba(0, 0, 0, 0.14), 0px 8px 3px rgba(0, 0, 0, 0.12)' }}>
            <h2>Update Artwork</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <label>
                    ID:
                    <input type="text" name="id" value={updateForm.id} onChange={handleInputChange} required />
                </label>
                <label>
                    Name:
                    <input type="text" name="name" value={updateForm.name} onChange={handleInputChange} required />
                </label>
                <label>
                    Description:
                    <input type="text" name="description" value={updateForm.description} onChange={handleInputChange} required />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={updateForm.price} onChange={handleInputChange} required />
                </label>
                <label>
                    Mobile Number:
                    <input type="text" name="mobileNumber" value={updateForm.mobileNumber} onChange={handleInputChange} required />
                </label>
                <label>
                    Canvas Size:
                    <input type="text" name="canvasSize" value={updateForm.canvasSize} onChange={handleInputChange} />
                </label>
                <label>
                    Canvas Price:
                    <input type="number" name="canvasPrice" value={updateForm.canvasPrice} onChange={handleInputChange} />
                </label>
                <label>
                    Image URL:
                    <input type="text" name="image" value={updateForm.image} onChange={handleInputChange} required />
                </label>
                <Button type="submit" variant="contained" color="primary">Update</Button>
            </form>
        </div>
    );
};

export default UpdateArtwork;
