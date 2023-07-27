import React from "react";

interface DefaultBtnProps {
    onClick: () => void;
    className?: string;
    // children: ReactNode;
}

const DefaultBtn: React.FC<DefaultBtnProps> = ({
    onClick,
    className,
    // children,
}) => {
    return (
        <button className={className} onClick={onClick}>
            {/* {children} */}
        </button>
    );
};

export default DefaultBtn;
