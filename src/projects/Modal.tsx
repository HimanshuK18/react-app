import { useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
    message: string,
    isOpen: boolean,
    onClose: () => void,
    children?: {},
    getProduct?: () => void
}

const Product = {
    id: 50,
    getProduct: (id: number) => {
        return 'product ' + id;
    }
};
JSON.stringify(Product, function (key, value) {
    if (typeof value === 'function')
        return value.toString();
    else return value;
});

const Modal = (props: ModalProps) => {
    if (!props.isOpen) return null;
    return createPortal(
        <div className="modal">
            <span>{props.message}</span>
            <button onClick={props.onClose}>Close</button>
        </div>
        , document.body);
}

function Component() {
    const [open, setOpen] = useState(false);
    return (
        <div className="component">
            <button onClick={() => setOpen(true)}>Open Modal</button>
            <Modal
                message="Hello World!"
                isOpen={open}
                onClose={() => setOpen(false)}
            />
        </div>
    )
}