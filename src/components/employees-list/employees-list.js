import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, deleteItem, onToggleProps }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item
        return (
            <EmployeesListItem key={id} {...itemProps}
                deleteItem={() => deleteItem(id)}
                onToggleProps={(e) => onToggleProps(e.currentTarget.getAttribute('data-toggle'), id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;

