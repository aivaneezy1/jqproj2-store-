const urlParams = new URLSearchParams(window.location.search);
const editProduct = async () => {
  const id = urlParams.get("id");

  const Product = $("#Product").val();
  const Price = parseInt($("#Price").val(), 10);
  const Rating = parseFloat($("#Rating").val());
  const Company = $("#Company").val();
  const Feature = $("#Feature").is(":checked");

  try {
    const res = await axios.patch(`/api/v1/products/${id}`, {
      name: Product,
      price: Price,
      featured: Feature,
      rating: Rating,
      company: Company,
    });
    if (res.status == 200) {
      window.location.replace("/");
    }
    console.log("res", res);
  } catch (err) {
    console.log("Error:", err.response?.data || err.message);
  }
};

const editVals = () => {
  const prod = urlParams.get("prod");
  const price = urlParams.get("pric");
  const rat = urlParams.get("rat");
  const comp = urlParams.get("comp");
  const feat = urlParams.get("feat");
  $("#Product").val(prod);
  $("#Price").val(price);
  $("#Rating").val(rat);
  $("#Company").val(comp);
  $("#Feature").val(feat);
};

$(function () {
  editVals();
});

$("#submit").on("click", (e) => {
  e.preventDefault();
  editProduct();
});
