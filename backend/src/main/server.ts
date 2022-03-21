import { config } from 'dotenv';

config();

(async () => {
  const app = (await import('./config/app')).default;
  app.listen(process.env.PORT, () => {
    console.log(
      `Backend running at port ${process.env.PORT}, access: http://localhost:8000/`,
    );
  });
})();
