<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <img src="./superfrog-logo.png" alt="SuperFrog Logo" class="logo">
    </div>
    <div class="sidebar-section">
      <a href="#" class="sidebar-section-header" @click="toggleDropdown('studentsDropdown')">SuperFrog Students</a>
      <div v-if="studentsDropdown" class="sidebar-section-links">
        <router-link to="/super-frog-director/add-student">Add a New Student</router-link>
        <router-link to="/super-frog-director/view-students">View All Students</router-link>
      </div>
    </div>
    <div class="sidebar-section">
      <a href="#" class="sidebar-section-header" @click="toggleDropdown('requestsDropdown')">Requests</a>
      <div v-if="requestsDropdown" class="sidebar-section-links">
        <router-link to="/super-frog-director/add-request">Add a New Request</router-link>
        <router-link to="/super-frog-director/view-requests">View All Requests</router-link>
      </div>
    </div>
    <router-link to="/super-frog-director/calendar" class="sidebar-single-link">Calendar</router-link>
    <router-link to="/super-frog-director/reports" class="sidebar-single-link">Reports</router-link>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentsDropdown: false,
      requestsDropdown: false,
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      this[dropdown] = !this[dropdown];
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.sidebar {
  background-color: white;
  color: white;
  width: 250px;
  padding: 20px;
}

.sidebar-logo {
  text-align: center;
  margin-bottom: 30px;
}

.sidebar-logo img {
  width: 80%;
  height: auto;
}

.sidebar-section-header {
  text-decoration: none;
  color: black;
  display: block;
  padding: 15px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

.sidebar-section-header:hover, .sidebar-section-header.active {
  background-color: #663399;
}

.sidebar-section-links {
  padding-left: 20px;
  /* Additional styles for dropdown menu */
  display: none; /* Initially hidden */
}

/* Show the dropdown menu when its parent is clicked */
.sidebar-section:hover .sidebar-section-links {
  display: block;
}

.sidebar-single-link {
  text-decoration: none;
  color: black;
  display: block;
  padding: 15px;
  margin-bottom: 10px;
}

.sidebar-single-link:hover {
  background-color: #663399;
}
</style>