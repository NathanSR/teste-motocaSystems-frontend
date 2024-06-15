export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    isAsync?: boolean;
    theme?: "transparent" | "default";
    hideLabelInMobile?: boolean;
}