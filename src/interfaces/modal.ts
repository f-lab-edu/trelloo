export interface ModalState<TProps = any> {
  component: React.ComponentType<TProps>;
  props: TProps;
  isMultiple?: boolean;
}
