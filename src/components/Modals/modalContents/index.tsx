import loadable from "@loadable/component";

const CardDetailModal = loadable(() => import("@components/modals/CardDetailModal"));
const InviteToWorkspaceModal = loadable(() => import("@components/modals/InviteToWorkspaceModal"));

export const modalContents = {
  cardDetailModal: CardDetailModal,
  inviteToWorkspaceModal: InviteToWorkspaceModal,
};
