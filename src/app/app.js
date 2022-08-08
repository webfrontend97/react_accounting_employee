import { Component } from 'react';
import AppInfo from '../components/app-info/app-info';
import SearchPanel from '../components/search-panel/search-panel';
import AppFilter from '../components/app-filter/app-filter';
import EmployersList from '../components/employees-list/employees-list';
import EmployersAddForm from '../components/employees-add-form/employees-add-form';
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John C.', salary: 900, increase: false, rise: false, id: 1 },
                { name: 'Alex M.', salary: 2000, increase: false, rise: false, id: 2 },
                { name: 'Vlad X.', salary: 3000, increase: false, rise: false, id: 3 },
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({ data }) => ({
            data: data.filter(item => item.id !== id)
        }))
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProps = (props, id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [props]: !item[props] }
                }
                return item;
            })
        }))
    }

    onUpdateSearch = (term) => {
        this.setState({ term })
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const totalEmp = data.length;
        const award = data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);
        return (
            <div className="app">
                <AppInfo totalEmp={totalEmp} award={award} />
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <EmployersList deleteItem={this.deleteItem} data={visibleData}
                    onToggleProps={this.onToggleProps} />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;
