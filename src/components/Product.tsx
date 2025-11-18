
import { addToCart } from "../store/cart-slice.ts";
import { useCartDispatch } from "../store/hooks.ts";

import ImageCarousel from "./ImageCarousel";

type ProductProps = {
  id: string;
  image: string;         
  images?: string[];     
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id, image, images, title, price, description,
}: ProductProps) {
  const dispatch = useCartDispatch();

  const gallery = images && images.length > 0 ? images : [image];

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price, image: gallery[0] }));
  }

  return (
    <article className="product">
      <ImageCarousel images={gallery} alt={title} />

      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={handleAddToCart}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
}
