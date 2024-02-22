import React from 'react';

const mockData = [
    'JavaScript', // => <li>JavaScript</li>
    'Ruby',
    'Java',
    'PHP',
    'Python',
    'SQL',
    'Julia',
    'C#'
];

const List = () => {
    return (
        <ul>
            {mockData.map((item, index) => {
                return (
                    <li key={index}>{item}</li>
                );
            })}
        </ul>
    );
};

export default List;
