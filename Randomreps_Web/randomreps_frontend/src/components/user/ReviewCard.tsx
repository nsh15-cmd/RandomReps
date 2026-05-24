// src/components/ReviewCard.tsx
import { FaStar, FaCheckCircle } from "react-icons/fa";

interface ReviewCardProps {
  name: string;
  rating: number;
  text: string;
}

export default function ReviewCard({ name, rating, text }: ReviewCardProps) {
  return (
    // Changed to a strict width (w-[320px] on mobile, w-[400px] on desktop) to prevent stretching
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 w-[320px] md:w-[400px] flex-shrink-0 snap-center shadow-sm">
      {/* 5 Stars */}
      <div className="flex gap-1.5 text-accent-star mb-4 text-lg">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      {/* Name & Verified Badge */}
      <div className="flex items-center gap-2 mb-3">
        {/* Added 'normal-case' to prevent "SARAH M." */}
        <h3 className="font-heading font-bold text-xl text-brand-black normal-case">
          {name}
        </h3>
        <FaCheckCircle className="text-green-500 text-lg" />
      </div>

      {/* Review Text */}
      <p className="text-brand-textMuted leading-relaxed text-sm md:text-base whitespace-normal">
        "{text}"
      </p>
    </div>
  );
}
