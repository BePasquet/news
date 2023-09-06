import { ArrowOutward, Edit } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
        <Edit sx={{ color: '#ccc' }} fontSize="medium" />
      </IconButton>

      <IconButton onClick={onNavigateClick}>
        <ArrowOutward sx={{ color: '#ccc' }} fontSize="medium" />
      </IconButton>
    </>
  );
}
