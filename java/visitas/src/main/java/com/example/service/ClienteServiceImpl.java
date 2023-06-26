package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Clientes;
import com.example.model.Soporte;
import com.example.repository.ClienteRepository;
import com.example.repository.SoporteRepository;

@Service
public class ClienteServiceImpl implements ClienteService {
	@Autowired
	ClienteRepository clienteRepository;
	@Autowired
	SoporteRepository ubicacionRepository;
	@Override
	public List<Clientes> cliente() {
		return clienteRepository.findAll();
	}
	public List<Soporte> ubicacionPorSoporte(int idSoporte) {
		return ubicacionRepository.findByIdSoporte(idSoporte);
	}
	public Soporte ubicacionPorCodigo(int idUbicacion) {
		return ubicacionRepository.findById(idUbicacion).orElse(null);
	}
	public boolean updateSoporte(Soporte soporte) {
		int ID = soporte.getIdSoporte();
		Soporte newSoporte = ubicacionRepository.findById(ID).orElse(null);
		soporte.setTipoSoporte(newSoporte.getTipoSoporte());
		soporte.setDetalleSoporte(newSoporte.getDetalleSoporte());
		soporte.setIdCliente(newSoporte.getIdCliente());
		if(ubicacionRepository.findById(soporte.getIdSoporte())!=null) {
			ubicacionRepository.save(soporte);
		}
		
		
		return true;
	
	}

}
