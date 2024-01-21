//utility types
// are built in types

//Partial type
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}; //the Partial type makes all properties of an object type optional, so that they can be set later in the code
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

//Readonly type
const namess: Readonly<string[]> = ['Max', 'Anna'];
// namess.push('Manu') // error!
// namess.pop() // error!
console.log(namess[1]);
