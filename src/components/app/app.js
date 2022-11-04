import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';
import './app.css';

function App() {
    const data = [
        {name: 'John Smith', salary: 800, increase: true},
        {name: 'Alex Shepard', salary: 1500, increase: false},
        {name: 'Carl Kidney', salary: 3000, increase: false}
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <WorkersList data={data} />
            <WorkersAddForm />
        </div>
    );
}

export default App;