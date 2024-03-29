import React from 'react';

import Modal from './';
import OutsideClickHandler from 'react-outside-click-handler';

import { ModalTypes } from '../../enums/ModalTypes';
import { IModal } from '../../interfaces/modals';
import { useAppDispatch, useAppSelector } from '../../store';
import { getActiveModal } from '../../store/selectors/modals';
import { modalActions } from '../../store/slices/modals/actions';
import { Portal } from '../Portal';

interface ModalContainerProps {
    modals: Array<IModal>;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ modals, ...props }) => {
    const activeModal = useAppSelector(getActiveModal);
    const dispatch = useAppDispatch();

    return (
        <>
            {modals?.map(
                ({ modal: ModalTemplate, id }, i) =>
                    activeModal === id && (
                        <Portal selector="#modal-container" key={`modalContainer-${i}-${id}`}>
                            <OutsideClickHandler
                                onOutsideClick={() => {
                                    dispatch(modalActions.setActiveModal(ModalTypes.None));
                                }}
                            >
                                <Modal
                                    show
                                    maxWidth="50rem"
                                    handleClose={() => {
                                        dispatch(modalActions.setActiveModal(ModalTypes.None));
                                    }}
                                >
                                    <ModalTemplate {...props} />
                                </Modal>
                            </OutsideClickHandler>
                        </Portal>
                    )
            )}
        </>
    );
};

export default ModalContainer;
