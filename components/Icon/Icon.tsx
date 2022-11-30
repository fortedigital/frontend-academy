import React, { SVGAttributes } from "react";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IconName } from "./types";

interface IconProps {
  name: IconName;
  size?: string | number;
  solid?: boolean;
  className?: string;
}

function Icon({ name, size = "1em", solid = false, className }: IconProps) {
  const HeroIcon: ComponentType<SVGAttributes<SVGElement>> = solid
    ? dynamic(() =>
        import("@heroicons/react/24/outline").then((mod) => mod[name])
      )
    : dynamic(() =>
        import("@heroicons/react/24/solid").then((mod) => mod[name])
      );

  return (
    <HeroIcon
      width={size}
      height={size}
      className={className}
      aria-hidden={true}
    />
  );
}

export default Icon;
