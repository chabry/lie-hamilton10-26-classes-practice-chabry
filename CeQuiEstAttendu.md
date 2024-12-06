Voici une explication point par point de ce que l'exercice demande, pour que tu puisses préparer ton pseudo-code correctement.

---

### **1. Création de la classe `BankAccount`**
- La classe doit représenter un compte bancaire.
- Elle a une interface publique (propriétés et méthodes accessibles de l’extérieur) et une interface privée (méthodes ou données internes).

**Exigences :**
- **Propriétés nécessaires :**
  - `owner`: Le nom complet du propriétaire.
  - `IBAN`: Un numéro d'IBAN (International Bank Account Number).
  - `balance`: Le solde actuel du compte.
  - `password`: Le mot de passe associé au compte (pour sécuriser l’accès à certaines fonctions).
  - `transactions`: Une liste (tableau) pour stocker les transactions.

---

### **2. Accès contrôlé avec des getters**
- Utiliser **des getters** pour accéder à certaines propriétés.
  - **Nom complet (`owner`)** : Accessible publiquement.
  - **Solde (`balance`)** : Accessible publiquement.
  - **IBAN partiel (`IBAN`)** : Le getter doit retourner une version masquée de l'IBAN, par exemple `FR14**************606`.

---

### **3. Méthode `toString`**
- Implémenter une méthode personnalisée `toString()` qui retourne une chaîne de caractères lisible pour l’utilisateur.

**Exemple attendu :**
```plaintext
Owner: John Lennon - IBAN: FR14**************606 - Balance: 200 euros
```

---

### **4. Méthodes de retrait (`withdraw`) et de dépôt (`deposit`)**
- Implémenter les méthodes suivantes :
  - **`withdraw(amount)`** : Pour retirer de l’argent.
  - **`deposit(amount)`** : Pour déposer de l’argent.
- Ces méthodes doivent :
  - Modifier le solde (`balance`).
  - Appeler une méthode privée **`addTransaction`** pour enregistrer chaque opération dans l’historique des transactions.
  - Retourner un message comme :
    - `"You've just withdrawn 100 euros."`
    - `"You've just deposited 50 euros."`

---

### **5. Historique des transactions (`transactionsHistory`)**
- Implémenter une méthode `transactionsHistory(password)` pour afficher les transactions. Elle doit :
  - Accepter un objet avec un mot de passe (par exemple : `{ password: 'yoko' }`).
  - Retourner :
    - La liste des transactions si le mot de passe est correct.
    - `"wrong password"` si le mot de passe est incorrect.
    - `"no password given"` si aucun mot de passe n’est fourni.

---

### **6. Ajouter une classe optionnelle `Transaction`**
- Si tu veux améliorer la solution :
  - Crée une classe `Transaction` pour modéliser chaque transaction avec des informations comme :
    - Montant (`amount`).
    - Type (`withdraw` ou `deposit`).
    - Date (`date`).

---

### **7. Utilisation des paramètres par défaut**
- Utiliser un **paramètre par défaut** pour la méthode `transactionsHistory` :
  - Si aucun mot de passe n’est fourni, le paramètre par défaut sera un objet vide `{}`.

---

### **Key Learning Points à appliquer :**
- **Interface publique vs privée :**
  - Interface publique : `toString`, `withdraw`, `deposit`, `transactionsHistory`.
  - Interface privée : `addTransaction` (non accessible de l’extérieur).
- **Getters** : Pour contrôler l’accès à certaines propriétés (`IBAN partiel`).
- **Paramètres par défaut** : Exemple pour `transactionsHistory(password = {})`.
- **Méthode `toString`** : Présentation lisible et user-friendly.

---

