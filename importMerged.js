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
    JobTitle : "SUPERHERO",
    Salary : 17.29,
    Location : "Canada"
}

var Job = {JobTitle : "Lord of Cinder", Location: "Kiln of the First Flame" }
var Person = {name : "Gwyn", Age: "Old"}

var personDetail = {}

personDetail = Object.assign(personDetail, Job, Person)

console.log(personDetail)