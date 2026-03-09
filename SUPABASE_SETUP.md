# Configuration Supabase pour Mes écrits

## 1. Créer un compte Supabase

1. Va sur [supabase.com](https://supabase.com)
2. Clique sur **Start your project**
3. Crée un compte (gratuit avec GitHub ou email)

## 2. Créer un projet

1. Clique sur **New Project**
2. Choisis un nom (ex: `mes-ecrits`)
3. Crée un mot de passe (garde-le en sécurité)
4. Clique sur **Create new project** (attends 1-2 min)

## 3. Créer la table

1. Dans le menu gauche, clique sur **SQL Editor**
2. Clique sur **New query**
3. Colle ce code et clique sur **Run** :

```sql
CREATE TABLE ecrits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  texte TEXT NOT NULL,
  auteur TEXT NOT NULL,
  categorie TEXT NOT NULL,
  pinned BOOLEAN DEFAULT false,
  pinned_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE ecrits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture publique" ON ecrits FOR SELECT USING (true);
CREATE POLICY "Insertion publique" ON ecrits FOR INSERT WITH CHECK (true);
CREATE POLICY "Mise à jour publique" ON ecrits FOR UPDATE USING (true);
```

## 4. Récupérer tes clés

1. Va dans **Settings** (icône engrenage) > **API**
2. Copie **Project URL** → colle dans `supabase-config.js` (SUPABASE_URL)
3. Copie **anon public** (sous Project API keys) → colle dans `supabase-config.js` (SUPABASE_ANON_KEY)

## 5. Mettre à jour le fichier config

Ouvre `supabase-config.js` et remplace :

```javascript
window.SUPABASE_URL = 'https://ton-projet.supabase.co';
window.SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
```

C'est tout ! Ton site partagera les écrits avec tout le monde.
