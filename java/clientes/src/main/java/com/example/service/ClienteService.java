package com.example.service;

import java.util.List;

import com.example.model.Clientes;
import com.example.model.Soporte;
import com.example.model.Ubicacion;

public interface ClienteService {
	List<Clientes> cliente();
	List<Soporte> ubicacionPorCliente(int idCliente);
	boolean registrarCliente(Clientes cliente);
	//Soporte ubicacionPorCodigo(int idUbicacion);
	boolean registrarUbicacion(Ubicacion ubicaicon);
	Clientes clientePorNombre(String nombre);
}
