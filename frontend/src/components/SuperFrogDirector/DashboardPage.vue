<template>
    <div class="redirect-message">
      Redirecting to Add Student page...
    </div>
  </template>
  
  <script>
export default {
  name: 'DashboardPage',
  created() {
    this.redirectToAddStudent();
  },
  methods: {
    redirectToAddStudent() {
      this.$router.push('/super-frog-director/add-student');
    },
  },
};
</script>
