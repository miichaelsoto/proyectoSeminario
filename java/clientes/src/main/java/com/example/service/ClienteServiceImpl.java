package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Clientes;
import com.example.model.Soporte;
import com.example.model.Ubicacion;
import com.example.repository.ClienteRepository;
import com.example.repository.SoporteRepository;
import com.example.repository.UbicacionRepository;

@Service
public class ClienteServiceImpl implements ClienteService {
	@Autowired
	ClienteRepository clienteRepository;
	@Autowired
	SoporteRepository ubicacionRepository;
	@Autowired
	UbicacionRepository ubicacion1Repository;
	
	@Override
	public List<Clientes> cliente() {
		return clienteRepository.findAll();
	}
	public List<Soporte> ubicacionPorCliente(int idCliente) {
		return ubicacionRepository.findByIdCliente(idCliente);
	}
	public Soporte ubicacionPorCodigo(int idUbicacion) {
		return ubicacionRepository.findById(idUbicacion).orElse(null);
	}
	public boolean registrarCliente(Clientes cliente) {
		if(ubicacionRepository.findById(cliente.getIdCliente())!=null) {
			 
		}
		clienteRepository.save(cliente);
		return true;
	
	}
	public boolean registrarUbicacion(Ubicacion ubicacion) {
		if(ubicacion1Repository.findById(ubicacion.getIdUbicacion())!=null) {
			 
		}
		ubicacion1Repository.save(ubicacion);
		return true;
	
	}
	public Clientes clientePorNombre(String nombre) {
		return clienteRepository.findByNombre(nombre);
	}

}
