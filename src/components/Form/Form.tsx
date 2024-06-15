import { useEffect } from "react";
import { FormProps } from "./Form.types";
import { useForm, FormProvider } from "react-hook-form";

const Form: React.FC<FormProps> = ({ defaultValues, onSubmit, children, ...props }) => {
    const formController = useForm({ defaultValues });
	const { handleSubmit, reset, } = formController;

	useEffect(()=>{ reset(defaultValues) }, [defaultValues]) //Setar valor inicial do form;

	return (
		<FormProvider {...formController}>
			<form onSubmit={handleSubmit(onSubmit)} {...props}>
				{children}
			</form>
		</FormProvider>
	)
}

export default Form;