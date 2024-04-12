const productCard = (title, src) => (`
    <div class="card product-card item">
        <p class="card-text font-weight-bold">${title}</p> 
        <img class="card-img-top" src="${src}" alt="Card image cap">
        <div class="card-body">
            <button class="btn btn-primary">Shop Now!</button>
        </div>
    </div>
`);

const communityCard = (src, description, date, artist) => (`
    <div class="card community-card item">
        <img class="card-img-top" src="${src}" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">${date}</p>    
            <p class="card-text font-weight-bold">${description}</p> 
            <p class="card-text font-weight-bold">${artist}</p>  
        </div>
    </div>`
);

const newProductsCard = (src, description, price) => (`
<div class="card new-product item">
    <img class="card-img-top" src="${src}" alt="Card image cap">
    <div class="card-body">
        <p class="card-text price">${price}</p>    
        <p class="card-text">${description}</p>  
    </div>
</div>`
);

const reviewedProducts = () => (` 
    <div class="card">
        <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                card's content.</p>
            <button class="btn btn-primary">Go somewhere</button>
        </div>
    </div>`
)