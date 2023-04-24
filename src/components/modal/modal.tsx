import React, { ReactNode, useRef, useEffect } from 'react';
import styles from './modal.module.scss';
import dynamic from 'next/dynamic';
import { IoMdClose } from 'react-icons/io';

const FocusTrap = dynamic(() => import('focus-trap-react'), {
	ssr: false,
});

type ModalProps = {
	isOpen: boolean;
	closeModal: () => void;
	title: string;
	children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({
	isOpen,
	closeModal,
	title,
	children,
}) => {
	const modalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<FocusTrap focusTrapOptions={{ initialFocus: false }}>
			<div className={styles.modalBackdrop} onClick={closeModal}>
				<div
					className={styles.modal}
					ref={modalRef}
					onClick={e => {
						e.stopPropagation();
					}}
				>
					<div className={styles.header}>
						<h2 className={styles.title}>{title}</h2>
						<IoMdClose
							className={styles.closeButton}
							onClick={closeModal}
							role="button"
							aria-label="Close"
							tabIndex={0}
						/>
					</div>
					{children}
				</div>
			</div>
		</FocusTrap>
	);
};

export default Modal;
