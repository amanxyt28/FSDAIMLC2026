const showResume = document.getElementById("showResume");
const resumeDetails = document.getElementById("resumeDetails");

showResume.addEventListener("click", function () {

    resumeDetails.innerHTML = `
        <h1>My Resume</h1>

        <h2>Personal Details</h2>
        <p><strong>Name:</strong> Aman Chaurasiya</p>
        <p><strong>Email:</strong> aman@example.com</p>
        <p><strong>Phone:</strong> 9554894752</p>
        <p><strong>Address:</strong> Ghaziabad, Uttar Pradesh</p>

        <h2>Education</h2>
        <p>B.Tech in C.S.E (AIML)</p>

        <h2>Skills</h2>
        <ul>
            <li>C Programming</li>
            <li>C++</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
        
        <h2>Projects</h2>
        <p>Resume Builder Project</p>
        <p>College Mini Projects</p>

        <h2>About Me</h2>
        <p>
            I am a student interested in web development and programming.
            I want to work on real-world projects and gain practical
            workplace experience.
        </p>
    `;
});