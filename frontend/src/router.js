import Vue from 'vue';
import Router from 'vue-router';

// const Home = () => import('./Application/home/Home');
const ProfileOverview = () => import('./Application/profile/Overview');
const Posts = () => import('./Application/profile/Posts');
const Comments = () => import('./Application/profile/Comments');
const Stored = () => import('./Application/profile/Stored');
const Hidden = () => import('./Application/profile/Hidden');
const LikedPosts = () => import('./Application/profile/LikedPosts');
const DislikedPosts = () => import('./Application/profile/DislikedPosts');
const AwardsReceived = () => import('./Application/profile/AwardsReceived');
const AwardsGiven = () => import('./Application/profile/AwardsGiven');
const CreatePost = () => import('./Application/CreatePost');
const MostPopularCommunities = () => import('./Application/MostPopularCommunities');
const Configuration = () => import('./Application/profile/config/Configuration');
const BloquedUsers = () => import('./Application/profile/config/BloquedUsers');
const SubredditConfiguration = () => import('./Application/Subreddit/config/Configuration');
const ModRequests = () => import('./Application/Subreddit/config/ModRequests');
const CommunityRules = () => import('./Application/Subreddit/config/Rules');
const SubredditModerators = () => import('./Application/Subreddit/config/ApprovedModerators');
const AllNotifications = () => import('./Application/AllNotifications');

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
