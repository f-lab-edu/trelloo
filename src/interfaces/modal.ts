export interface ModalState<TProps = any> {
  component: React.ComponentType<TProps>;
  props: TProps;
  options?: {
    isMultiple?: boolean;
  };
}
