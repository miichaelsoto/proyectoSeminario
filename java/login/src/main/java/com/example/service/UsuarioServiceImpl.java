package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Usuario;
import com.example.repository.UsuariosRepository;

@Service
public class UsuarioServiceImpl implements UsuariosService {
	
	@Autowired
	UsuariosRepository usuariosRepository;
	@Override
	public Usuario loginUsuario(int idUsuario, String pwd) {

		return usuariosRepository.findByidUsuarioAndPassword(idUsuario, pwd);
	}

	@Override
	public boolean registrarUsuario(Usuario usuario) {
		if(usuariosRepository.findById(Integer.toString(usuario.getIdUsuario()))!=null) {
			 
		}
		usuariosRepository.save(usuario);
		return true;
	
	}

}
