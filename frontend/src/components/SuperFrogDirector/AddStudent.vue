<template>
  <div class="main-layout">
    <Sidebar />
    <div class="content">
      <div class="form-container">
        <h2>Add a New Student</h2>
        <form id="add-student-form">
          <div class="form-group">
            <label for="first-name">First Name</label>
            <input type="text" id="first-name" name="first_name" required>
          </div>
          <div class="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" id="last-name" name="last_name" required>
          </div>
          <div class="form-group">
            <label for="phone-number">Phone Number</label>
            <input type="text" id="phone-number" name="phone_number" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="tel" id="phone-number" name="phone_number" required>
          </div>
          <div class="form-group">
            <label for="address">Physical Address</label>
            <input type="text" id="address" name="address" required>
          </div>
          <button type="submit" class="submit-button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./SidebarMenu.vue";

export default {
  name: 'AddStudent',
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
