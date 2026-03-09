# Mes écrits

Carnet personnel d'écrits — Projet Cloud PaaS (Vercel & Azure)

## Partage des écrits (Supabase)

Pour que tout le monde voie les mêmes écrits sur tous les appareils, configure Supabase. Voir **SUPABASE_SETUP.md** pour les instructions.

## Contenu

- **Page de présentation** : citations inspirantes avec auteurs et catégories
- **Texte** : 5 citations
- **Image/Logo** : symbole décoratif (guillemets stylisés)
- **Liens** : Wikiquote, Goodreads, BrainyQuote
- **Formulaire** : proposer une citation (citation, auteur, catégorie)
- **Design responsive** : mobile, tablette, desktop

## Structure du projet

```
citations-site/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Déploiement

### Vercel

1. Créer un compte sur [vercel.com](https://vercel.com)
2. Pousser le projet sur GitHub
3. Cliquer sur "Importer" → sélectionner le repo
4. Déployer (pas de build nécessaire pour les fichiers statiques)

### Azure Static Web Apps

1. Créer un compte sur [portal.azure.com](https://portal.azure.com)
2. Créer une ressource "Static Web App"
3. Connecter le repo GitHub
4. Build : laisser vide (site statique)
5. Output : `/` (racine du projet)

## Lancer en local

Ouvrir `index.html` dans un navigateur ou utiliser un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve .
```

## Licence

Projet éducatif — TP Cloud PaaS
