import useErrorHandler from "./useErrorHandler";
type ErrorFunctions = Record<number, Record<number | "default", () => void>>;

function useApiError(handlers?: any) {
  const errorHandlers = useErrorHandler();

  const defaultHandlers: ErrorFunctions = {
    202: {
      default: () => {
        errorHandlers.handle202Error();
      },
      709: () => {
        errorHandlers.handle202Error709();
      },
    },
    400: {
      default: () => {
        errorHandlers.handle400Error();
      },
      1: () => {
        errorHandlers.handle400Error1();
      },
    },
    401: {
      default: () => {
        errorHandlers.handle401Error();
      },
    },
    500: {
      default: () => {
        errorHandlers.handle500Error();
      },
      1: () => {
        errorHandlers.handle500Error1();
      },
    },
    504: {
      default: () => {
        errorHandlers.handle504Error();
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
      case !!handlers?.[statusCode]?.[detailCode]:
        handlers[statusCode][detailCode]();
        break;

      case !!handlers?.[statusCode]:
        handlers[statusCode].default();
        break;

      case !!defaultHandlers?.[statusCode]?.[detailCode]:
        defaultHandlers[statusCode][detailCode]();
        break;

      case !!defaultHandlers?.[statusCode]:
        defaultHandlers[statusCode].default();
        break;
    }
  };
  return { handleError };
}

export default useApiError;
