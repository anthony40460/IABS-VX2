/*
  # Correction des politiques RLS pour l'inscription

  1. Modifications
    - Ajout d'une politique permettant l'insertion de nouveaux utilisateurs
    - La politique vérifie que l'ID correspond à l'utilisateur authentifié

  2. Sécurité
    - Maintien de la sécurité en vérifiant auth.uid()
    - Conservation de la politique de lecture existante
*/

-- Politique pour permettre l'insertion de nouveaux utilisateurs
CREATE POLICY "Users can insert own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Politique pour permettre la mise à jour des données utilisateur
CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);