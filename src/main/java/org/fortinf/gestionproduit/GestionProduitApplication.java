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
		produitRepository.save(new Produit("AERO THE ACROBAT SUPER NINTENDO EN BOITE USA", "Description du produit A", 29.90));
		produitRepository.save(new Produit("CLIFFHANGER SUPER NINTENDO LOOSE", "Description du produit B", 7.90));
		produitRepository.save(new Produit("BATTLECLASH SUPER NINTENDO LOOSE", "Description du produit C", 9.90));
		produitRepository.save(new Produit("BUSTS LOOSE SUPER NINTENDO LOOSE USA", "Description du produit D", 7.90));
		produitRepository.save(new Produit("CHUCK ROCK SNES US", "Description du produit E", 9.90));
		produitRepository.save(new Produit("DERBY STALLION 96 SUPER FAMICOM EN BOITE", "Description du produit F", 9.90));
		produitRepository.save(new Produit("DINO DINI’S SOCCER SNES LOOSE", "Description du produit G", 5.90));
		produitRepository.save(new Produit("DONKEY KONG COUNTRY 2 SUPER NINTENDO LOOSE", "Description du produit H", 29.90));
		produitRepository.save(new Produit("DRAGON BALL Z SHIN BUTODEN 2 SUPER FAMICOM EN BOITE", "Description du produit I", 29.90));
		produitRepository.save(new Produit("DRAGON QUEST III SUPER FAMICOM EN BOITE", "Description du produit J", 25));
		produitRepository.save(new Produit("DRAGON QUEST VI SUPER FAMICOM LOOSE", "Description du produit K", 9.90));
		produitRepository.save(new Produit("DRAGON THE BRUCE LEE STORY SUPER NINTENDO LOOSE", "Description du produit L", 9.90));
		produitRepository.save(new Produit("DRAKKHEN SUPER NINTENDO LOOSE USA", "Description du produit M", 14.90));
		produitRepository.save(new Produit("EXHAUST HEAT SNES LOOSE", "Description du produit N", 5.90));
		produitRepository.save(new Produit("EXTRA INNINGS SUPER NINTENDO USA EN BOITE", "Description du produit O", 7.90));
		produitRepository.save(new Produit("F-ZERO SUPER NINTENDO EN BOITE", "Description du produit P", 24.90));
		produitRepository.save(new Produit("FATAL FURY SPECIAL SUPER FAMICOM EN BOITE", "Description du produit Q", 24.90));
		produitRepository.save(new Produit("FRONT MISSION GUN HAZARD SUPER FAMICOM EN BOITE", "Description du produit R", 19.90));
		produitRepository.save(new Produit("GOLDEN FIGHTER SUPER FAMICOM EN BOITE", "Description du produit S", 19.90));
		produitRepository.save(new Produit("KILLER INSTINCT SUPER NINTENDO EN BOITE", "Description du produit T", 39.90));
		produitRepository.save(new Produit("MYSTIC QUEST LEGEND SUPER NINTENDO EN BOITE", "Description du produit U", 59.90));
		produitRepository.save(new Produit("PRINCE OF PERSIA SUPER FAMICOM EN BOITE", "Description du produit V", 49.90));
		produitRepository.save(new Produit("ROMANCING SAGA 3 SUPER FAMICOM", "Description du produit W", 19.90));
		produitRepository.save(new Produit("PSTREET FIGHTER II SUPER FAMICOM", "Description du produit X", 29.90));
		produitRepository.save(new Produit("SUPER MARIO WORLD SUPER FAMICOM EN BOITE", "Description du produit Y", 29.90));
		List<Produit> list = produitRepository.findAll();
		System.out.println(String.format("|%20s|%100s|%20s|", "ID", "LIBELLE", "PRIX"));
		list.forEach(p->System.out.println(p.toString()));
	}
}
