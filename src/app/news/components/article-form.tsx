import { Button, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { FlexColumnContainer } from 'src/app/shared/components/flex-column-container';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';

export interface ArticleFormProps {
  initialValue: Article | null;
  onSubmit: (value: string) => void;
  onCancel: () => void;
}

export function ArticleForm({
  initialValue,
  onSubmit,
  onCancel,
}: ArticleFormProps) {
  const [value, setValue] = useState(initialValue?.title ?? '');

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setValue(ev.target.value);

  const handleSubmit = () => onSubmit(value);

  return (
    <FlexColumnContainer>
      <TextField value={value} onChange={handleChange} variant="standard" />
      <ButtonContainer>
        <Button onClick={onCancel} style={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Save
        </Button>
      </ButtonContainer>
    </FlexColumnContainer>
  );
}

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
