import React from 'react';

const posterUrl = "https://storage.googleapis.com/garden-prod/_next/static/media/breakfast-at-tiffany.e04a11f9.jpeg";

// 컴포넌트 이름을 대문자로 시작하도록 변경
const MoviePoster: React.FC = () => {
  return (
    <div className="bg-[#fdf6e8] min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 font-['Cormorant_Garamond',_serif]">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden transition-all duration-500 ease-in-out">
        
        {/* Left Side: Image */}
        <div className="md:w-5/12 w-full">
          <img
            src={posterUrl}
            alt="Breakfast at Tiffany's Movie Poster"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="md:w-7/12 w-full p-8 md:p-12 flex flex-col justify-center bg-[#fefbf6]">
          <div className="mb-8">
            <h1 className="font-['Great_Vibes',_cursive] text-6xl md:text-8xl text-[#3a3a3a]">
              Breakfast
            </h1>
            <h2 className="text-4xl md:text-5xl text-[#5DB9AD] tracking-[0.2em] uppercase -mt-4 ml-1 font-light">
              at Tiffany's
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-800">
            <div className="flex items-end">
              <span className="font-bold w-28 shrink-0 text-gray-500 uppercase text-sm tracking-wider">Actress</span>
              <span className="flex-1 border-b-2 border-dotted border-[#e1c4c2] pb-1 text-xl">Audrey Hepburn</span>
            </div>
            <div className="flex items-end">
              <span className="font-bold w-28 shrink-0 text-gray-500 uppercase text-sm tracking-wider">Year</span>
              <span className="flex-1 border-b-2 border-dotted border-[#e1c4c2] pb-1 text-xl">1961</span>
            </div>
            <div className="flex items-end">
              <span className="font-bold w-28 shrink-0 text-gray-500 uppercase text-sm tracking-wider">Genre</span>
              <span className="flex-1 border-b-2 border-dotted border-[#e1c4c2] pb-1 text-xl">Romance, Comedy</span>
            </div>
          </div>

           <div className="mt-12 border-t-2 border-[#e1c4c2] pt-6">
                <p className="italic text-gray-600 text-base leading-relaxed">
                    "A classic tale of a young New York socialite who becomes interested in a young man who has moved into her apartment building, but her past threatens to get in the way."
                </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
