import React from 'react';

type TodoSelectProps = {
    filter: string;
    setFilter: (value: string) => void;
}

const TodoSelect = ({filter, setFilter} :TodoSelectProps) => {
    return (
        <>
            <select value={filter}
                    onChange={(event) => setFilter(event.target.value)}>
                <option value="All">All</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
            </select>
        </>
    );
};

export default TodoSelect;