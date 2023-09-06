import { ArrowOutward, Edit } from '@mui/icons-material';
import styled from 'styled-components';

export interface ArticleCardToolbarProps {
  onEditClick: () => void;
  onNavigateClick: () => void;
}

export function ArticleCardToolbar({
  onEditClick,
  onNavigateClick,
}: ArticleCardToolbarProps) {
  return (
    <>
      <IconButton onClick={onEditClick}>
        <Edit fontSize="medium" />
      </IconButton>

      <IconButton onClick={onNavigateClick}>
        <ArrowOutward fontSize="medium" />
      </IconButton>
    </>
  );
}

const IconButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  color: #ccc;
  cursor: pointer;
`;
