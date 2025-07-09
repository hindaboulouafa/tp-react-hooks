# TP React Hooks - Application de Gestion de Produits

Ce TP a pour objectif de mettre en pratique l'utilisation des Hooks React (useState, useEffect, useContext) ainsi que la création de Hooks personnalisés.

## Installation et configuration initiale

1. Cloner le dépôt :
```bash
git clone https://github.com/pr-daaif/tp-react-hooks.git
cd tp-react-hooks
```

2. Créer votre propre dépôt sur Github et changer le remote :
```bash
# Supprimer le remote origine
git remote remove origin

# Ajouter votre nouveau remote
git remote add origin https://github.com/[votre-username]/tp-react-hooks.git

# Premier push
git push -u origin main
```

3. Installer les dépendances :
```bash
npm install
```

4. Lancer l'application :
```bash
npm start
```

Exercices
Exercice 1 : État et Effets
Objectif :
Implémenter une recherche en temps réel

🔹 Solution :
Modification du composant ProductSearch
Le champ de recherche est synchronisé avec l'état searchTerm du parent via les props.

![image](https://github.com/user-attachments/assets/d46013cf-6ea9-4472-8b96-cce8496c85d8)

1
Implémentation du debounce avec setTimeout
Un setTimeout attend 1 seconde avant de mettre à jour searchTerm.
Si l'utilisateur saisit un autre caractère avant la fin du délai, l'ancien setTimeout est annulé avec clearTimeout.
Etat de recherche avec debounce juste après l'insertion :

![image](https://github.com/user-attachments/assets/ab1d0de9-3a9b-4ea1-806c-dc19ba9c4329)



2 Etat de recherche avec debounce après 1 second : 3

Problèmes rencontrés & Solutions :
Problème : La recherche était exécutée à chaque frappe de touche, causant trop d’appels API.
Solution : Utilisation de setTimeout et clearTimeout pour réduire les requêtes.

🿳️ Exercice 2 : Context et Internationalisation
Objectif :
Gérer les préférences de langue

🔹 Solution :
Création du LanguageContext

Contexte LanguageContext dans LanguageContext.js
Stocke la langue actuelle (language) et une fonction changeLanguage pour la mise à jour
Ajout du sélecteur de langue (LanguageSelector.js)

Utilisation du LanguageContext pour accéder à language et changeLanguage
Mise à jour de la langue avec setLanguage()
English version 2.2
![image](https://github.com/user-attachments/assets/2b55974d-40f4-4da1-a620-c4ed8a163df8)

German version 2.1


![image](https://github.com/user-attachments/assets/1b28bed6-f9a3-4e0e-b66a-e6987cc44079)


🿠 Exercice 3 : Hooks Personnalisés
🎯 Objectif :
Créer des Hooks réutilisables (useDebounce, useLocalStorage)

🔹 Solution :
Hook useDebounce

Ajout d’un délai avant la mise à jour d’une valeur.
Hook useLocalStorage

Permet de stocker des valeurs dans localStorage pour éviter la perte de données après un rafraîchissement.

Etat de recherche avec debounce juste après l'insertion :

![image](https://github.com/user-attachments/assets/d2aae6bc-0482-4aa2-8e19-18fc61ab5df1)

3.1 Etat de recherche avec debounce après 1 seconde : 

![image](https://github.com/user-attachments/assets/f7ef6d0f-441f-4a21-a793-c6e48d9fe83c)

3.1 English version avec local Storage

3.2 De version avec local Storage 

🿥 Exercice 4 : Gestion Asynchrone et Pagination
🎯 Objectif :

Gérer le chargement et la pagination

🔹 Solution :
Ajout d’un bouton de rechargement

![image](https://github.com/user-attachments/assets/07801eae-dce4-4440-b9ca-6be4e2cc4e99)


Un bouton Recharger permet de relancer l’appel API.
Implémentation de la pagination

Gestion des pages avec nextPage et previousPage.
L'ajout du button de recharge 

Chargement lors du clique en recharge 

Ajout de la pagination 
Fonctionement de la pagination en clique sur suivant 

