import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const router = useRouter();

  const bgColor = useMemo(() => {
    return router.pathname === '/' ? "lightblue" : "beige"
  }, [router.pathname]);

  // マウント処理
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    
    // アンマウント処理
    return () => {
      document.body.style.backgroundColor = "";      
    }
  }, [bgColor]); // , [count, foo, bar, hoge] この変数の値に変更が生じた場合にuseEffectの処理が走る
};
