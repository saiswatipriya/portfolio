const projectData = {
    "1": {
        title: "E-commerce Customer Behavior & Revenue Optimization",
        tags: ["Python", "RFM Clustering", "Excel", "Business"],
        overview: "This project applies data analytics methodologies to analyze customer purchase behavior from the Online Retail II dataset. Using RFM (Recency, Frequency, Monetary) modeling, a total of 4,338 unique customers were segmented into actionable behavioral archetypes.",
        steps: [
            "Data Cleaning: Removed cancellations, returns, and missing Customer IDs.",
            "RFM Metric Generation: Calculated Recency, Frequency, and Monetary scores.",
            "Behavioral Mapping: Categorized customers into segments like Champions, Loyalists, and At-Risk.",
            "Insight Generation: Identified revenue concentration and churn risks."
        ],
        results: "Champions represent 14.5% of customers but generate 48.7% of revenue. Churn rate is 33.4%, with a significant pool of 'At Risk' customers requiring immediate intervention."
    },
    "2": {
        title: "A/B Testing & Product Decision Analysis",
        tags: ["Python", "Excel", "Hypothesis Testing", "Product"],
        overview: "Evaluated the impact of a 'One-Click Checkout' feature on e-commerce conversion rates using frequentist statistical testing on 290,000+ user sessions.",
        steps: [
            "Data Auditing: Removed group-page mismatches and duplicate users to ensure independence.",
            "Hypothesis Formulation: Defined null and alternative hypotheses.",
            "Statistical Testing: Performed a Two-Sample Z-Test for proportions.",
            "Interpretation: Analyzed p-value and confidence intervals."
        ],
        results: "The P-value of 0.1901 failed to reject the null hypothesis. Confidence intervals included zero, indicating no significant lift. Decision: Do not launch."
    },
    "3": {
        title: "Job Market Analysis Dashboard",
        tags: ["Python", "Excel", "ETL", "Data Mining"],
        overview: "An end-to-end data pipeline transforming 2,253+ raw job board listings into an interactive business intelligence asset. The project utilizes Python for text parsing/mining and Excel for dashboard engineering.",
        steps: [
            "Data Acquisition: Sourced Glassdoor job listings dataset.",
            "Algorithmic Cleaning (Python): Normalizing salaries and parsing geographical data.",
            "Keyword Mining: Automated text extraction to flag targeted technical competencies.",
            "Relational Assembly (Excel): Formula-based joins to structure the final model.",
            "Dashboarding: Engineering a grid-free visual dashboard with interactive Slicers."
        ],
        results: "SQL is the undisputed baseline market entry requirement (2:1 margin). Python and Spark command the highest salary premiums ($75k+). Hiring volume is heavily concentrated in established corporations (1980-2015)."
    },
    "4": {
        title: "OmniChannel Retail Velocity & Revenue Intelligence Engine",
        tags: ["Analytics", "Retail"],
        overview: "Project detail coming soon. This case study is currently under construction.",
        steps: [
            "Placeholder: Case study content is being finalized."
        ],
        results: "Placeholder: Stay tuned for updates on this revenue intelligence analysis."
    }
};

function loadProject() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectData[projectId];

    if (project) {
        document.querySelector('.project-title').textContent = project.title;
        document.querySelector('.case-study-content .overview-text').textContent = project.overview;
        
        const tagsContainer = document.querySelector('.case-study-header .tags-container');
        tagsContainer.innerHTML = project.tags.map(tag => `<p class="tag">${tag}</p>`).join('');

        const stepsList = document.querySelector('.case-study-content .steps-list');
        stepsList.innerHTML = project.steps.map(step => `<li>${step}</li>`).join('');

        document.querySelector('.case-study-content .results-text').textContent = project.results;
    }
}

window.onload = loadProject;
