// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Create a constructor function for Teacher
function createTeacher(
  firstName: string,
  lastName: string,
  fullTimeEmployee: boolean,
  location: string,
  attributes: Record<string, any> = {}
): Teacher {
  return {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...attributes,
  };
}


// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Define the Directors interface by extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}


// printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  const firstInitial = firstName.charAt(0);
  return `${firstInitial}. ${lastName}`;
}

// The interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
}

// Define the StudentClass interface
interface StudentClass {
  new (firstName: string, lastName: string): StudentClassInstance;
}

// Define the StudentClassInstance interface
interface StudentClassInstance {
  workOnHomework(): string;
  displayName(): string;
}

// Define the StudentClass class
class StudentClass implements StudentClassInstance {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
