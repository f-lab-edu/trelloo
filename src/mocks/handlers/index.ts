import authHandlers from "./auth";
import cardsHandlers from "./cards";

const handlers = [...cardsHandlers, ...authHandlers];

export default handlers;
