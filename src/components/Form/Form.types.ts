export interface FormProps extends React.HTMLAttributes<HTMLFormElement> {
    defaultValues: Record<string, any>;
    onSubmit: (data: any)=> Promise<void>;
    children: React.ReactNode;
}