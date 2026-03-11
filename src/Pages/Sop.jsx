import { useEffect } from "react";

const Sop = () => {
  useEffect(() => {
    window.location.href = "/sop.pdf";
  }, []);

  return null;
};

export default Sop;