import { Star } from "lucide-react";

export const RatingStars = () => {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="text-yellow-300 size-4" />
      ))}
    </div>
  );
};
