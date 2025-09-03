const students = [
    {
        id: 1,
        name: 'Hasibul Hasan Shanto',
        marks: 95,
        age: 22,
        hobby: 'Coding'
    },
    {
        id: 2,
        name: 'Shadman',
        marks: 85,
        age: 22,
        hobby: 'Playing football'
    },
    {
        id: 3,
        name: 'Salman Farsi',
        marks: 85,
        age: 22,
        hobby: 'Playing basketball'
    },
    {
        id: 4,
        name: 'Mahidul Islam',
        marks: 80,
        age: 21,
        hobby: 'Playing vollyball'
    },
    {
        id: 5,
        name: 'Mohetul Islam Sifat',
        marks: 75,
        age: 90,
        hobby: 'Playing hocky'
    }
]
const marks = students.map(mark => mark.marks)
console.log(marks)
const mark = students.filter(mark => mark.marks > 80)
console.log(mark)
const findMark = students.find(mark => mark.marks > 85)
console.log(findMark)