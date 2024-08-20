
const ProductRow = ({ product })=>{
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;

    return (
        <tr>
            <td style={{textAlign:'left'}} >{name}</td>
            <td>{product.price}</td>
        </tr>
    );
};

export default ProductRow;