import React, {Component} from 'react';

class ProductItem extends Component {
    render() {
        const product = this.props.product;
        return (
            <tr className={product.stocked ? 'stocked' : 'notStocked'}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default ProductItem;