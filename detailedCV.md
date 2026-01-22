# Florent Lin

**Project Consultant Engineer | Specialization: Data Science**
*2 years of experience*

## 👤 Informations Personnelles

- **Date de naissance :** 20 / 04 / 2002
- **Situation :** Célibataire
- **Nationalité :** Française
- **Langues :**
  - Français (Langue maternelle)
  - Anglais (Courant)
  - Chinois (Basique)

---

## 🛠 Compétences (Skills)

### Compétences Principales

- **Machine Learning :** Apprentissage supervisé/non supervisé, XGBoost, Random Forest, Réseaux de neurones.
- **Deep Learning & NLP :** Fine-tuning de LLMs (LLaMA, RoBERTa), Transformers, PyTorch.
- **Production :** Docker, Kubernetes.
- **Data Engineering :** Pipelines ETL, Feature Engineering, SQL, PostgreSQL.
- **IA Générative :** Systèmes RAG, Prompt Engineering, intégration OCR.
- **Explainability :** SHAP, Optimisation Bayésienne.
- **Cloud & Backend :** AWS (S3), GCP, FastAPI, développement d'API.
- **Visualisation :** PowerBI, dashboards interactifs (Streamlit).
- **Communication :** Vulgarisation de concepts ML/statistiques pour des experts métiers (géotechnique, hydrologie).

### Connaissances Techniques

- **Outils :** Python (Pandas, Plotly, Pytorch, JAX, Scikit-learn, SHAP, HuggingFace), Git, Docker, Kubernetes, JupyterLab, OR-Tools, VS-Code, Cursor.
- **Logiciels :** PowerBI, PostgreSQL, AWS (S3, CloudFront, EC2), Github Actions, Supabase.
- **Langages de développement :** Python, SQL, R, Bash (Notions : TypeScript, C, Go).
- **Méthodes :** ETL, Fine-tuning (LLM), Feature engineering, NLP, RAG, Prompt Engineering, SHAP, Time Series, Méthode Agile.
- **Normes & Standards :** API (REST), Testing, Data Privacy, Code Quality, Documentation, Code Versioning.

---

## 💼 Expériences Professionnelles

### 1. Aubay Data & AI (Client : SNCF Réseau)

**Poste :** Data Scientist  
**Période :** Janvier 2025 – Février 2026 (1 an 2 mois)  
**Environnement Client :** Gestionnaire de l'infrastructure ferroviaire française (30 000 km de réseau). Équipe de 2 experts géotechniques, 1 Data Scientist, 1 Software Developer.

#### Projet A : Prédiction des Zones à Évolution Rapide (ZER)

*Développement d'un système de prédiction pour anticiper la dégradation des voies (0.4% du réseau).*

- **Data Engineering :** Création de datasets via jointures spatio-temporelles (géométrie des voies, météo via API, Azure Storage).
- **Modélisation :** Comparaison d'algorithmes (XGBoost, RF) avec gestion du déséquilibre de classes extrême via sampling stratégique.
- **Optimisation :** Calibration des seuils via Hyperopt pour maximiser le Rappel et le F1-score.
- **Interprétabilité :** Utilisation de SHAP pour expliquer les prédictions aux experts métiers.

#### Projet B : Analyse Spatio-temporelle des Défauts Géométriques

- **Visualisation :** Heatmaps interactives de l'évolution pluriannuelle des défauts.
- **Alignement Spatial :** Algorithme de synchronisation ZNCC pour corriger les décalages GPS entre les campagnes de mesure.
- **Indicateurs :** Calcul de l'écart-type spatial par fenêtres glissantes pour identifier les hétérogénéités saisonnières.
- **Impact Maintenance :** Intégration des données d'intervention (bourrage, renouvellement) pour évaluer leur efficacité.

**Environnement technique :** Python, Scikit-learn, SHAP, Hyperopt, Plotly, Pandas, NumPy, Parquet, Azure Storage.

---

### 2. Aubay Data & AI (Client : SNCF Réseau) – Second volet

**Poste :** Data Scientist  
**Période :** Janvier 2025 – Février 2026  
**Environnement Client :** Équipe de 3 experts géotechniques et hydrologiques.

#### Projet : Visualisation unifiée des risques hydrauliques et de plateforme

*Agrégation de sources fragmentées pour prioriser les interventions à l'échelle nationale.*

- **Traitement de données :** Analyse de Modèles Numériques de Terrain (MNT) de 1m² à 25m² sur tout le territoire.
- **Analyse Topographique :** Caractérisation des pentes et talus pour détecter les zones vulnérables au drainage.
- **Orchestration :** Harmonisation de 9 sources de données hétérogènes.
- **Dashboard :** Création d'un tableau de bord Power BI permettant le filtrage par Infrapôle et la priorisation dynamique.

**Environnement technique :** Python, (Geo-)Pandas, NumPy, Plotly, Power BI.

---

### 3. Franchises Global (San Diego, USA)

**Poste :** AI Engineer  
**Période :** Août 2025 – Novembre 2025 (3 mois)

#### Projet : Système de matching investisseurs-franchises

- **Orchestration LLM :** Gemini Flash Lite pour l'extraction structurée (HTML), Gemini Pro pour le raisonnement, OpenAI Embeddings.
- **Moteur de recherche hybride :** Combinaison de recherche sémantique (vectorielle) et de filtres SQL.
- **Data Engineering :** Pipeline de nettoyage HTML vers Markdown et système NER pour l'extraction de données géographiques.

**Environnement technique :** Python, GCP, OpenAI, Pydantic, Supabase, BeautifulSoup.

---

### 4. Mewe Partners (Grenoble, France)

**Poste :** AI Engineer  
**Période :** Avril 2025 – Juillet 2025 (4 mois)

#### Projet : Plateforme d'analyse automatique des Plans Locaux d'Urbanisme (PLU)

- **Orchestration Multi-Modèles :** Architecture agnostique intégrant Gemini, Grok et Mistral AI (Mistral-OCR).
- **Optimisation :** Implémentation du Context Caching (réduction des coûts et de la latence par 2).
- **Pipeline ETL :** Extraction de schémas complexes via traitement multimodal et validation via Pydantic.
- **Stockage :** Stratégie duale SQLite (dev) / Supabase (prod).

**Environnement technique :** Python, GCP, Pydantic, Supabase, Mistral OCR.

---

### 5. Aubay (R&D)

**Poste :** ML Researcher Intern  
**Période :** Juin 2024 – Novembre 2024 (6 mois)

#### Projet : Selective Knowledge Removal (Unlearning) dans les LLMs

*Implémentation de la méthode ECO pour faire oublier des informations spécifiques sans perte de capacité.*

- **Détection :** Classifieur basé sur BERT pour identifier les prompts ciblant le "Forget Set".
- **Corruption d'Embeddings :** Injection de bruit gaussien pour éviter le "catastrophic forgetting".
- **Évaluation :** Pipeline sur les datasets TOFU et WMDP (scores ROUGE/BLEU, Truth Ratio).
- **Fine-tuning :** Utilisation de LoRA sur Qwen (0.5b/7b) et Llama (3b).

**Environnement technique :** Python, PyTorch, Hugging Face, LoRA, BERT.

---

### 6. Deloitte (Paris, France)

**Poste :** Research Intern  
**Période :** Mai 2023 – Août 2023 (4 mois)

#### Projet : Optimisation conjointe du planning infirmier et des tournées (VRP)

- **Modélisation :** Problème NP-Hard avec contraintes temporelles et législatives strictes.
- **Résolution :** Utilisation de la Programmation par Contraintes (CP) avec recherche locale.
- **Fonction Objectif :** Équilibre entre préférences du personnel (soft constraints) et coûts de transport.

**Environnement technique :** Python, Google OR-Tools (CP-SAT), NumPy, Pandas.

---

## 🎓 Éducation

- **ENSAE Paris :** Diplôme d'Ingénieur en Data Science, Statistique & ML (Niveau Master).
- **Lycée Saint-Louis :** Classe Préparatoire PC* (Physique & Chimie) - Niveau Bachelor.

---

## 🔗 Références & Liens

- **Portfolio :** [https://florentlin.com](https://florentlin.com)
- **Github :** [https://github.com/fllin1](https://github.com/fllin1)
- **Projet Mewe Partners :** [https://mwplu-v15.web.app](https://mwplu-v15.web.app)
- **Projet Franchises Global :** [https://global-franchises.vercel.app/](https://global-franchises.vercel.app/)
