var user = {
    firstName: "Rohan",
    lastName: "Yadav",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in to total of ${this.courseList.length} courses`;
    },
    getInfo : function () {
        return `
        ${this.firstName} ${this.lastName},${this.role} has a login count of ${this.loginCount}
         and been enrolled to ${this.courseList.length} course which are as followed:
         ${this.courseList}
         `;
    }
  };
  var courseList=true;
  //console.log(user.getCourseCount());
  
  user.buyCourse("React JS");
  user.buyCourse("JavaScript ES 5");
  //console.log(user.getCourseCount());

  console.log(user.getInfo());