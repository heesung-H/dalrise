import React, { useState, useCallback } from 'react';

const useInput = (
  initialValue: string,
): {
  value: string;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
} => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, handler, setValue };
};

export default useInput;
