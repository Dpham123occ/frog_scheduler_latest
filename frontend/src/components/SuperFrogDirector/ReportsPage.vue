<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <h2>Reports</h2>
      <form id="reports-form">
        <div class="form-group">
          <label for="event-type">Event Type</label>
          <select id="event-type" name="event_type" required>
            <option value="">Select Event Type</option>
            <option value="sports">Sports</option>
            <option value="academic">Academic</option>
            <option value="social">Social</option>
            <!-- Space for more options if needed -->
          </select>
        </div>

        <div class="form-group">
          <label for="date-range">Date Range</label>
          <input type="date" id="date-from" name="date_from" required>
          to
          <input type="date" id="date-to" name="date_to" required>
        </div>

        <div class="form-group">
          <button type="submit" class="submit-button">Generate Report</button>
        </div>
      </form>

      <div id="reports-results">
        <!-- The generated report displayed here -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./SidebarMenu.vue";

export default {
  name: 'ReportsPage',
  components: {
    Sidebar,
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
