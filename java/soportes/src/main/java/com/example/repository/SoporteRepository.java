package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.model.Soporte;

public interface SoporteRepository extends JpaRepository<Soporte, Integer> {
	List<Soporte> findByIdSoporte(int idSoporte);
}
