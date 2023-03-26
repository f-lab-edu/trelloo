export interface ModalState<TProps = any> {
  component: React.ComponentType<TProps>;
  props: TProps;
  options?: {
    hasOverlay?: boolean;
    top?: number;
    left?: number;
  };
}
