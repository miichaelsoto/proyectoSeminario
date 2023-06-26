package com.example.service;

import java.util.List;

import com.example.model.Clientes;
import com.example.model.Soporte;

public interface ClienteService {
	List<Clientes> cliente();
	List<Soporte> ubicacionPorSoporte(int idSoporte);
	boolean updateSoporte(Soporte soporte);
	Soporte ubicacionPorCodigo(int idUbicacion);
}
