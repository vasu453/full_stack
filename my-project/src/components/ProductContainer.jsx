import ProductCard from './ProductCard';

function ProductContainer() { // Changed name here
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <ProductCard 
        name="Laptop" 
        price={999} 
        image="https://via.placeholder.com/150" 
        inStock={true} 
      />
      <ProductCard 
        name="Smartphone" 
        price={499} 
        image="https://via.placeholder.com/150" 
        inStock={false} 
      />
    </div>
  );
}

export default ProductContainer; // Changed name here