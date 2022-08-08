import './employees-list-item.css';

function EmployeesListItem({ name, salary, increase, rise, deleteItem, onToggleProps }) {
    let classNames = 'list-group-item d-flex justify-content-between';
    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }
    return (
        < li className={classNames} >
            <span className="list-group-item-label" data-toggle='rise' onClick={onToggleProps}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`$${salary}`} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm"
                    data-toggle='increase'
                    onClick={onToggleProps}>
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button"
                    className="btn-trash btn-sm"
                    onClick={deleteItem}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </ li >
    )
}

export default EmployeesListItem;

