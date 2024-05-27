import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = (props: { onSubmit?: (query: string) => void }) => {
  // Props
  const onSubmit = props.onSubmit || (() => {});
  // State
  const [query, setQuery] = useState<string>("");

  return (
    <Paper
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 500,
        borderRadius: "24px",
      }}
    >
      <Box
        sx={{ display: "inline-flex", p: "10px", color: "rgba(0, 0, 0, 0.26)" }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            onSubmit(query);
          }
        }}
      />
    </Paper>
  );
};

const SearchButton = (props: { text: string }) => {
  return (
    <Button
      size="medium"
      sx={{
        textTransform: "none",
        color: "#3c4043",
        backgroundColor: "#f8f9fa",
      }}
      disabled
    >
      {props.text}
    </Button>
  );
};

export const SearchPage = () => {
  const navigate = useNavigate();

  const onSubmit = (query: string): void => {
    navigate(`/search?q=${query}`);
  };

  return (
    <Stack spacing={3} sx={{ alignItems: "center", height: "100%", mt: 20 }}>
      <img src="youtube-music-logo.png" style={{ maxHeight: "92px" }} />
      <SearchBox onSubmit={onSubmit} />
      <Stack spacing={2} direction="row" sx={{ justifyContent: "center" }}>
        <SearchButton text="Google Search" />
        <SearchButton text="I'm Feeling Lucky" />
      </Stack>
    </Stack>
  );
};

export default SearchPage;
