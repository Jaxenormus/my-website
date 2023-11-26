import type { ImageMetadata } from "astro";
import { useCallback, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

interface ImagePopoverProps {
  children: string;
  image: ImageMetadata;
}

export const ImagePopover = (props: ImagePopoverProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const spring = useSpring({
    opacity: isHovering ? 1 : 0,
    transform: isHovering ? "scale(1)" : "scale(0.9)",
    display: isHovering ? "block" : "none",
    config: { mass: 1, tension: 500, friction: 30 },
  });

  const onMouseEnter = useCallback(() => {
    setIsHovering(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHovering(false);
  }, []);

  return (
    <div className="relative w-full">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {props.children}
      </div>
      <div className="absolute z-10 pt-2">
        <animated.div
          style={spring}
          className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden"
        >
          <div className="flex items-center justify-between p-3 bg-zinc-800/90">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            </div>
          </div>
          <img className="w-[500px]" {...props.image} />
        </animated.div>
      </div>
    </div>
  );
};
