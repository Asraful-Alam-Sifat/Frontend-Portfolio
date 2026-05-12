import React from 'react';

const Banner = () => {
    return (
        <div>
             <div className="relative w-full h-screen overflow-hidden bg-[#050505]blur-[100px] opacity-70">
      {/* 1. The Grid Layer - ALL OVER, NO MASK */}
      <div className="absolute inset-0 z-0 h-full w-full 
        bg-[linear-gradient(to_right,#5bba6f_1px,transparent_1px),linear-gradient(to_bottom,#5bba6f_1px,transparent_1px)] 
        bg-[size:70px_70px] opacity-15">
      </div>

      {/* 2. THE SUBTLE GLOW LAYER HAS BEEN REMOVED */}

      {/* 3. Content Placeholder */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
         <h1 className="text-white text-4xl font-bold">Grid is now a sharp box everywhere!</h1>
      </div>
    </div>
        </div>
    );
};

export default Banner;