import { useEffect, FC } from 'react';

interface ChildProps {
  returnComment: (name: string) => string;
}

export const Child: FC<ChildProps> = ({ returnComment }) => {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>;
}
