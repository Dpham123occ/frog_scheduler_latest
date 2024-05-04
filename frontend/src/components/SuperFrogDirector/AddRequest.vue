<template>
  <div class="main-layout">
    <Sidebar />
    <div class="submitbox">
      <h1>Contact Information</h1>
      <div class="form-group">
        <label for="contact-first-name">Contact First Name</label>
        <input type="text" id="contact-first-name" v-model="eventInfo.contactFirstName" @input="updateParent">
      </div>

      <div class="form-group">
        <label for="contact-last-name">Contact Last Name</label>
        <input type="text" id="contact-last-name" v-model="eventInfo.contactLastName" @input="updateParent">
      </div>

      <div class="form-group">
        <label for="phone-number">Phone Number</label>
        <input type="text" id="phone-number" v-model="eventInfo.phoneNumber" @input="updateParent">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="eventInfo.email" @input="updateParent">
      </div>
      <h1>Event Information</h1>
      <!-- Event Information -->
      <div class="form-group">
        <label for="event-title">Event Title</label>
        <input type="text" id="event-title" v-model="eventInfo.eventTitle" @input="updateParent">
      </div>

      <div class="dropdown-box">
      <label for="dropdown">Event Type</label>
        <select id="dropdown" v-model="eventInfo.eventType" @change="updateParent">
          <option value="TCU">TCU</option>
          <option value="PUBLIC">Public/Non-profit</option>
          <option value="PRIVATE">Private/Residential</option>
        </select>
      </div>

      <div class="form-group">
        <label for="oragnization-name">Name of Organization</label>
        <input type="text" id="event-description" v-model="eventInfo.organizationName" @input="updateParent">
      </div>

      <div class="form-group">
        <label for="address">Address of Appearance</label>
        <input type="text" id="address" v-model="eventInfo.address" @input="updateParent">
      </div>

      <div class="form-group">
        <label for="isOnCampus">Is on Campus?</label>
        <input type="checkbox" id="isOnCampus" v-model="eventInfo.isOnCampus" @input="updateParent" />
      </div>

      <div class="form-group">
        <label for="event-description">Event Description</label>
        <textarea id="event-description" v-model="eventInfo.eventDescription" @input="updateParent"></textarea>
      </div>

      <div class="form-group">
        <label for="special-instruction">Special Instructions</label>
        <textarea id="evenspecial-instruction" v-model="eventInfo.specialInstruction" @input="updateParent"></textarea>
      </div>

      <div class="form-group">
        <label for="outside-organization">List any other outside organizations involved in sponsoring the event</label>
        <textarea id="evenspecial-instruction" v-model="eventInfo.outsideOrg" @input="updateParent"></textarea>
      </div>

      <div class="form-group">
        <label for="expense-benefit">Describe any expense or benefits to the spirit team members</label>
        <textarea id="expense-benefit" v-model="eventInfo.expenseBenefit" @input="updateParent"></textarea>
      </div>
      <button @click="submitOrder">
        Submit Order
      </button>
    </div>
  </div>
</template>

<script>
import Sidebar from "./SidebarMenu.vue";
import axios from 'axios';

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      eventInfo: {
        contactFirstName: '',
        contactLastName: '',
        phoneNumber: '',
        email: '',
        eventTitle: '',
        eventType: '',
        organizationName: '',
        address: '',
        specialInstruction: '',
        outsideOrg: '',
        expenseBenefit: '',
        eventDescription: '',
      },
      contactInputs: {
        contactFirstName: { label: "Contact First Name", type: "text", id: "contact-first-name" },
        contactLastName: { label: "Contact Last Name", type: "text", id: "contact-last-name" },
        phoneNumber: { label: "Phone Number", type: "text", id: "phone-number" },
        email: { label: "Email", type: "email", id: "email" },
      },
    };
  },
  methods: {
    submitOrder() {
      axios
        .post("https://frog-scheduler-latest.onrender.com/api/requests", {
          firstName: this.eventInfo.contactFirstName,
          lastName: this.eventInfo.contactLastName,
          email: this.eventInfo.email,
          eventType: this.eventInfo.eventType,
          eventTitle: this.eventInfo.eventTitle,
          organizationName: this.eventInfo.organizationName,
          eventAddress: this.eventInfo.address,
          isOnCampus: this.isOnCampus,
          phoneNumber: this.eventInfo.phoneNumber,
          specialInstructions: this.eventInfo.specialInstruction,
          benefitsDescription: this.eventInfo.expenseBenefit,
          detailedDescription: this.eventInfo.eventDescription,
          status: "APPROVED",
          selectedDate: this.eventInfo.selectedDate,
          //startTime: this.eventInfo.startTime,
          //endTime: this.eventInfo.endTime,
        })
        .then((response) => {
          const data = response.data;
          console.log(data.data.id); // Adjust this line depending on the structure of the response
          this.eventInfo.receiptId = data.data.id; // Adjust this line depending on the structure of the response
          alert("Successfully added a request!");
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
/* Your existing styles modified for the new form layout */
.event-form-container {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.submitbox {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  padding: 1rem;
  background-color: #444;
  border-radius: 8px;
  color: white;
}
.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.submit-button {
  background-color: #004085; /* Dark blue */
  border: none;
  padding: 10px 15px;
  color: white;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.submit-button:hover {
  background-color: green;
}

.main-layout {
  display: flex;
}
</style>
