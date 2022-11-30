import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";

interface SlideoverDialogProps {
  open: boolean;
  onClose: () => void;
  anchor?: "left" | "right";
  className?: string;
  panelClassName?: string;
  overlayClassName?: string;
  children?: React.ReactNode;
}

export default function SlideoverDialog({
  open,
  onClose,
  anchor = "left",
  className,
  panelClassName,
  overlayClassName,
  children,
}: SlideoverDialogProps) {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog onClose={onClose} className={className}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className={clsx("fixed inset-0 z-10 bg-black/25", overlayClassName)}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="transition-transform duration-500 ease-in-out"
          enterFrom={
            anchor === "left" ? "-translate-x-full" : "translate-x-full"
          }
          enterTo="translate-x-0"
          leave="transition-transform duration-300 ease-out"
          leaveFrom="translate-x-0"
          leaveTo={anchor === "left" ? "-translate-x-full" : "translate-x-full"}
        >
          <Dialog.Panel
            className={clsx(
              "pointer-events-auto fixed inset-y-0 z-10 flex max-w-full bg-white shadow-2xl",
              anchor === "left" ? "left-0" : "right-0",
              panelClassName
            )}
          >
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
