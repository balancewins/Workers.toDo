import WorkersListItem from "../workers-list-item/workers-list-item";
import './workers-list.css'

const WorkersList = ({data}) => {
    const elements = data.map(item => {
        return (
            <WorkersListItem {...item} /*name={item.name} salary={item.salary}*/ />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default WorkersList;