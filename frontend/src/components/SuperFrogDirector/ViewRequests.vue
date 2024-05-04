<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <h2>View All Requests</h2>
      <div class="request-filters">
        <label for="request-status">Pick a request status:</label>
        <select id="request-status" class="form-control">
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
        <input
          type="search"
          id="customer-name-search"
          class="form-control"
          placeholder="Customer Name"
        />
      </div>
      <div class="request-table">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Customer Name</th>
              <th>Event Date</th>
              <th>Event Title</th>
              <th>Request Status</th>
              <th>Assigned SuperFrog</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="request in requests" :key="request.id">
              <td>{{ request.id }}</td>
              <td>{{ request.firstName }} {{ request.lastName }}</td>
              <td>{{ request.eventDate }}</td> <!-- Assuming eventDate exists, if not, handle appropriately -->
              <td>{{ request.eventTitle }}</td>
              <td>{{ request.status }}</td>
              <td>{{ request.superfrogDto ? request.superfrogDto.name : 'None' }}</td> <!-- Adjust based on actual data structure -->
              <td>
                <button class="btn btn-action">Edit</button>
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
import axios from 'axios';  // Make sure Axios is imported

export default {
  name: "ViewRequests",
  components: {
    Sidebar,
  },
  data() {
    return {
      requests: []
    };
    
  },
  methods: {
    async fetchRequests() {
      try {
        const response = await axios.get('https://frog-scheduler-latest.onrender.com/api/requests');
        this.requests = response.data.data;
       
      } catch (error) {
        console.error('Failed to fetch requests:', error);
      }
    }
  },
  mounted() {
    this.fetchRequests();  // Fetch data when component mounts
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
  
  /* The rest of your CSS, if any, can go here */
  </style>
  