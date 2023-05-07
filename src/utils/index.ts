export const convertValuesToString = <TParams>(obj: TParams) => {
  return Object.entries(obj).reduce((newObj: Record<string, string>, [key, value]) => {
    if (!!value && value.length) {
      // TODO: handle eslint error
      // eslint-disable-next-line @typescript-eslint/no-base-to-string
      newObj[key] = value?.toString();
    }
    return newObj;
  }, {});
};
