package org.fortinf.gestionproduit.repositories;

import org.fortinf.gestionproduit.domain.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
}
