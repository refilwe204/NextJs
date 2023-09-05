import path from 'path';
import fs from 'fs/promises';

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
      <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStacticProps() {
  const Filepath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(Filepath);
  const data = JSON.parse(jsonData);
  
  return {
    props:{
    products: data.products
  },
 };
}

export default HomePage;
