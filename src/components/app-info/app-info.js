import "./app-info.css";

const AppInfo = ({ totalEmp, award }) => {
    return (
        <div className="app-info">
            <h1>Accounting for employees in company N</h1>
            <h2>Total number of employees: {totalEmp}</h2>
            <h2>The award will be given to: {award}</h2>
        </div>
    )
}

export default AppInfo;