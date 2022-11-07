import WorkersListItem from "../workers-list-item/workers-list-item";
import './workers-list.css'

const WorkersList = ({data, onDelete, onToogleProp}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <WorkersListItem
                key={id} 
                {...itemProps} /*name={item.name} salary={item.salary}*/
                onDelete = {() => onDelete(id)}
                onToogleProp={(e) => onToogleProp(id, e.currentTarget.getAttribute('data-toogle'))} />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default WorkersList;