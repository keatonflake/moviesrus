import { useEffect } from "react";

export const useTitle = (title) => {
  document.title = `${title} | Movies-R-Us`;
  return null;
};
