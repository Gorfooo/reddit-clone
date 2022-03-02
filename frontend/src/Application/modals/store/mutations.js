export default {
  toggleTermsOfUse() {
    this.state.modalStore.termsOfUse = !this.state.modalStore.termsOfUse;
  },
  togglePolitics() {
    this.state.modalStore.politics = !this.state.modalStore.politics;
  },
  toggleAward() {
    this.state.modalStore.award = !this.state.modalStore.award;
  },
  toggleReport() {
    this.state.modalStore.report = !this.state.modalStore.report;
  },
  toggleCreateCommunity() {
    this.state.modalStore.createCommunity = !this.state.modalStore.createCommunity;
  },
  toggleRegister() {
    this.state.modalStore.register = !this.state.modalStore.register;
  },
  toggleLogin() {
    this.state.modalStore.login = !this.state.modalStore.login;
  },
  toggleChat() {
    this.state.modalStore.Chat = !this.state.modalStore.Chat;
  },
  toggleAlreadyShared() {
    this.state.modalStore.alreadyShared = !this.state.modalStore.alreadyShared;
  },
  toggleAllModerators() {
    this.state.modalStore.allModerators = !this.state.modalStore.allModerators;
  },
};
