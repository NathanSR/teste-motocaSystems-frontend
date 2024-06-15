export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
    theme?: "transparent" | "default";
    hideLabelInMobile?: boolean;
}