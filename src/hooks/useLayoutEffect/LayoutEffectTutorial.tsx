import { useEffect, useLayoutEffect, useRef } from "react";

export const LayoutEffectTutorial = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    console.log(inputRef.current?.value);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = "Second";
    }
  }, []);

  return (
    <div>
      <input defaultValue="First" ref={inputRef} readOnly />
    </div>
  );
};
