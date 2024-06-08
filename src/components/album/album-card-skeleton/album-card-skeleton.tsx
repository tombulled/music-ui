import { Card, CardContent, Skeleton } from "@mui/material";

export const AlbumCardSkeleton = () => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "10px",
        padding: 1,
      }}
    >
      <Skeleton
        sx={{ height: "100%", aspectRatio: "1 / 1", borderRadius: "10px" }}
        variant="rectangular"
      />
      <CardContent sx={{ px: 0, py: 1, "&:last-child": { pb: 0 } }}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
        <Skeleton variant="text" sx={{ fontSize: "0.875rem" }} />
      </CardContent>
    </Card>
  );
};

export default AlbumCardSkeleton;
