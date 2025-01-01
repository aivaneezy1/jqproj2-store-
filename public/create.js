const createProduct = async () => {
  const Product = $("#Product").val();
  const Price = parseInt($("#Price").val(), 10);
  const Rating = parseFloat($("#Rating").val());
  const Company = $("#Company").val();
  const Feature = $("#Feature").is(":checked");

  try {
    const res = await axios.post("/api/v1/products", {
      name: Product,
      price: Price,
      featured: Feature,
      rating: Rating,
      company: Company,
    });
    if (res.status == 200) {
      window.location.replace("/");
    }
  } catch (err) {
    console.log("Error:", err.response?.data || err.message);
  }
};

$("#submit").on("click", (e) => {
  e.preventDefault();
  createProduct();
});
