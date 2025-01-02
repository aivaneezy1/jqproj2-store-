const product = async () => {
  const url = new URL(window.location.href);

  const id = url.searchParams.get("id");
  const item = $("#item");
  try {
    const res = await axios.get(`/api/v1/products/${id}`);
    console.log("res", res);
    const product = res.data;
    const productHTML = `
      <div class="card  border-primary h-100 p-3">
        <img class="card-img-top" src="/assets/images.jpg">
        <div class="card-body">
          <h5 class="title">${product.name}</h5>
          <p class="card-text">$${product.price}</p>
          <p class="card-text">Rating: ${product.rating}</p>
          <p class="card-text">Company: ${product.company}</p>
          <a href="edit.html?id=${product._id}&prod=${product.name}&pric=${product.price}&rat=${product.rating}&comp=${product.company}&feat=${product.featured}" class="btn btn-success">Edit Product<a/>
          <a href="/" class="btn btn-primary">Home Page<a/> 
        </div>
      </div>
    `;
    item.append(productHTML);
  } catch (err) {
    console.log(err);
  }
};

$(function () {
  product();
});
