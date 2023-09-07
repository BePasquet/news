import { ArrowOutward, Edit } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

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
      <Tooltip title="Edit">
        <IconButton onClick={onEditClick}>
          <Edit sx={{ color: '#ccc' }} fontSize="medium" />
        </IconButton>
      </Tooltip>

      <Tooltip title="Open">
        <IconButton onClick={onNavigateClick}>
          <ArrowOutward sx={{ color: '#ccc' }} fontSize="medium" />
        </IconButton>
      </Tooltip>
    </>
  );
}
