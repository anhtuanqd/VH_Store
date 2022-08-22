class Product {
  constructor(id, imgUrl, alt, title, price, content, star, review) {
    this.id = id;
    this.imgUrl = imgUrl;
    this.alt = alt;
    this.title = title;
    this.price = price;
    this.content = content;
    this.star = star;
    this.review = review;
  }
}
module.exports = Product;
