import { Stack } from "@mui/material";
import { IcButton, IcToast, IcToastRegion } from "@ukic/react";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { popToast, pushToast, selectToastMessages } from "../state/toast";

export const ToastTestPage = () => {
  const dispatch = useAppDispatch();

  // App State
  // const toastMessages: string[] = useAppSelector(selectToastMessages);

  // Local State
  const [toastMessages, setToastMessages] = useState<string[]>([]);
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  // Refs
  const toastRegionEl = useRef<HTMLIcToastRegionElement | null>(null);
  const toastEl = useRef<HTMLIcToastElement | null>(null);

  const onClick = (): void => {
    // dispatch(pushToast("Hello!"));
    setToastMessages([...toastMessages, "new"]);
  };

  const showToastOne = (): void => {
    if (toastRegionEl.current === null || toastEl.current === null) {
      return;
    }

    toastRegionEl.current.openToast = toastEl.current;
  };

  const onToastMessageChange = () => {
    if (toastMessages.length > 0) {
      setToastOpen(true);
    }
  };

  const onToastOpenChange = (): void => {
    console.log("onToastOpenChange:", toastOpen);
    if (toastOpen) {
      showToastOne();
    }
  };

  const onToastDismiss = (): void => {
    console.log("onToastDismiss:", toastMessages);
    // dispatch(popToast());
    setToastMessages(toastMessages.slice(1));
    setToastOpen(false);
  };

  useEffect(onToastMessageChange, [toastMessages]);
  useEffect(onToastOpenChange, [toastOpen]);

  // Derived
  let message = "";

  if (toastOpen && toastMessages.length > 0) {
    message = toastMessages[0];
  }

  return (
    <Stack p={2} spacing={2}>
      <IcButton onClick={onClick}>Display toast component</IcButton>
      <IcToastRegion ref={toastRegionEl}>
        <IcToast heading={message} ref={toastEl} onIcDismiss={onToastDismiss} />
      </IcToastRegion>
      {JSON.stringify(toastMessages)}
    </Stack>
  );
};

export default ToastTestPage;
