package org.fortinf.gestionproduit;

import org.fortinf.gestionproduit.domain.Produit;
import org.fortinf.gestionproduit.repository.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class GestionProduitApplication implements CommandLineRunner {

	@Autowired
	private ProduitRepository produitRepository;

	public static void main(String[] args) {
		SpringApplication.run(GestionProduitApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		produitRepository.save(new Produit("Produit A", "Description du produit A", 14.5));
		produitRepository.save(new Produit("Produit B", "Description du produit B", 9.30));
		produitRepository.save(new Produit("Produit C", "Description du produit C", 10));
		List<Produit> list = produitRepository.findAll();
		System.out.println(String.format("|%20s|%20s|%20s|", "ID", "LIBELLE", "PRIX"));
		list.forEach(p->System.out.println(p.toString()));
	}
}
