import React from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';
import { Review } from '../types';

const reviews: Review[] = [
  { id: 1, name: "Sonam Vyas", role: "Local Guide", content: "Awesome store, one-stop destination. Good quality brand collection, exclusive and affordable rates.", rating: 5 },
  { id: 2, name: "Rahul M.", role: "Verified Athlete", content: "They guide you to choose the best-suited product for your skill level rather than the most expensive one.", rating: 5 },
  { id: 3, name: "Amit Patel", role: "Professional Coach", content: "The owner is very committed. The bat repair service is top-notch. A healthy environment for sports lovers.", rating: 5 },
  { id: 4, name: "Priya Shah", role: "Parent", content: "Wide variety of equipment. It really is a one-stop-shop for my kids' school sports needs.", rating: 4 },
];

export const Reviews: React.FC = () => {
  return (
    <div className="bg-diamond-light min-h-screen">
       <div className="bg-diamond-navy text-white py-20 text-center">
        <h1 className="font-sport text-5xl font-black uppercase italic mb-4">Community Voice</h1>
        <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full">
            <span className="font-bold text-3xl text-diamond-gold">4.6</span>
            <div className="flex gap-1"><Star fill="#fbbf24" className="text-diamond-gold" size={20}/><Star fill="#fbbf24" className="text-diamond-gold" size={20}/><Star fill="#fbbf24" className="text-diamond-gold" size={20}/><Star fill="#fbbf24" className="text-diamond-gold" size={20}/><Star fill="currentColor" className="text-gray-500" size={20}/></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 border-l-8 border-diamond-navy shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < review.rating ? "#fbbf24" : "none"} className={i < review.rating ? "text-diamond-gold" : "text-gray-200"} />
                  ))}
                </div>
                <Quote className="text-gray-200 group-hover:text-diamond-navy transition-colors" size={32} />
              </div>
              
              <p className="text-lg text-gray-700 font-medium mb-6 leading-relaxed">"{review.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-gradient-to-br from-diamond-navy to-black rounded-full flex items-center justify-center text-white font-sport font-bold text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-diamond-navy uppercase text-sm">{review.name}</h4>
                  <span className="text-xs font-bold text-diamond-gold uppercase tracking-wider">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};