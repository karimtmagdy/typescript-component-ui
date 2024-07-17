export interface ToggleCircleProps {
    className?: string;
    checked?: boolean;
    color?: boolean | undefined;
    circle?: string | JSX.Element | null;
    onChange?: (checked: boolean) => void;
    size?: 'sm' | 'md' | 'lg';
}

export default ToggleCircleProps
// extends  React.HTMLAttributes<HTMLDivElement>