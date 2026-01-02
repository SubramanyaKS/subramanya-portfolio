import { useEffect, useState } from "react";

export const useSpinner =()=>{
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
      const id = setTimeout(() => setSpinner(false), 1000);
      return () => clearTimeout(id);
    }, []);
    return {spinner}

}