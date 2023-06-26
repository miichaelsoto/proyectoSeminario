package com.example.service;

import com.example.model.Usuario;

public interface UsuariosService {
	Usuario loginUsuario(int idUsuario, String pwd);
	boolean registrarUsuario(Usuario usuario);

}
