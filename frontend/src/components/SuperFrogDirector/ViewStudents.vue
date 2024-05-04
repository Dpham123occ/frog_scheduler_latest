<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <h2>View All Superfrogs</h2>
      <div class="students-filters">
        <input
          type="search"
          id="student-name-search"
          class="form-control"
          placeholder="Student Name"
          v-model="nameFilter"
        />
        <label for="active-students-only" class="checkbox-container">
          Active Superfrogs Only
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
              <th @click="sortBy('username')">Username <span class="sort-icon">{{ sortIcons.username }}</span></th>
              <th>Roles</th>
              <th>Account Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in filteredAndSortedUsers" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.username }}</td>
              <td>{{ user.roles }}</td>
              <td>{{ user.enabled ? 'Active' : 'Inactive' }}</td>
              <td>
                <button class="btn btn-action">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./SidebarMenu.vue";
import axios from 'axios';

export default {
  name: "ViewStudents",
  components: {
    Sidebar,
  },
  data() {
    return {
      users: [],
      nameFilter: "",
      activeStudentsOnly: false,
      sortKey: 'username',
      sortOrder: 'asc',
    };
  },
  computed: {
    filteredAndSortedUsers() {
      return this.users
        .filter(user => {
          const isActive = user.enabled && user.roles.includes('superfrog');
          const nameMatch = user.username.toLowerCase().includes(this.nameFilter.toLowerCase());
          return (!this.activeStudentsOnly || isActive) && nameMatch;
        })
        .sort((a, b) => {
          let modifier = this.sortOrder === 'asc' ? 1 : -1;
          return a[this.sortKey].localeCompare(b[this.sortKey]) * modifier;
        });
    },
    sortIcons() {
      return {
        username: this.sortKey === 'username' ? (this.sortOrder === 'asc' ? '▲' : '▼') : '',
      };
    },
  },
  methods: {
    sortBy(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
    fetchUsers() {
      axios.get("https://frog-scheduler-latest.onrender.com/api/users")
        .then(response => {
          this.users = response.data.data.filter(user => user.roles.split(' ').includes('superfrog'));  // Changed here for exact role split and match
        })
        .catch(error => {
          console.error("Error fetching users:", error);
        });
    }
  },
  created() {
    this.fetchUsers();
  }
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
</style>
