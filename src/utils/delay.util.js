// Criar delay durante a execução do bloco de código em que ela for instanciada e executada
export const delay = (seconds = 3) => new Promise(resolve => setTimeout(resolve, seconds * 1000))