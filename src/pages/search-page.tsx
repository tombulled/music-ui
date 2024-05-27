import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchPage = () => {
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");

  const onSubmit = (): void => {
    navigate(`/search?q=${query}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        p: 5,
      }}
    >
      <TextField
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={() => console.log("Submit")}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            onSubmit();
          }
        }}
      />
    </Box>
  );
};

export default SearchPage;
