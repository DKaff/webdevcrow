"use client";

import { Typewriter } from 'react-simple-typewriter';

export default function TypingIntro() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-center">
      <span>{'Features: '}</span>
      <br />
      <span className="text-blue-500">
        <Typewriter
          words={[
            'Seamless user experience',
            'Real-time updates',
            'Personalized content',
            'Interactive features',
            'Database connection',
            'Engaging and smart',
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h2>
  );
}
