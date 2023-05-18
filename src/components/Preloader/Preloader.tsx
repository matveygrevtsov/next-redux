import cn from "classnames";

import s from "./Preloader.module.css";

interface Props {
  className?: string;
}

export function Preloader({ className }: Props) {
  return <div className={cn(s.root, className)} />;
}
