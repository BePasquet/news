import { Search } from '@mui/icons-material';
import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

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

    timeoutIdRef.current = setTimeout(() => onChange(newValue), debounceTime);
  };

  return (
    <SearchBarContainer>
      <SearchInput value={value} onChange={handleChange} />
      <IconContainer>
        <Search sx={{ color: '#111' }} fontSize="small" />
      </IconContainer>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  background-color: #fff;
  border: none;
  padding: 10px 30px 10px 8px;
  border-radius: 20px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  outline: none;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
`;
