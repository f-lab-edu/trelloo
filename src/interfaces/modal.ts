import { LoadableComponent } from "@loadable/component";

type ModalContentsKey = "cardDetailModal" | "inviteToWorkspaceModal";
export type ModalContents<TProps> = Record<ModalContentsKey, LoadableComponent<TProps>>;

export interface ModalState<TProps = any> {
  component: ModalContentsKey;
  props?: TProps;
  index: number;
  options?: {
    hasOverlay?: boolean;
    top?: number;
    left?: number;
  };
}

export type OpenModalState = Omit<ModalState, "index">;
export type CloseModalState = Pick<ModalState, "component" | "index">;
