import useErrorHandler from "./useErrorHandler";
type ErrorFunctions = Record<number, Record<number | "default", () => void>>;

function useApiError(handlers?: any) {
  const errorHandlers = useErrorHandler();

  const defaultHandlers: ErrorFunctions = {
    500: {
      default: () => {
        errorHandlers.handleServerErrorType1();
      },
      13: () => {
        errorHandlers.handleServerErrorType1();
      },
      14: () => {
        errorHandlers.handleServerErrorType2();
      },
    },
    400: {
      default: () => {
        errorHandlers.handleBadRequestType1();
      },
      13: () => {
        errorHandlers.handleBadRequestType1();
      },
      21: () => {
        errorHandlers.handleBadRequestType2();
      },
    },
  };

  const getErrorCode = (errorMessage: string) => {
    const [statusString, detailString] = errorMessage.split(" ");

    const statusCode = parseInt(statusString.replace("status:", ""));
    const detailCode = parseInt(detailString.replace("detail:", ""));
    return { statusCode, detailCode };
  };

  const handleError = (error: Error) => {
    const { statusCode, detailCode } = getErrorCode(error.message);

    switch (true) {
      case !!handlers?.[statusCode][detailCode]:
        handlers[statusCode][detailCode]();
        break;

      case !!handlers?.[statusCode]:
        handlers[statusCode].default();
        break;

      case !!defaultHandlers[statusCode][detailCode]:
        defaultHandlers[statusCode][detailCode]();
        break;

      case !!defaultHandlers[statusCode]:
        defaultHandlers[statusCode].default();
        break;
    }
  };
  return { handleError };
}

export default useApiError;
