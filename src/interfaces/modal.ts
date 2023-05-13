import { ComponentType } from "react";

export interface ModalState<TProps = any> {
  component: ComponentType<TProps>;
  props?: Omit<TProps, "onClose">;
  index: number;
  options?: {
    hasOverlay?: boolean;
    top?: number;
    left?: number;
  };
}

export type OpenModalState<TProps> = Omit<ModalState<TProps>, "index">;
export type CloseModalState = Pick<ModalState, "component" | "index">;
