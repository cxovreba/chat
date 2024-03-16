export interface InputType {
    type: string,
    placeholder: string,
    value: any,
    onChange: (event: any) => void,
    width: number,
    height: number,
    border: string,
    background: string,
    color: string,
    className: string,
    onClick: (event: any) => void;
}

export interface ButtonType {
    onClick: (event: any) => void;
    children?: React.ReactNode | string;
    className: string,
}

export interface ChatType {
    id: number;
    author: string | undefined;
    text: string;
}