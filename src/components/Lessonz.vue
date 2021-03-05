<template> 
  <main>
    <div id="sort-section">
      <h2>Sort Options:</h2>
      <!--V-model - to sort option, pick value and update on screen -->
        <select v-model="sort" v-on:change="sortLessons">
          <option :value="1">Subject: Ascending</option>
          <option :value="2">Subject: Descending</option>
          <option :value="3">Location: Ascending</option>
          <option :value="4">Location: Descending</option>
          <option :value="5">Price: Ascending</option>
          <option :value="6">Price: Descending</option>
          <option :value="7">Availability: Ascending</option>
          <option :value="8">Availability: Descending</option>
         </select>
              </div>
                <div id="main" v-for="(lesson, index) in lessons" :key="index">
                    <h1>Subject Name: {{lesson.SubjectName}}</h1>
                    <h2>Location: {{lesson.Location}}</h2>
                    <h2>Price: €{{lesson.Price}}</h2>
                    <h2 id="Space">Space: {{lesson.Space}}</h2>
                                <figure>
                                  <img v-bind:src="lesson.Image" height="320" width="320" />
                                </figure>
                              <button id="add" @click="addLesson(lesson), reduce(index)">Add to cart</button>
                </div>
  </main>
</template>

<script>
export default {
        name: "Lessonz",
        props: {
        },
                data() {
                  return {
                    sort: '',
                    lessons: [
                      {
                        SubjectName: "PIANO LESSONS",
                        Price: 40,
                        Image: "piano.jpg",
                        Space: 5,
                        Location: "Mosta",
                        
                      },
                      {
                        SubjectName: "GUITAR LESSONS",
                        Price: 45,
                        Image: "guitar.jpg",
                        Space: 5,
                        Location: "Lija",
                      },
                      {
                        SubjectName: "KARATE LESSONS",
                        Price: 25,
                        Image: "karate.jpg",
                        Space: 5,
                        Location: "Hamrun",
                      },
                      {
                        SubjectName: "GYMNASTIC LESSONS",
                        Price: 75,
                        Image: "gymnastics.jpg",
                        Space: 5,
                        Location: "Ta`Qali",
                      },
                      {
                        SubjectName: "COMPUTER LESSONS",
                        Price: 475,
                        Image: "computer.jpg",
                        Space: 5,
                        Location: "Online",
                      },
                      {
                        SubjectName: "MATHS LESSONS",
                        Price: 500,
                        Image: "maths.jpg",
                        Space: 5,
                        Location: "Online",
                      },
                      {
                        SubjectName: "ENGLISH LESSONS",
                        Price: 300,
                        Image: "language.jpg",
                        Space: 5,
                        Location: "Sliema",
                      },
                      {
                        SubjectName: "PHYSICS LESSONS",
                        Price: 470,
                        Image: "physics.jpg",
                        Space: 5,
                        Location: "Zebbug",
                      },
                      {
                        SubjectName: "ITALIAN LESSONS",
                        Price: 150,
                        Image: "language.jpg",
                        Space: 5,
                        Location: "Fgura",
                      },
                      {
                        SubjectName: "FRENCH LESSONS",
                        Price: 150,
                        Image: "language.jpg",
                        Space: 5,
                        Location: "Msida",
                      },
                    ],
    }
  },
  methods: {
        addLesson(lesson) {
            this.$emit('addLesson', lesson);
        },
    sortLessons() {
              switch(this.sort) {
                case 1:
                  this.lessons.sort((a, b) => {    //Acending
                    if (a.SubjectName > b.SubjectName) {    //If true = 1.
                      return 1;
                    } else if (a.SubjectName < b.SubjectName) { //If true = -1 (negative)
                      return -1;
                    } else {
                      return 0;    
                    }
                  })
        break;
                case 2:
                  this.lessons.sort((a, b) => {    
                    if (a.SubjectName > b.SubjectName) {
                      return -1;
                    } else if (a.SubjectName < b.SubjectName) {
                      return 1;
                    } else {
                      return 0;
                    }
          })
        break;
                case 3:
                  this.lessons.sort((a, b) => {    
                    if (a.Location > b.Location) {
                      return 1;
                    } else if (a.Location < b.Location) {
                      return -1;
                    } else {
                      return 0;
                    }
          })
        break;
                case 4:
                  this.lessons.sort((a, b) => {    
                    if (a.Location > b.Location) {
                      return -1;
                    } else if (a.Location < b.Location) {
                      return 1;
                    } else {
                      return 0;
                    }
          })
        break;
                case 5:
                  this.lessons.sort((a, b) => {    
                    if (a.Price > b.Price) {
                      return 1;
                    } else if (a.Price < b.Price) {
                      return -1;
                    } else {
                      return 0;
                    }
          })
        break;
                case 6:
                  this.lessons.sort((a, b) => {    
                    if (a.Price > b.Price) {
                      return -1;
                    } else if (a.Price < b.Price) {
                      return 1;
                    } else {
                      return 0;
                    }
          })
        break;
                  case 7:
                    this.lessons.sort((a, b) => {    
                      if (a.Space > b.Space) {
                        return 1;
                      } else if (a.Space < b.Space) {
                        return -1;
                      } else {
                        return 0;
                      }
          })
        break;
                  case 8:
                    this.lessons.sort((a, b) => {    
                      if (a.Space > b.Space) {
                        return -1;
                      } else if (a.Space < b.Space) {
                        return 1;
                      } else {
                        return 0;
                      }
          })
        break;
      }
    },
    reduce(index) {
          this.lessons[index].Space--;
          if (this.lessons[index].Space == 0) {
                  document.getElementById("Space").innerHTML = "<h2>Spaces Full</h2>"
                  document.getElementById("add").style.visibility = "hidden";
          } 
    }
  },
};
</script>