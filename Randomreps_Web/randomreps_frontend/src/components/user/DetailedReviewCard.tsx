// src/components/DetailedReviewCard.tsx
import { FaStar, FaStarHalfAlt, FaCheckCircle } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";

interface DetailedReviewCardProps {
  name: string;
  rating: number;
  date: string;
  text: string;
}

export default function DetailedReviewCard({
  name,
  rating,
  date,
  text,
}: DetailedReviewCardProps) {
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
    <div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex text-lg gap-1">{renderStars()}</div>
        <button className="text-gray-400 hover:text-black">
          <FiMoreHorizontal className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <h3 className="font-heading font-bold text-xl text-brand-black">
          {name}
        </h3>
        <FaCheckCircle className="text-green-500 text-lg" />
      </div>

      <p className="text-brand-textMuted leading-relaxed text-sm md:text-base mb-6 flex-grow">
        "{text}"
      </p>

      <p className="text-brand-textMuted font-medium text-sm">
        Posted on {date}
      </p>
    </div>
  );
}
