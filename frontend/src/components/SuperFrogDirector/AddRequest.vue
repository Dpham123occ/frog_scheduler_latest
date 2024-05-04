<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <div class="form-container">
        <h2>Request SuperFrog Appearance</h2>
        <form id="new-request-form">
          <div class="form-group">
            <label for="event-type">Event Type</label>
            <select id="event-type" name="event_type" required>
              <option value="">Select an Event Type</option>
            </select>
          </div>
          <div class="form-group">
            <label for="event-date">Event Date</label>
            <input type="date" id="event-date" name="event_date" required>
          </div>
          <div class="form-group">
            <label for="event-title">Event Title</label>
            <input type="text" id="event-title" name="event_title" required>
          </div>
          <button type="submit" class="submit-button">Submit Request</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./SidebarMenu.vue";

export default {
  name: 'AddRequest',
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
