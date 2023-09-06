import { useEffect, useState } from "react";

const useDebounce = (value: string, delay = 500) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    }; // value 변경 시점에 clearTimeout 실행
  }, [value]);

  return { debounceValue, setDebounceValue };
};
export default useDebounce;
