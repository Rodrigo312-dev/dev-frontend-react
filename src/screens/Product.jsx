import { useState } from 'react';
import SearchBar from './Product/_components/SearchBar';
import ProductTable from './Product/_components/ProductTable';

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];


const Producto = () => {
    // FilterableProductTable: Contiene toda la App
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div className='producto-container'>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly} 
                onFilterTextChange={setFilterText}
                onInStockOnlyChange={setInStockOnly} />
            <ProductTable
                products={PRODUCTS}
                filterText={filterText}
                inStockOnly={inStockOnly} />
        </div>
    );
};

export default Producto;