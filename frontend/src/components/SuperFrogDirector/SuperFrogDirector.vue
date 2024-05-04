<template>
  <div>
    <h1>This is superfrog director!</h1>
    <button @click="redirectToAddStudent">Start The Program!</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      username: localStorage.getItem("username"),
      activeDropdown: null, // This will track which dropdown is active
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.$router.push("/login");
    },
    redirectToAddStudent() {
      this.$router.push('/super-frog-director/add-student');
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #4b0082;
  color: white;
  width: 250px;
  height: 100vh;
  padding: 20px;
}
.logo-container {
  text-align: center;
  margin-bottom: 30px;
}

.logo-container img {
  width: 80%;
  height: auto;
}

.sidebar a,
.sidebar-section-header {
  text-decoration: none;
  color: white;
  display: block;
  padding: 15px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

.sidebar a:hover,
.sidebar a.active,
.sidebar-section-header.active {
  background-color: #663399;
}

.sidebar-section-header::after {
  content: "▼";
  float: right;
}

.sidebar-section-header.active::after {
  content: "▲";
}

.sidebar-section-links {
  display: none;
  padding-left: 20px;
}
</style>
