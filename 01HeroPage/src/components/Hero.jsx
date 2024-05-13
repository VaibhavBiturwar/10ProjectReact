export default function Hero() {
  return (
    <div className="heroCtr">
      <div className="heroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="shopCtr">
          <button className="actionBtn">Shop Now</button>
          <button className="actionBtnSecondary">Category</button>
        </div>
        <div className="marketPlace">
          <img src="/amazon.png" alt="amazon_logo" />
          <img src="/flipkart.png" alt="flipkart_logo" />
        </div>
      </div>

      <div className="heroImage">
        <img src="/shoe_image.png" alt="shoe" />
      </div>
    </div>
  );
}
