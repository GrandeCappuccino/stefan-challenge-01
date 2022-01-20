// import ListItem from './ListItem.css';

export default function ListItem( { name } ) {
    return (
        <div className="list-item">
            <p className="person">{name}</p>
            <button className="delete-person">Delete</button>
        </div>
    )
}
