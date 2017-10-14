package org.fortinf.gestionproduit.repository;

import org.fortinf.gestionproduit.domain.Produit;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

    @Query("select p from Produit p where p.libelle like :exp")
    Page<Produit> search(@Param("exp") String exp, Pageable pageable);

}
