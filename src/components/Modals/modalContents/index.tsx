import loadable, { LoadableComponent } from "@loadable/component";

interface ModalContents<TProps> {
  [component: string]: LoadableComponent<TProps>;
}

const CardDetail = loadable(() => import("@components/modals/CardDetailModal"));

export const modalContents: ModalContents<any> = {
  cardDetailModal: CardDetail,
};
