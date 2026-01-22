import type { ProjectDetail } from '@/types/project'

export const sncf: ProjectDetail = {
  slug: 'sncf',
  title: 'Predictive Maintenance & Risk Analysis',
  company: 'SNCF Réseau (via Aubay)',
  date: 'January 2025 — Present',
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'text',
          content: 'As a Data Scientist at SNCF Réseau (managing 30,000 km of railway tracks), I work on two critical missions: predictive maintenance for track geometry defects and unified risk visualization for hydraulic and geotechnical hazards.',
        },
        {
          type: 'text',
          content: 'The role involves collaboration with geotechnical experts and software developers to deploy production-grade ML systems for safety-critical infrastructure.',
        },
      ],
    },
    {
      id: 'project-a',
      title: 'Project A: Rapid Evolution Zones (ZER)',
      blocks: [
        {
          type: 'heading',
          content: 'Objective',
        },
        {
          type: 'text',
          content: 'Develop a prediction system to anticipate track degradation (affecting 0.4% of the network) before it becomes critical.',
        },
        {
          type: 'heading',
          content: 'Key Actions',
        },
        {
          type: 'text',
          content: '• Data Engineering: Created datasets via spatio-temporal joins (track geometry, weather API, Azure Storage).\n• Modeling: Compared XGBoost and Random Forest algorithms, handling extreme class imbalance via strategic sampling.\n• Optimization: Calibrated thresholds via Hyperopt to maximize Recall and F1-score.\n• Explainability: Used SHAP to explain predictions to business experts.',
        },
      ],
    },
    {
      id: 'project-b',
      title: 'Project B: Spatio-temporal Defect Analysis',
      blocks: [
        {
          type: 'heading',
          content: 'Approach',
        },
        {
          type: 'text',
          content: '• Visualization: Created interactive heatmaps of multi-year defect evolution.\n• Spatial Alignment: Implemented ZNCC synchronization algorithm to correct GPS offsets between measurement campaigns.\n• Indicators: Calculated spatial standard deviation using sliding windows to identify seasonal heterogeneities.\n• Impact Analysis: Integrated maintenance intervention data (tamping, renewal) to evaluate efficacy.',
        },
      ],
    },
    {
      id: 'project-c',
      title: 'Project C: Unified Risk Visualization',
      blocks: [
        {
          type: 'text',
          content: 'Aggregated fragmented sources to prioritize interventions nationwide for hydraulic and platform risks.',
        },
        {
          type: 'text',
          content: '• Data Processing: Analyzed Digital Terrain Models (DTM) from 1m² to 25m² resolution.\n• Topographic Analysis: Characterized slopes and embankments to detect drainage-vulnerable zones.\n• Orchestration: Harmonized 9 heterogeneous data sources.\n• Dashboard: Built a Power BI dashboard allowing filtering by "Infrapôle" and dynamic prioritization.',
        },
      ],
    },
    {
      id: 'tech-stack',
      title: 'Technical Environment',
      blocks: [
        {
          type: 'text',
          content: 'Python, Scikit-learn, SHAP, Hyperopt, Plotly, Pandas, NumPy, Parquet, Azure Storage, GeoPandas, Power BI.',
        },
      ],
    },
  ],
}
