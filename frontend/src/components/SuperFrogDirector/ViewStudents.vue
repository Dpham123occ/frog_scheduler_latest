<template>
    <div class="main-layout">
      <Sidebar />
      <div class="content">
        <h2>View All Students</h2>
        <div class="students-filters">
          <input
            type="search"
            id="student-name-search"
            class="form-control"
            placeholder="Student Name"
            v-model="nameFilter"
          />
          <label for="active-students-only" class="checkbox-container">
            Active Students Only
            <input
              type="checkbox"
              id="active-students-only"
              v-model="activeStudentsOnly"
            />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="students-table">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th @click="sortBy('firstName')">First Name <span class="sort-icon">{{ sortIcons.firstName }}</span></th>
                <th @click="sortBy('lastName')">Last Name <span class="sort-icon">{{ sortIcons.lastName }}</span></th>
                <th>Email</th>
                <th>Account Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in filteredAndSortedStudents" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.accountStatus }}</td>
                <td>
                  <button class="btn btn-action">Edit</button>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pagination">
          <a href="#" class="page-link">Previous</a>
          <a href="#" class="page-link active">1</a>
          <a href="#" class="page-link">2</a>
          <a href="#" class="page-link">3</a>
          <a href="#" class="page-link">Next</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from "./SidebarMenu.vue";
  
  export default {
    name: "ViewStudents",
    components: {
      Sidebar,
    },
    data() {
      return {
        students: [
          // Sample student data, replace with actual data
          {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            email: "john.doe@tcu.edu",
            accountStatus: "Pending",
            active: true,
          },
          // Add more student records as needed
        ],
        nameFilter: "",
        activeStudentsOnly: false,
        sortKey: "id",
        sortOrder: "asc",
      };
    },
    computed: {
      filteredAndSortedStudents() {
        return this.students
          .filter((student) => {
            return (
              (!this.activeStudentsOnly || student.active) &&
              (student.firstName.toLowerCase().includes(this.nameFilter.toLowerCase()) ||
                student.lastName.toLowerCase().includes(this.nameFilter.toLowerCase()))
            );
          })
          .sort((a, b) => {
            let modifier = this.sortOrder === "asc" ? 1 : -1;
            if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
            if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
            return 0;
          });
      },
      sortIcons() {
        return {
          firstName: this.sortKey === "firstName" ? (this.sortOrder === "asc" ? "▲" : "▼") : "",
          lastName: this.sortKey === "lastName" ? (this.sortOrder === "asc" ? "▲" : "▼") : "",
        };
      },
    },
    methods: {
      sortBy(key) {
        if (this.sortKey === key) {
          this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
        } else {
          this.sortKey = key;
          this.sortOrder = "asc";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .main-layout {
    display: flex;
  }
  
  .content {
    flex: 1;
    padding: 20px;
  }
  
  /* The rest of your CSS, if any, can go here */
  </style>
  