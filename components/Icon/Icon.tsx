import React from "react";
import clsx from "clsx";
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IconName } from "./types";

type IconProps = {
  name: IconName;
  className?: string;
  solid?: boolean;
};

function Icon({ name, className, solid = false }: IconProps) {
  const HeroIcon: ComponentType<{ className?: string }> = solid
    ? dynamic(() =>
        import("@heroicons/react/24/outline").then((mod) => mod[name])
      )
    : dynamic(() =>
        import("@heroicons/react/24/solid").then((mod) => mod[name])
      );

  return <HeroIcon className={clsx("h-4 w-4", className)} aria-hidden={true} />;
}

export default Icon;
