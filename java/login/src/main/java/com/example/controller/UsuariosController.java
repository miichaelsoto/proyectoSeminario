package com.example.controller;

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

import com.example.model.Usuario;
import com.example.service.UsuariosService;

@CrossOrigin("*")
@RestController
public class UsuariosController {
	@Autowired
	UsuariosService usuariosService;
	@GetMapping(value="login",produces =MediaType.APPLICATION_JSON_VALUE)
	public Usuario login(@RequestParam("idUsuario")int idUsuario, @RequestParam("pwd")String pwd) {
		return usuariosService.loginUsuario(idUsuario, pwd);
	}
	
	@PostMapping(value="registrar", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Void> registrar(@RequestBody Usuario usuario) {
		if(usuariosService.registrarUsuario(usuario)) {
			return new ResponseEntity<>(HttpStatus.OK);
		}else {
			return new ResponseEntity<>(HttpStatus.CONFLICT);
		}
		
	}
}
