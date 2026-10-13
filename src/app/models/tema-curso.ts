export interface TemaCurso {
  id: number;
  tecnologia: string;
  temas: string[];
  actividad: string;
  completado: boolean;
  nota?: string;
}