import { useEffect } from "react";
import reset from "./resetScroll";

export default function useScroll(pathname: unknown) {
  // 副作用函数的方式
  useEffect(reset, [pathname]); // 依赖项是pathname
}
