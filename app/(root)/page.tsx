"use client";

import useStoreModal from "@/hooks/useStoreModal";
import { useEffect } from "react";


const RootPage = () => {

  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
  if(!isOpen) {
    onOpen()
  }
  }, [onOpen, isOpen])
  return <div className="p-6">RootPage</div>;
};

export default RootPage;
