import propTypes from 'prop-types';

const List = (props) => {
    const category = props.category;
    const itemList = props.items;
    const listItems = itemList.map((item) => (
        <li key={item.id}>
            {item.name}: &nbsp; <b>{item.calories}</b>
        </li>
    ));
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ul className="list-items">{listItems}</ul>
        </>
    );
};
  
List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.object)
}
List.defaultProps = {
    category: "Items",
    items: []
}

export default List;
