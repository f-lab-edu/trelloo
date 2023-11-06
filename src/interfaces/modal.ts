import {type ComponentType} from "react";

export interface ModalState<TProps = any> {
  component: ComponentType<TProps>;
  props: TProps;
  index: number;
  options?: {
    hasOverlay?: boolean;
    top?: number;
    left?: number;
  };
}

export type OpenModalState = Omit<ModalState, "index">;
export type CloseModalState = Pick<ModalState, "component" | "index">;
