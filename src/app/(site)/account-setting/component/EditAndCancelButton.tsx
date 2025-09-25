type ButtonPropsType = {
    isEditing: boolean;
    activeEditSection: string;
    toggleSection: (sectionId: string) => void;
    sectionId: string;
    buttonText?: string;
};

export const EditAndCancelButton = ({ isEditing, toggleSection, sectionId, activeEditSection, buttonText="Edit" }: ButtonPropsType) => (
    <button
        onClick={() => toggleSection(sectionId)}
        disabled={Boolean(activeEditSection && activeEditSection !== sectionId)}
        className="text-secondaryColor disabled:opacity-50 text-base font-medium"
    >
        {isEditing ? "Cancel" : buttonText}
    </button>
);