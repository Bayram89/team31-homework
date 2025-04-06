console.log(" ====== > 2. Create an instance of the class  < ======");
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const myUser = new User("Bayram", "Erdem");
console.log(myUser.firstName);
console.log(myUser.lastName);

console.log(" ====== > 3. Create a class  < ======");

class User1 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName +  ' ' + this.lastName;
  }
}

const user1 = new User1("Bayram", "Erdem");
console.log(user1.getFullName());


console.log(" ====== > 4. Creating a CV class  < ====== ");

class Job {
    constructor(id, title, description, startDate, endDate) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.startDate = startDate;
      this.endDate = endDate;
    }
  }

  class Education {
    constructor(id, title, school, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.startDate = startDate;
        this.endDate = endDate;
    }
  }

  class CV {
    constructor(email) {
      this.email = email;
      this.jobs = [];
      this.educations = [];
    }
  
    addJob(job) {
      this.jobs.push(job);
    }

    removeJob(job) {
        this.jobs = this.jobs.filter(j => j.id !== job.id);
    }
    addEducation(education) {
        this.educations.push(education);
      }
      removeEducation(education) {
        this.educations = this.educations.filter(e => e.id !== education.id);
      }
    }

    // still need to understand this part on how to use renderCV()
    renderCV() 
    const cvOutput = document.getElementById("cvOutput");
    
   
    const emailElement = document.createElement("p");
    emailElement.textContent = `Email: ${this.email}`;
    cvOutput.appendChild(emailElement);

  
    const jobsTitle = document.createElement("h2");
    jobsTitle.textContent = "Work Experience:";
    cvOutput.appendChild(jobsTitle);

    
    const jobsList = document.createElement("ul");
    this.jobs.forEach(job => {
        const jobItem = document.createElement("li");
        jobItem.innerHTML = `<strong>${job.title}</strong>: ${job.description} (${job.startDate} - ${job.endDate})`;
        jobsList.appendChild(jobItem);
    });
    cvOutput.appendChild(jobsList);



   const myCV = new CV("bayram9erdem@gmail.com")
   const job1 = new Job(1, "Team Coordinator", "Helping my team thrive", "2025", "- Present")
   const job2 = new Job(2, "Junior Software Engineer", "Offering digital solutions", "2025", "- Upcoming Years")   
    
   const education1 = new Education(1, "English Studies", "Anadolu University", "2007", "2013")
   const education2 = new Education(2, "Web Development", "HackYourFuture", "2024", "2025")

   myCV.addJob(job1);
   myCV.addJob(job2);
   myCV.addEducation(education1);
   myCV.addEducation(education2);

   console.log(myCV.jobs, myCV.educations);

   myCV.removeJob(job1);
   myCV.removeEducation(education1);


   console.log(myCV);