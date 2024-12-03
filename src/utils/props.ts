export interface MainLayoutProps {
    children: React.ReactNode;
}
export interface ServiceCardProps {
    number: number;
    title: string;
    description: string;
}
export interface ButtonProps {
    text: string;
}

export interface ModalContextProps {
    showModal: boolean;
    openModal: () => void;
    closeModal: () => void;
}
