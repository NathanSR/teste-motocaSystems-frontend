import { useEffect, useState } from "react";
import styles from './MotorcyclesForm.module.css'
import { Motorcycle } from "../Motorcycles/Motorcycles.types";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import axios from '../../config/axios';
import { ArrowUpCircleIcon, PlusIcon } from "lucide-react";
import Swal from 'sweetalert2';


function MotorcyclesForm() {
	const navigate = useNavigate()
	const [motorcycle, setMotorcycle] = useState<Motorcycle>({ id: "", color: "", model: "", status: "Em estoque", value: 0 });

	//Se tiver querystring "motorcycleId" deve fazer consulta axios.get '/motorcycles/:id' para poder editá-los no form;
	const [searchParams] = useSearchParams();
	const motorcycleId = searchParams.get("motorcycleId");
	useEffect(() => {
		if (motorcycleId) {
			axios.get(`/motorcycles/${motorcycleId}`).then(resp => {
				setMotorcycle({ ...resp.data });
				// reset(resp.data);  // Atualiza os valores do formulário com os dados da moto
			});
		}
	}, [motorcycleId]);

	const onSubmit = async (data: Motorcycle) => {
		try {
			await axios({
				url: motorcycleId ? `/motorcycles/${motorcycleId}` : "/motorcycles",
				method: motorcycleId ? "put" : "post",
				data
			});
			navigate("/motorcycles");
			Swal.fire({
				icon: 'success',
				title: 'Moto cadastrada com sucesso!',
			});
		} catch (error: any) {
			Swal.fire({
				icon: 'error',
				title: 'Um Erro Aconteceu...',
				text: error.message,
			});
		}
	};


	return (
		<div className={styles.MotorcyclesForm}>
			<Header contentHeaderTitle={motorcycleId ? "Editar" : "Registro de Motos"} />
			<main>
				<h2>{motorcycleId ? "Edite as informações que preferir! 📝" : "Preencha as informações a baixo para registrar uma Moto 🏍️"}</h2>
				<Form defaultValues={motorcycle} onSubmit={onSubmit}>
					<Input label="Código" name="id" prefix="#" disabled={!!motorcycleId} required />
					<Input label="Modelo da Moto" name="model" required />
					<Input label="Cor" name="color" required />
					<Input label="Valor" type="number" name="value" required step={0.01} />
					<Input label="Status" type="select" name="status" options={["Em estoque", "Sem estoque", "Em trânsito"]} required />

					<Button
						type="submit"
						icon={motorcycleId ? <ArrowUpCircleIcon size="1.3rem" /> : <PlusIcon size="1.3rem" />}
						children={motorcycleId ? "Atualizar" : "Registrar"}
					/>
				</Form>
			</main>
		</div>
	)
}

export default MotorcyclesForm