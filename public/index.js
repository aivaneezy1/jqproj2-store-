const getAllProduct = async () => {
  const productList = $("#productItems");
  try {
    const res = await axios.get("http://localhost:8082/api/v1/products");

    const products = res.data;
    $("#productsLen").html(
      `<strong>${products.length} Products Found</strong>`
    );
    const productHTML = products.map(
      (p) => `
      <div class="col-4 my-2">
        <div class="card border-primary h-100 p-3">
          <img class="card-img-top" src=${"/assets/images.jpg"} alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">$${p.price}</p>
          </div>
          <a class="btn btn-primary">View Product</a>
        </div>
      </div>
    `
    );

    productList.html(productHTML);
  } catch (err) {
    console.log(err);
  }
};

$(function () {
  getAllProduct();
});
