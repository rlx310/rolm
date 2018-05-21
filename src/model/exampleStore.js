const exampleStore = {
  user: {
    fetching: false,
    signedIn: true,
    loginFailed: false,
    name: "Timmy",
    email: "",
    avatar: "",
    coins: 0,
    priveledges: "",
    recents: {}
  },
  lessons: {
    currentProject: "",
    nextProject: "" ,
    prevProject: "",
    currentLesson: "",
    nextLesson: "",
    prevLesson: "",
  },
  sideNav: {
    active: false
  },

}

export default exampleStore