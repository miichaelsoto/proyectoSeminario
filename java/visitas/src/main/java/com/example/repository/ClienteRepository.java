package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Clientes;

public interface ClienteRepository extends JpaRepository<Clientes, Integer> {
	List<Clientes> findByIdCliente(int idCliente);
}
