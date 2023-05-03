import loadable from "@loadable/component";

const CardDetailModal = loadable(async () => await import("@components/modals/CardDetailModal"));
const InviteToWorkspaceModal = loadable(async () => await import("@components/modals/InviteToWorkspaceModal"));

export const modalContents = {
  cardDetailModal: CardDetailModal,
  inviteToWorkspaceModal: InviteToWorkspaceModal,
};
