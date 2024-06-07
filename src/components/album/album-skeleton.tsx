import { Skeleton, Stack } from "@mui/material";

export const MusixAlbumSkeleton = () => (
  <Stack direction="column" padding={1}>
    <Skeleton variant="rounded" width="100%" height={215} />
  </Stack>
);

export default MusixAlbumSkeleton;
