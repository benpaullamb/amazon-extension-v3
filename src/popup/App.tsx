import { useEffect, useState } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
      const tabId = tabs[0].id;

      chrome.tabs.sendMessage(tabId!, 'get_products', (res = []) => {
        setProducts(res);
        setDisplayProducts(res);

        console.log(res);
      });
    };
    getProducts();
  }, []);

  return <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>;
}
