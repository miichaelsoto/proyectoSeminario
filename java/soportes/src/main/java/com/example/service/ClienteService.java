package com.example.service;

import java.util.List;

import com.example.model.Clientes;
import com.example.model.Soporte;
import com.example.model.Ubicacion;

public interface ClienteService {
	List<Clientes> cliente();
	List<Soporte> ubicacionPorSoporte(int idSoporte);
	boolean registrarSoporte(Soporte soporte);
	Soporte ubicacionPorCodigo(int idUbicacion);
	List<Ubicacion> ubicacion(int idCliente);
	boolean updateSoporte(Soporte soporte);
}
