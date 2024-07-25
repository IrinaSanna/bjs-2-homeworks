function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (this.marks) {
        this.marks.push(...marks);
    }
}

Student.prototype.getAverage = function () {
    let avarage = 0;
    let sumMarks = 0;

    if (!this.marks || !this.marks.length) {
        return 0;
    }

    if (this.marks) {
        for (let i = 0; i < this.marks.length; i++) {
            sumMarks += this.marks[i];
        }
        return avarage = sumMarks / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}