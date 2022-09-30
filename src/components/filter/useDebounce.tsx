import { useState, useEffect } from "react";

export default function useDebounce<T>(
  initialValue: T, //this will be string
  time: number
): [T, T, React.Dispatch<T>] {
  //this sets the string of value first
  const [value, setValue] = useState<T>(initialValue);

  //this will be done by useEffect. We provide the time to delay the debounced value
  //this will trigger 1 second AFTER we typed in value
  //value and debounced value are STRINGS, from the input value text
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  //time argument is passed here for setTime out to delay its useState for debounced.
  useEffect(() => {
    const debounce = setTimeout(() => {
      setDebouncedValue(value);
    }, time);
    return () => {
      clearTimeout(debounce);
    };
  }, [value, time]);

  return [debouncedValue, value, setValue];
}

/*
Custom Hooks, take advantage of two things
1. useState
2. useEffect

*/
