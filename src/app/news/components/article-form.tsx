import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { Article } from '../data/interfaces/article.interface';

export interface ArticleFormProps {
  initialValue: Article | null;
  onSubmit: (title: string) => void;
  onCancel: () => void;
}

export function ArticleForm({
  initialValue,
  onSubmit,
  onCancel,
}: ArticleFormProps) {
  const [value, setValue] = useState(initialValue?.title ?? '');

  const error = !value
    ? 'Please enter a title'
    : value.length > 255
    ? 'Please enter a title with less than 255 characters'
    : null;

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) =>
    setValue(ev.target.value);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    onSubmit(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormControl error={!!error} required={true} variant="standard">
        <InputLabel>Title</InputLabel>
        <Input value={value} onChange={handleChange} />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>

      <ButtonContainer>
        <Button
          type="button"
          onClick={onCancel}
          style={{ marginRight: '10px' }}
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" disabled={!!error}>
          Save
        </Button>
      </ButtonContainer>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;
