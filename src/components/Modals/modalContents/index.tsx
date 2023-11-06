import loadable from "@loadable/component";
import { ModalContents } from "@/interfaces/modal";

const CardDetailModal = loadable(() => import("@components/modals/CardDetailModal"));
const InviteToWorkspaceModal = loadable(() => import("@components/modals/InviteToWorkspaceModal"));

export const modalContents: ModalContents<any> = {
  cardDetailModal: CardDetailModal,
  inviteToWorkspaceModal: InviteToWorkspaceModal,
};
