import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import toast from 'react-hot-toast';
import axios from 'axios';

const Menu = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(`/api/product/get-all-product`);
      setProducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='text-center' style={{ textTransform: 'uppercase' }}>
        <h4>Painel de controle</h4>
        <ListGroup defaultActiveKey='/dashboard'>
          <ListGroup.Item
            action
            href='/dashboard/create-product'
            variant='light'
          >
            Cadastrar produto
          </ListGroup.Item>
          <ListGroup.Item action href='/dashboard/list-product' variant='light'>
            Listar produtos
          </ListGroup.Item>
          <ListGroup.Item variant='light'>
            Total de produtos: <strong>{products.length}</strong>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
};

export default Menu;
