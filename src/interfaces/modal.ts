type ModalContentsKey = "cardDetailModal" | "inviteToWorkspaceModal";

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
