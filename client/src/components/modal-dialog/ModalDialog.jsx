import React from 'react';

export default function Modal({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText,
    cancelText,
    buttonColor
}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-semibold mb-4">{title}</h2>
                <p>{message}</p>
                <div className="mt-4 flex justify-end space-x-2">
                    {cancelText && (
                        <button
                            onClick={onClose}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
                        >
                            {cancelText}
                        </button>
                    )}
                    <button
                        onClick={onConfirm}
                        className={`transition-transform transform hover:scale-105 font-semibold py-2 px-4 rounded text-white ${buttonColor}`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>
    );
}
