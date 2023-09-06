import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';
import { ChangeEvent, useRef, useState } from 'react';

export interface SearchBarProps {
  initialValue: string;
  onChange: (value: string) => void;
  debounceTime?: number;
}

export function SearchBar({
  initialValue,
  onChange,
  debounceTime = 0,
}: SearchBarProps) {
  const timeoutIdRef = useRef<NodeJS.Timeout>();
  const [value, setValue] = useState(initialValue);

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const newValue = ev.target.value;
    setValue(newValue);

    if (debounceTime <= 0) {
      onChange(newValue);
      return;
    }

    clearTimeout(timeoutIdRef.current);

    timeoutIdRef.current = setTimeout(() => {
      onChange(newValue);
    }, debounceTime);
  };

  return (
    <TextField
      value={value}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
}
