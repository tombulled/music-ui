import { IcToast, IcToastRegion } from "@ukic/react";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { popToast, selectToastMessages } from "../../state/slices/toast";

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const SnackBar = () => {
  const dispatch = useAppDispatch();

  // App State
  const toastMessages: string[] = useAppSelector(selectToastMessages);

  // Local State
  const [toastOpen, setToastOpen] = useState<boolean>(false);

  // References
  const toastRegionElement = useRef<HTMLIcToastRegionElement | null>(null);
  const toastElement = useRef<HTMLIcToastElement | null>(null);
  const previousToastMessages = usePrevious(toastMessages) || [];

  // Derived State
  const currentToastMessage = toastMessages.length > 0 ? toastMessages[0] : "";
  const isToastMessagesEmpty = toastMessages.length === 0;

  const onDismissToast = (): void => {
    dispatch(popToast());
  };

  const openToast = (): void => {
    // If the toast region or toast element references aren't known, we cannot open
    // the toast.
    if (toastRegionElement.current === null || toastElement.current === null) {
      return;
    }

    toastRegionElement.current.openToast = toastElement.current;
  };

  const onToastMessagesChange = () => {
    const isMessagePushed = previousToastMessages.length < toastMessages.length;
    const isMessagePopped = previousToastMessages.length > toastMessages.length;

    // If a toast message was pushed (aka. added), and a message isn't already
    // being displayed, request that the toast be opened.
    if (isMessagePushed && !toastOpen) {
      setToastOpen(true);
    }
    // If a toast message was popped (aka. removed), request that the toast be
    // closed
    else if (isMessagePopped && toastOpen) {
      setToastOpen(false);
    }
  };

  const onToastOpenChange = (): void => {
    // If the toast is to be opened, open the toast!
    if (toastOpen) {
      openToast();
    }
    // If the toast has been closed, open it again if there is a queued message.
    else if (!isToastMessagesEmpty) {
      setToastOpen(true);
    }
  };

  useEffect(onToastMessagesChange, [toastMessages]);
  useEffect(onToastOpenChange, [toastOpen]);

  return (
    <IcToastRegion ref={toastRegionElement}>
      <IcToast
        heading={currentToastMessage}
        ref={toastElement}
        onIcDismiss={onDismissToast}
      />
    </IcToastRegion>
  );
};

export default SnackBar;
