import { createRouter, createWebHistory } from 'vue-router';
// Import route components.
import Pricing from '../components/Pricing/Pricing.vue';
import Range from '../components/Range/Range.vue';
import Request from '../components/Request/Request.vue';
import RequestModify from '../components/RequestModify/RequestModify.vue';
import Step1 from '../views/step1.vue';
import Step2 from '../views/step2.vue';
import Step3 from '../views/step3.vue';
import Step4 from '../views/step4.vue';
import Receipt from '../components/Receipt/Receipt.vue';
import Login from '../components/Login/Login.vue';
import ModifyDetail from '../components/RequestModify/ModifyDetail.vue';
import SuperFrogDirector from '../components/SuperFrogDirector/SuperFrogDirector.vue';
import SuperFrog from '../components/SuperFrogStudent/SuperFrogStudent.vue';
import AddRequest from '../components/SuperFrogDirector/AddRequest.vue';
import AddStudent from '../components/SuperFrogDirector/AddStudent.vue';
import Calendar from '../components/SuperFrogDirector/CalendarPage.vue';
import Reports from '../components/SuperFrogDirector/ReportsPage.vue';
import ViewRequests from '../components/SuperFrogDirector/ViewRequests.vue';
import ViewStudents from '../components/SuperFrogDirector/ViewStudents.vue';


// Create the router instance.
const router = createRouter({
    // Provide the history implementation to use.
    history: createWebHistory(),
    // Define some route records, each route record should map to a component.
    routes: [
        { path: '/range', name: 'range', component: Range },
        { path: '/pricing', name: 'pricing', component: Pricing },
        {
            path: '/step1', name: 'request', component: Request,
            children: [
                { path: '', name: 'step1', component: Step1 },      
                { path: '/step2', name: 'step2', component: Step2 },  
                { path: '/step3', name: 'step3', component: Step3 },  
                { path: '/step4', name: 'step4', component: Step4 },  
            ]
        },        
        { path: '/modify', name: 'modify', component: RequestModify },
        { path: '/receipt/:requestId', name: 'Receipt', component: Receipt, props: true,},
        { path: '/login', name: 'login', component: Login},
        { path: '/modify-request/:requestId', name: 'modify-detail', component: ModifyDetail},
        { path: '/super-frog-director', name: 'super-frog-director', component: SuperFrogDirector},
        { path: '/super-frog/:id', name: 'super-frog', component: SuperFrog},
        { path: '/super-frog-director/add-request', component: AddRequest },
        { path: '/super-frog-director/add-student', component: AddStudent },
        { path: '/super-frog-director/calendar', component: Calendar },
        { path: '/super-frog-director/reports', component: Reports },
        { path: "/super-frog-director/view-requests", component: ViewRequests },
        { path: "/super-frog-director/view-students", component: ViewStudents },
    ],
});
export default router;