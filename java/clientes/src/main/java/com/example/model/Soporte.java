package com.example.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="soporte")
public class Soporte {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idSoporte;
	private String tipoSoporte;
	private String detalleSoporte;
	private String fechaInicioPlan;
	private String fechaFinPlan;
	private String horaInicioPlan;
	private String horaFinPlan;
	private String solucion;
	private String estado;
	private int idUsuario;
	private int idCliente;
	private String fechaInicioSop;
	private String fechaFinSop;
	private String horaInicioSop;
	private String horaFinSop;

}
