export default {
  methods: {
    premiar() {
      document.getElementsByName('premiar')[0].classList.add('d-none');
      document.getElementsByName('despremiar')[0].classList.remove('d-none');
    },
    despremiar() {
      document.getElementsByName('despremiar')[0].classList.add('d-none');
      document.getElementsByName('premiar')[0].classList.remove('d-none');
    },
  },
};
