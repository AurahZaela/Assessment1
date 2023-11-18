var Person = {
    Status : "Living",
    Illnesses : "None", 
    getPersonDetails : function () {
        return {
            Status: this.Status,
            Occupation : this.Occupation
        }
    }

}


var Student = Object.create(Person)
    Student.Occupation = "Student"


var Jobs = {
    JobTitle : "Worker",
    Salary : 4.20,
    Location : "Florida"
}
Student.Salary = 0;

console.log(Student.getPersonDetails())




