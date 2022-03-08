/* 
 * Component that handles the products on the main page of the e-commerce site. 
 * It takes a list of objects (json objects) and makes a section for each one that includes their icon and name
 * will contain their page link later.
*/

function Products(props) {
    const prodProps = props.products;
    const prodList = prodProps.map((product) =>
    <section>
        <img src={product.icon} alt="icon" />
        <h1>{product.name}</h1>
    </section>
    );
    
    return (
        <article>
            {prodList}
        </article>
    );
}

export default Products;