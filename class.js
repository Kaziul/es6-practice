class Student{
    constructor(stuId, stuName){
        this.id = stuId;
        this.name = stuName;
        this.school = 'Dhaka school'
    }
}

const student1 = new Student(1, 'Sakib'); // class er object (property)
const student2 = new Student(2, 'Rakib');
console.log(student1, student2);
console.log(student1.name, student2.name);