import { observable } from "mobx";

class GlobalStore {
  @observable isLoggedIn = false;
  @observable user = null;

  constructor() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.isLoggedIn = true;
    }
  }

  onLoginStatusChange = status => {
    if (status) {
      let user = {
        name: "Niki Patel",
        age: 24,
        gender: "Female",
        skills: [
          {
            color: "#5FC296",
            title: "Senior Animator",
            text: "Senior Animator"
          },
          {
            color: "#FF5500",
            title: "Senior Product Designer",
            text: "Senior Product Designer"
          },
          {
            color: "#2DB7F5",
            title: "Visual Designer",
            text: "Visual Designer"
          },
          {
            color: "#FFAA00",
            title: "Computer Engineer",
            text: "Computer Engineer"
          }
        ]
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    } else {
      localStorage.clear();
      this.user = null;
    }
    this.isLoggedIn = status;
  };

  updateSkills = skills => {
    this.user.skills = skills;
    localStorage.setItem("user", JSON.stringify(this.user));
  };

  updateProfile = (e, form, profile) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        this.user.age = values.age;
        this.user.gender = values.gender;
      }
      profile.onToggleProfile();
    });
  };

  setUserFromSocial = name => {
    let user = {
      name,
      age: 24,
      gender: "Female",
      skills: [
        {
          color: "#5FC296",
          title: "Senior Animator",
          text: "Senior Animator"
        },
        {
          color: "#FF5500",
          title: "Senior Product Designer",
          text: "Senior Product Designer"
        },
        {
          color: "#2DB7F5",
          title: "Visual Designer",
          text: "Visual Designer"
        },
        {
          color: "#FFAA00",
          title: "Computer Engineer",
          text: "Computer Engineer"
        }
      ]
    };
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
    this.isLoggedIn = true;
  };
}
export default GlobalStore;
