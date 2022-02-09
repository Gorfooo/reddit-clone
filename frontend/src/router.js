import Vue from 'vue';
import Router from 'vue-router';

// const Home = () => import('./components/home/Home');
const ProfileOverview = () => import('./components/profile/Overview');
const Posts = () => import('./components/profile/Posts');
const Comments = () => import('./components/profile/Comments');
const Stored = () => import('./components/profile/Stored');
const Hidden = () => import('./components/profile/Hidden');
const LikedPosts = () => import('./components/profile/LikedPosts');
const DislikedPosts = () => import('./components/profile/DislikedPosts');
const AwardsReceived = () => import('./components/profile/AwardsReceived');
const AwardsGiven = () => import('./components/profile/AwardsGiven');
const CreatePost = () => import('./components/CreatePost');
const MostPopularCommunities = () => import('./components/MostPopularCommunities');
const Configuration = () => import('./components/profile/config/Configuration');
const BloquedUsers = () => import('./components/profile/config/BloquedUsers');
const SubredditConfiguration = () => import('./components/Subreddit/config/Configuration');
const ModRequests = () => import('./components/Subreddit/config/ModRequests');
const CommunityRules = () => import('./components/Subreddit/config/Rules');
const SubredditModerators = () => import('./components/Subreddit/config/ApprovedModerators');
const AllNotifications = () => import('./components/AllNotifications');

Vue.use(Router);

export default new Router({
  routes: [
    // { path: '/', name: 'home', component: Home },
    { path: '/profile/overview', name: 'overview', component: ProfileOverview },
    { path: '/profile/posts', name: 'posts', component: Posts },
    { path: '/profile/comments', name: 'comments', component: Comments },
    { path: '/profile/stored', name: 'stored', component: Stored },
    { path: '/profile/hidden', name: 'hidden', component: Hidden },
    { path: '/profile/likedposts', name: 'likedposts', component: LikedPosts },
    { path: '/profile/dislikedposts', name: 'dislikedposts', component: DislikedPosts },
    { path: '/profile/awardsreceived', name: 'awardsreceived', component: AwardsReceived },
    { path: '/profile/awardsgiven', name: 'awardsgiven', component: AwardsGiven },
    { path: '/profile/configuration/profile', name: 'configuration', component: Configuration },
    { path: '/profile/configuration/bloquedusers', name: 'bloquedusers', component: BloquedUsers },
    { path: '/createpost', name: 'createpost', component: CreatePost },
    { path: '/mostpopularcommunities', name: 'mostpopularcommunities', component: MostPopularCommunities },
    { path: '/subreddit/configuration/community', name: 'subredditconfiguration', component: SubredditConfiguration },
    { path: '/subreddit/configuration/modrequests', name: 'modrequests', component: ModRequests },
    { path: '/subreddit/configuration/rules', name: 'rules', component: CommunityRules },
    { path: '/subreddit/configuration/moderators', name: 'moderators', component: SubredditModerators },
    { path: '/notifications', name: 'notifications', component: AllNotifications },
  ],
});
