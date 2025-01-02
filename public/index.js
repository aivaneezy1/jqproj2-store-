const getAllProduct = async () => {
  const productList = $("#productItems");
  const companyQuery = $("#company").val();
  const featureQuery = $("#feature").val();
  const priceQuery = $("#price").val();
  console.log("price", priceQuery);
  try {
    const res = await axios.get(
      `http://localhost:8082/api/v1/products?featured=${featureQuery}&company=${companyQuery}&price=${priceQuery}`
    );

    const products = res.data.products;
    $("#productsLen").html(
      `<strong>${products.length} Products Found</strong>`
    );
    const productHTML = products.map(
      (p) => `
      <div class="col-4 my-2  ">
        <div class="card border-primary h-100 p-3"> 
          <img class="card-img-top" src=${"/assets/images.jpg"} alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5> 
            <p class="card-text">$${p.price}</p>
          </div>
          <a href="product.html?id=${
            p._id
          }" class="btn btn-primary">View Product</a>
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
  // Load all products when the page loads
  getAllProduct();

  // Listen for changes on the select element
  $("#company,#feature, #price").on("change", function () {
    getAllProduct();
  });
});
