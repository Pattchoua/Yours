"use client"

import useStoreModal from "@/hooks/useStoreModal"
import Modal from "../ui/modal"

const StoreModal = () => {
    const storeModal = useStoreModal()
  return (
    <Modal
    title="Create store"
    description="Add a New store to manage products and categories"
    isOpen={storeModal.isOpen}
    onClose={storeModal.onClose}
    >
      Create Store Form
    </Modal>
  )
}

export default StoreModal
