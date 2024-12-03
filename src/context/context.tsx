import React, { createContext, useContext, useState } from 'react';
import { ModalContextProps } from '../utils/props'; // Assuming you have defined ModalContextProps in a separate file

// Define ModalContext using the interface
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

// ModalProvider component that will accept children
export const ModalProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    console.log('showModal', showModal);
    return (
        <ModalContext.Provider value={{ showModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

// Hook to access the ModalContext
export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};
