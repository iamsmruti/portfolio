import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from "gsap";

const FromAnimation = ({ children, vars }) => {
  const el = useRef();
  const animation = useRef();
  
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      animation.current = gsap.from(el.current.children, { 
        ...vars,
      })
    });
    return () => ctx.revert();       
  }, []);
  
  return <span ref={el}>{children}</span>;
}

export default FromAnimation