import { Stack } from "@mui/material";
import { IcButton } from "@ukic/react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import SnackBar from "../components/snackbar";
import { pushToast, selectToastMessages } from "../state/toast";

export const ToastTestPage = () => {
  const dispatch = useAppDispatch();

  const onAddToast = () => dispatch(pushToast("Hello!"));

  return (
    <Stack p={2} spacing={2}>
      <IcButton onClick={onAddToast}>Say Hello!</IcButton>
      <SnackBar />
    </Stack>
  );
};

export default ToastTestPage;
