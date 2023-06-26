package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.model.Ubicacion;

public interface UbicacionRepository extends JpaRepository<Ubicacion, Integer> {
	List<Ubicacion> findByIdCliente(int idCliente);
}
