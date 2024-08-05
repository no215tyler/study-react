import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const[count, setCount] = useState<number>(1);
  const[isShow, setIsShow] = useState<boolean>(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount: number) => prevCount + 1);
    }
  }, [count]);

  const handleDisplay = useCallback((): void => {
    setIsShow((prevIsShow: boolean): boolean => !prevIsShow);
  }, [isShow]);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
