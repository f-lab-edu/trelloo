import loadable from "@loadable/component";

const CardDetail = loadable(() => import("@components/modals/CardDetailModal"));

interface ModalContents {
  [component: string]: any;
}

export const modalContents: ModalContents = {
  cardDetailModal: CardDetail,
};
