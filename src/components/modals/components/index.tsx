import loadable from "@loadable/component";

const CardDetailModal = loadable(() => import("@components/modals/components/CardDetailModal"));
const InviteToWorkspaceModal = loadable(() => import("@components/modals/components/InviteToWorkspaceModal"));

export const modals = {
  cardDetailModal: CardDetailModal,
  inviteToWorkspaceModal: InviteToWorkspaceModal,
};
