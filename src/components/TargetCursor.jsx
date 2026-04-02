import React, { useState, useEffect, useRef, useCallback } from 'react';

const TargetCursor = ({
  spinDuration = 2,
  hideDefaultCursor = true,
  parallaxOn = true,
  hoverDuration = 0.2
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef(null);
  const rafId = useRef(null);
  const isHoveringRef = useRef(false);

  const updatePosition = useCallback((e) => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
    
    rafId.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      updatePosition(e);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isVisible, updatePosition]);

  useEffect(() => {
    const clickableSelectors = [
      '.nav__link', '.nav__mobile-link', '.nav__logo', '.btn', '.nav__burger',
      '.projects__scroll-btn', '.scroll-to-top', '.project-card', '.contact__link',
      'button', 'a[href]', '[role="button"]', 'input[type="button"]', 
      'input[type="submit"]', '.cursor-target'
    ].join(',');

    const handleMouseOver = (e) => {
      if (e.target.matches(clickableSelectors) || e.target.closest(clickableSelectors)) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true;
          setIsHovering(true);
        }
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches(clickableSelectors) || e.target.closest(clickableSelectors)) {
        if (isHoveringRef.current) {
          isHoveringRef.current = false;
          setIsHovering(false);
        }
      }
    };

    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    if (hideDefaultCursor) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [hideDefaultCursor]);

  return (
    <>
      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .target-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #c0392b;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform ${hoverDuration}s ease, width ${hoverDuration}s ease, height ${hoverDuration}s ease, border-width ${hoverDuration}s ease;
          animation: spin ${spinDuration}s linear infinite;
          will-change: transform;
        }
        
        .target-cursor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: #c0392b;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }
        
        .target-cursor::after {
          content: '';
          position: absolute;
          top: -4px;
          left: 50%;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 8px solid #c0392b;
          transform: translateX(-50%);
        }
        
        .target-cursor.hovering {
          width: 60px;
          height: 60px;
          border-color: #a93226;
          border-width: 3px;
        }
        
        .target-cursor.hovering::before {
          width: 12px;
          height: 12px;
          background: #a93226;
        }
        
        .target-cursor.hovering::after {
          border-top-width: 12px;
        }
        
        .cursor-target,
        .nav__link,
        .nav__mobile-link,
        .nav__logo,
        .btn,
        .nav__burger,
        .projects__scroll-btn,
        .scroll-to-top,
        .project-card,
        .contact__link,
        button,
        a[href],
        [role="button"],
        input[type="button"],
        input[type="submit"] {
          cursor: none !important;
          transition: all 0.3s ease;
        }
        
        .nav__link:hover,
        .nav__mobile-link:hover,
        .nav__logo:hover,
        .btn:hover,
        .nav__burger:hover,
        .projects__scroll-btn:hover,
        .scroll-to-top:hover,
        .project-card:hover,
        .contact__link:hover,
        button:hover,
        a[href]:hover,
        [role="button"]:hover,
        input[type="button"]:hover,
        input[type="submit"]:hover,
        .cursor-target:hover {
          transform: scale(1.02);
        }
      `}</style>
      
      <div
        ref={cursorRef}
        className={`target-cursor ${isHovering ? 'hovering' : ''}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%)`
        }}
      />
    </>
  );
};

export default TargetCursor;
