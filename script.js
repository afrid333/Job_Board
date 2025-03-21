document.addEventListener("DOMContentLoaded", function () {
    const jobListings = document.getElementById("job-listings");
    const searchInput = document.getElementById("search");
    const filterSelect = document.getElementById("filter");
    const postJobForm = document.getElementById("post-job-form");

    let jobs = [
        { title: "Software Engineer", company: "TechCorp", location: "New York", category: "it" },
        { title: "Marketing Manager", company: "BizMarketing", location: "San Francisco", category: "marketing" },
        { title: "Financial Analyst", company: "FinServe", location: "Chicago", category: "finance" }
    ];

    function displayJobs(filteredJobs = jobs) {
        jobListings.innerHTML = "";
        filteredJobs.forEach(job => {
            const jobCard = document.createElement("div");
            jobCard.classList.add("job-card");
            jobCard.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <button class="apply-btn">Apply Now</button>
            `;
            jobListings.appendChild(jobCard);
        });
    }

    function filterJobs() {
        const searchTerm = searchInput.value.toLowerCase();
        const category = filterSelect.value;
        
        const filteredJobs = jobs.filter(job => 
            (category === "all" || job.category === category) &&
            (job.title.toLowerCase().includes(searchTerm) || job.company.toLowerCase().includes(searchTerm))
        );
        displayJobs(filteredJobs);
    }

    searchInput.addEventListener("input", filterJobs);
    filterSelect.addEventListener("change", filterJobs);

    postJobForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const title = postJobForm.elements[0].value;
        const company = postJobForm.elements[1].value;
        const location = postJobForm.elements[2].value;
        const category = "it"; 
        
        jobs.push({ title, company, location, category });
        displayJobs();
        postJobForm.reset();
        alert("Job posted successfully!");
    });

    displayJobs();
});
