import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import products from './products.json';

function Title(props) {
  return (
    <h2 className="list-title">{props.title}</h2>
  );
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function List(props) {
  const items = props.items.filter((item, index) => index < 3);
  return (
    <ul className="list-items">
      {items.map((item) => <ListItem key={item.id} value={item.name} />)}
    </ul>
  );
}

function ListProducts() {
  const titleList = 'Список продуктов';
  const listProducts = products;
  return (
    <div className="list-container">
      <Title title={titleList} />
      <List items={listProducts} />
    </div>
  );
}


ReactDOM.render(<ListProducts />, document.getElementById('root'));
