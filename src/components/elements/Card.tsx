import { Quote } from "lucide-react";

interface TestimonialUser {
  name: string;
  job: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

interface CardQuoteProps {
  users: TestimonialUser[];
  columns?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  showQuoteIcon?: boolean;
  maxNameLength?: number;
}

const CardQuote = ({ 
  users, 
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  showQuoteIcon = true,
  maxNameLength = 10
}: CardQuoteProps) => {
  
  const truncateName = (name: string) => {
    if (name.length > maxNameLength) {
      return name.slice(0, maxNameLength) + '...';
    }
    return name;
  };

  const getGridCols = () => {
    const { mobile = 1, tablet = 2, desktop = 3 } = columns;
    return `grid-cols-${mobile} md:grid-cols-${tablet} lg:grid-cols-${desktop}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className={`grid ${getGridCols()} gap-8`}>
        {users.map((user, index) => (
          <div
            key={index}
            className="testimonial-card bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between mb-6">
              {/* Avatar & User Info */}
              <div className="flex gap-6 items-start">
                <div className="avatar-gradient relative shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-white">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 text-xl" title={user.name}>
                    {truncateName(user.name)}
                  </h4>
                  <p className="text-cyan-600 font-medium text-sm">
                    {user.job}
                  </p>
                  <p className="text-gray-500 text-sm">{user.company}</p>
                </div>
              </div>

              {/* Quote Icon */}
              {showQuoteIcon && (
                <div className="animate-bounce shrink-0 ml-4">
                  <div className="bg-linear-to-br from-cyan-400 to-cyan-600 rounded-full p-3 shadow-lg">
                    <Quote className="text-white w-6 h-6" />
                  </div>
                </div>
              )}
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {[...Array(user.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote Text */}
            <p className="text-gray-700 leading-relaxed italic">
              "{user.quote}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export interface untuk digunakan di komponen lain
export type { TestimonialUser };
export default CardQuote;