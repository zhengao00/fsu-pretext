var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for Data Structures (CSCI 271, Section 001) for Spring 2026. It is a 4 credit course.    Instructor  Prof. Zhenguang Gao, HH 418C, Prof.Gao email here .    Student Hours  M: 10:20am--12:20 pm W: 2:30pm--4:20 pm    Class meets  MW 8:30am -- 10:20am    Course Description  This is an introduction to fundamental data structures such as lists, stacks queues, trees, heaps, hash tables and graphs. Corresponding algorithms and program analysis will be discussed. At the end of the course, students should be able to • understand the purposes and methods of the most commonly occurring data structures • analyze the data structure needs of particular problems • compare the efficiency of various implementations and algorithms • write applications using data structures discussed in the course      Prerequisite  CSCI 215 Computer Science II using Java, and MATH 180 Precalculus    Textbook and course materials   Data Structures & Other Objects using Java by Main, Addison Wesley Publishing.       Course Overview  Here is the tentative list of topics for the semester   Review on basic concepts in CS1, CS2 and most common structures, Explain the goals and methods used in data structures.  Linked-list  Container classes  Stacks  Queues  Recursion  Sorting: binary sort, merge sort, shell sort  Trees, traversal, and AVL trees  Graphs, graph algorithms       Assessments and Grades  Grade Policy:  Grade Policy, Test, and Final Exam Times    Activity  Points    Attendance and Participation  100    Tests (03\/05, 04\/09)  200    Homework, Programming Assignments  400    Final Exam (8:00am, 05\/14)  300        Total  1000      Attendance: Attendance is expected and can alter the course grade. It is the student's responsibility to verify that the professor has been notified of excused absences for any reason, including official university functions. The due date of an assignment will NOT be automatically extended as a result of an excused absence. If the professor noticed more than 7 times of unexcused absence for any students, he will take that as evidence of lack of interest and a final grade of ‘F’ will be given to that student.  Attendance Credit Points: (Total 100)    # of recorded unexcused absence  Points    Attendance and Participation  100    0  100    1  90    2  80    3  70    4  60    5  50    6  40    7  30    >=8  0, also leads to an “F” for the overall letter grade         Miscellaneous  There will be no incompletes in this class except for reasons of dire illness near the end of a semester in which all previous work has been completed satisfactorily. You can not redo any assignment, or do extra work after the semester is over to improve your grade, as this arrangement would then by fairness have to be extended to the rest of the class (an impossible situation). I have zero tolerance for any kind of academic misconduct (plagiarism, cheating on exams), and be assured that I will instantly report violations of the department, and the college, if necessary. Whenever you submit a piece of academic work and sign your name to it, you are verifying that this work is the result of your own intellectual efforts; it is Plagiarism to submit work solely under your own name in which: • You collaborated with another student in solving the homework problems; • You copied the solution from a book, web site, or the work of another student; or • You got significant help in solving the problem, but do not acknowledge this in your solution. In this course, you will do all of your work alone; in other classes, you may work as part of a team. In any case, you must specify precisely the authorship of the content of your submission. In particular, you must always provide proper attribution of authorship by naming all persons, books, or resources that provided intellectual content towards the final result. To fail to provide proper attribution is plagiarism. Plagiarism demeans the seriousness of what we do in class, and does not allow you as a student to obtain a fair grade for the results you worked hard for.  At Framingham State University, faculty, staff, and students work together to sustain a learning, working, and living community free from hate, discrimination, harassment, and intolerance. We recognize the damaging effects of systemic racism—including policies, structures, and historic practices—on the experience and success of communities of color. Coming from different backgrounds and different levels of privilege, we can all affirm and engage in antiracist work. Diversity of voices, and of minds, strengthens our ability to solve problems and to ask and answer questions about the world we share. As your instructor, I commit to upholding community values of inclusion, civility, accessibility, and mutual respect. I expect this class to commit to creating a community that affirms and welcomes all persons from diverse backgrounds and experiences, and supports the realization of everyone’s potential.    "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Data Structures (CSCI 271, Section 001) "
},
{
  "id": "none",
  "level": "2",
  "url": "syllabus.html#none",
  "type": "Table",
  "number": "1",
  "title": "Grade Policy, Test, and Final Exam Times",
  "body": " Grade Policy, Test, and Final Exam Times    Activity  Points    Attendance and Participation  100    Tests (03\/05, 04\/09)  200    Homework, Programming Assignments  400    Final Exam (8:00am, 05\/14)  300        Total  1000    "
},
{
  "id": "sec-assessments-3-1-1",
  "level": "2",
  "url": "syllabus.html#sec-assessments-3-1-1",
  "type": "Table",
  "number": "2",
  "title": "Attendance Credit Points: (Total 100)",
  "body": " Attendance Credit Points: (Total 100)    # of recorded unexcused absence  Points    Attendance and Participation  100    0  100    1  90    2  80    3  70    4  60    5  50    6  40    7  30    >=8  0, also leads to an “F” for the overall letter grade    "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1   This is an outline of the topics we covered in the first week of class.     Monday 8\/22      Wednesday 8\/24      Friday 8\/26     "
},
{
  "id": "course-notes-4",
  "level": "1",
  "url": "course-notes-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Assignment #1                           CSCI 271   Spring 2026",
  "body": " Assignment #1 CSCI 271 Spring 2026    50 pts. Due 11:59 pm 02\/01\/2026      Assignment: Palindrome Checker using Stacks and Queues.      Objective:  The goal of this assignment is to implement a program that determines whether a given sentence is a palindrome using the properties of stack (Last-In, First-Out - LIFO) and queue (First-In, First-Out - FIFO) data structures.    Theory:  A palindrome is a sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and capitalization (e.g., \"Madam, in Eden, I'm Adam\" or \"A man, a plan, a canal, Panama\"). By pushing each character of the processed string (lowercase, no punctuation\/spaces) into a stack and enqueueing the same characters into a queue, we can leverage their differing access methods. The queue will preserve the original order of characters, while the stack will reverse the order when characters are popped. Comparing the characters from the front of the queue and the top of the stack simultaneously allows us to check for the palindrome property efficiently    Instructions:   1. Input: Your program should prompt the user to enter a sentence.  2. Preprocessing: Process the input sentence to remove all spaces and punctuation, and convert all characters to lowercase. This ensures that only the relevant alphabetical characters are used for the palindrome check.  3. Data Structure Population:   o Initialize an empty stack and an empty queue.    o Iterate through the processed string and insert each character into both the stack and the queue.   4. Palindrome Check:   o Compare characters by simultaneously popping from the stack and dequeuing from the queue in a loop.    o If at any point a popped character from the stack does not match the dequeued character from the queue, the sentence is not a palindrome, and the comparison loop should stop.    o If the loop completes with all characters matching, the sentence is a palindrome.  5. Output: Display the result to the user, clearly indicating whether the original sentence is a palindrome.    General Requirements:   1. (8 pts) Fully document your program  2. (32 pts) Implement all the classes (including Stack, Queue, Linked List if it is linked list based) correctly 3. (10 pts) Include compiling\/testing information    "
},
{
  "id": "course-notes-4-3-1",
  "level": "2",
  "url": "course-notes-4.html#course-notes-4-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Assignment: Palindrome Checker using Stacks and Queues.   "
},
{
  "id": "activity-01-intro-activity",
  "level": "1",
  "url": "activity-01-intro-activity.html",
  "type": "Worksheet",
  "number": "",
  "title": "Introduction Activity",
  "body": " Introduction Activity    This is the introduction to the activity.      This is the first exercise.    "
},
{
  "id": "activity-01-intro-activity-3",
  "level": "2",
  "url": "activity-01-intro-activity.html#activity-01-intro-activity-3",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  This is the first exercise.   "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
