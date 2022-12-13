import React from 'react';
import { useSpring, animated } from 'react-spring';

export const Number = ({ balance }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: balance,
    delay: 200,
    config: {
      mass: 1,
      tension: 20,
      friction: 10,
    },
  });
  return (
    <animated.div
      style={{
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '700',
        fontSize: '30px',
        lineHeight: '1.5',
        color: '#000000',
      }}
    >
      
      {number.to(balance => balance?.toFixed(2))}
    </animated.div>
  );
};
