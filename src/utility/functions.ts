export const isArrayEmpty = <T>(array: T[]) => array.length === 0;

export const isInValidField = (field: string) => {
  return field.trim() === "";
};
