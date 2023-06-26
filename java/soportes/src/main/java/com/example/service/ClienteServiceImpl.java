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
	SoporteRepository soporteRepository;
	@Autowired
	UbicacionRepository ubicacionRepository;
	@Override
	public List<Clientes> cliente() {
		return clienteRepository.findAll();
	}
	public List<Soporte> ubicacionPorSoporte(int idSoporte) {
		return soporteRepository.findByIdSoporte(idSoporte);
	}
	public List<Ubicacion> ubicacion(int idCliente) {
		return ubicacionRepository.findByIdCliente(idCliente);
	}
	public Soporte ubicacionPorCodigo(int idUbicacion) {
		return soporteRepository.findById(idUbicacion).orElse(null);
	}
	public boolean registrarSoporte(Soporte soporte) {
		if(clienteRepository.findById(soporte.getIdSoporte())!=null) {
			 
		}
		soporteRepository.save(soporte);
		return true;
	
	}
	public boolean updateSoporte(Soporte soporte) {
		int ID = soporte.getIdSoporte();
		Soporte newSoporte = soporteRepository.findById(ID).orElse(null);
		soporte.setTipoSoporte(newSoporte.getTipoSoporte());
		soporte.setDetalleSoporte(newSoporte.getDetalleSoporte());
		soporte.setIdCliente(newSoporte.getIdCliente());
		if(soporteRepository.findById(soporte.getIdSoporte())!=null) {
			soporteRepository.save(soporte);
		}
		
		
		return true;
	
	}

}
