import ProductItem from './ProductItem';
import classes from './Products.module.css';


const Products = (props) => {
  const product = [{
      id: "p1",
      title: "Two States",
      price: 6,
      description: "This is a novel"
  },
  {
    id: "p2",
    title: "Bhagwat Gita",
    price: 7,
    description: "This is about hindu spiritual"
  }
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {product.map ((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        /> 
        ))}
      </ul>
    </section>
  );
};

export default Products;