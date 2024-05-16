import { Button, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { increment } from "../state/counter";

export const SnackBarTestPage = () => {
  const dispatch = useAppDispatch();

  const count = useAppSelector((state) => state.counter.value);

  const onClick = () => {
    dispatch(increment());
  }

  return (
    <Stack>
      <h1>The count is: {count}</h1>
      <Button onClick={onClick}>Click Me!</Button>
    </Stack>
  );
};

export default SnackBarTestPage;
