// contexts/ModalContext.tsx
import React, { createContext, useState, useContext } from 'react';
import Modal from '../components/modal/modal';

type ModalContextType = {
	openModal: (title: string, content: React.ReactNode) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextType>({
	openModal: () => {},
	closeModal: () => {},
});

type ModalProviderProps = {
	children: React.ReactNode;
};

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);
	const [modalTitle, setModalTitle] = useState('');

	const openModal = (title: string, content: React.ReactNode) => {
		setIsOpen(true);
		setModalContent(content);
		setModalTitle(title);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal isOpen={isOpen} closeModal={closeModal} title={modalTitle}>
				{modalContent}
			</Modal>
		</ModalContext.Provider>
	);
};

export const useModal = () => useContext(ModalContext);
