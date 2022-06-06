import React, { useRef, useEffect } from "react";
import { useEthers } from "@usedapp/core";
import styled from "@emotion/styled";
import Jazzicon from "@metamask/jazzicon";

const StyleIdentIconDiv = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 1.125rem;
  background-color: black;
`;

const IdentIcon = () => {
  const ref = useRef<HTMLDivElement>();
  const { account } = useEthers();

  useEffect(() => {
    if (account && ref.current) {
      ref.current.innerHTML = "";
      ref.current.appendChild(Jazzicon(16, parseInt(account.slice(2, 10), 16)));
    }
  }, [account]);

  return <StyleIdentIconDiv ref={ref as any} />;
};

export default IdentIcon;
