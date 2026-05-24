// src/components/ProductCard.tsx
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom"; // 1. Import Link

interface ProductCardProps {
  id: number; // 2. Add the ID to the props
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  imageUrl: string;
}

// 3. Make sure 'id' is extracted here in the function arguments!
export default function ProductCard({
  id,
  title,
  price,
  originalPrice,
  discount,
  rating,
  imageUrl,
}: ProductCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-accent-star" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-accent-star" />);
    }
    return stars;
  };

  return (
    // 4. Change this from a <div> to a <Link> and point it to the dynamic URL
    <Link
      to={`/product/${id}`}
      className="flex flex-col group cursor-pointer block"
    >
      <div className="bg-[#F0EEED] rounded-2xl aspect-square overflow-hidden mb-4 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
      </div>

      <h3 className="font-heading font-bold text-lg text-brand-black mb-1 truncate">
        {title}
      </h3>

      <div className="flex items-center gap-2 mb-2">
        <div className="flex text-sm">{renderStars()}</div>
        <span className="text-sm text-brand-textMuted">{rating}/5</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="font-heading font-bold text-2xl text-brand-black">
          ₱{price}
        </span>

        {originalPrice && (
          <span className="font-heading font-bold text-2xl text-brand-textMuted line-through opacity-60">
            ₱{originalPrice}
          </span>
        )}

        {discount && (
          <span className="bg-accent-discountBg text-accent-discountText text-xs font-bold px-3 py-1 rounded-full">
            {discount}
          </span>
        )}
      </div>
    </Link>
  );
}
