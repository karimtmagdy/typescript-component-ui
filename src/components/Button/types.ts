export interface ButtonProps  {
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    value?: string | number | JSX.Element;
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    chidlren?: React.ReactNode | null;
    mode?: 'menu' | 'switch';
    arrow?: JSX.Element | null;
    icon?: JSX.Element | null;
    shape?: 'default' | 'rounded' | 'square' | 'circle';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    px?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    width?: 'full' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    height?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    toggle?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    outline?: 'info' | 'danger' | 'primary' | 'success' | 'warning' | 'japanese'
    | 'slate' | 'gray' | 'zinc' |
    'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' |
    'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' |
    'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
    variant?: 'info' | 'danger' | 'primary' | 'success' | 'warning' | 'japanese'
    | 'slate' | 'gray' | 'zinc' |
    'neutral' | 'stone' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' |
    'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' |
    'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
    bezel?: 'metal' | 'hibiscus' | 'clematis' | 'clear' | 'snowflake' | 'tree'
    | 'cold' | 'darkness' | 'silver' |
    'clay' | 'soil' | 'sunset' | 'gold' | 'twilight' | 'sunshine' | 'lime'
    | 'powder' | 'nemesia' | 'light' | 'holly' | 'salvia' | 'bird' |
    'amaranthus' | 'night' | 'heartsease' | 'candy' | 'rosebud' | 'poppy';
}