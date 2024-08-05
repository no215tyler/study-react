import { useEffect } from "react";

export const useBgLightBlue = () => {
  // マウント処理
  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    
    // アンマウント処理
    return () => {
      document.body.style.backgroundColor = "";      
    }
  }, []); // , [count, foo, bar, hoge] この変数の値に変更が生じた場合にuseEffectの処理が走る
};
