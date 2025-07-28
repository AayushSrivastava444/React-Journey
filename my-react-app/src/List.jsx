import PropTypes from 'prop-types';

function List(props){
     
        const category=props.category;
        const itemList=props.items;
       //fruits.sort((a, b) => a.name.localeCompare(b.name));
       //fruits.sort((a, b) => a.calories-b.calories);

       //const lowCalFruits = fruits.filter(fruit => fruit.calories > 100);//

       const listItems=itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        {item.calories}</li>);
      return(<>
      <h3>{category}</h3>
      <ol>{listItems}</ol></>);
}

List.defaultProps ={
    category: "Category",
    items: [],

}

List.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number }))
}

export default List