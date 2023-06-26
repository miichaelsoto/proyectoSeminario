package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Usuario;

public interface UsuariosRepository extends JpaRepository<Usuario, String> {

	Usuario findByidUsuarioAndPassword(int idUsuario, String pwd);
}
