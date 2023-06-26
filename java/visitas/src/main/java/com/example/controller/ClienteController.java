package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Clientes;
import com.example.model.Soporte;
import com.example.service.ClienteService;


@RestController
@CrossOrigin("*")
public class ClienteController {
	@Autowired
	ClienteService clienteService;
		
	@GetMapping(value="cliente",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Clientes>> clientes(){
		return new ResponseEntity<>(clienteService.cliente(),HttpStatus.OK);
	}
	@GetMapping(value="soportes",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Soporte>> ubicacionClientes(@RequestParam("idSoporte")int idSoporte){
		return new ResponseEntity<>(clienteService.ubicacionPorSoporte(idSoporte),HttpStatus.OK);
	}
	@GetMapping(value="soporte",produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Soporte> ubicacionCodigo(@RequestParam("idSoporte") int idSoporte){
		return new ResponseEntity<>(clienteService.ubicacionPorCodigo(idSoporte),HttpStatus.OK);
	}
	
	@PostMapping(value="updSopVis", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> registrar(@RequestBody Soporte soporte) {
		if(clienteService.updateSoporte(soporte)) {
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
	}

}
