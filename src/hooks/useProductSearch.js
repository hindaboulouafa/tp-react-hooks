import { useEffect, useState } from 'react';

const useProductSearch = (searchTerm) => {
  const [products, setProducts] = useState([]);            // tous les produits
  const [filteredProducts, setFilteredProducts] = useState([]); // produits filtrés
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Appel API au chargement
  useEffect(() => {
    setLoading(true);
    fetch('https://api.daaif.net/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur lors du chargement des produits');
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // <-- À garder pour vérifier
        // 👉 Analyse de la structure
        const productArray = Array.isArray(data)
          ? data
          : data.products || data.data || [];

        setProducts(productArray);
        setFilteredProducts(productArray);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔁 Filtrage quand searchTerm change
  useEffect(() => {
    if (!searchTerm) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  return {
    products: filteredProducts,
    loading,
    error,
  };
};

export default useProductSearch;
