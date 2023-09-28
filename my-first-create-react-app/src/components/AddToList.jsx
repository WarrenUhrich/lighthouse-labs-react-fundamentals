import React from 'react';
import { useState } from 'react';

const AddToList = () => {
    const [list, setList] = useState(['Study React', 'Buy Milk']);

    const handleSubmit = (event) => {
        event.preventDefault();

        const listCopy = [...list];

        const formData = new FormData(event.target);
        const newListItemText = formData.get('new');
        // console.log(formData.get('new')); // Must match the NAME attr. of our input.

        listCopy.push(newListItemText);
        setList(listCopy);
    };

    const LIs = list.map((text, index) => {
        return <li key={index}>{text}</li>;
    });

    return (
        <section>
            <h2>Add to List</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    New List Item:
                    <input name="new"/>
                </label>
                <input type="submit" value="Add to List"/>
            </form>
            <ul>
                {LIs}
            </ul>
        </section>
    );
};

export default AddToList;
