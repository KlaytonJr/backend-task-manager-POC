import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Controller from './controllers/Controller';

class App {
  public app: express.Application;

  public constructor(controllers: Controller[]) {
    this.app = express();
    this.app.use(cors());

    this.initMongoose();
    this.connectDatabase();

    this.initExpressJson();
    this.initControllers(controllers);
  }

  // Mongoose
  private initMongoose(): void {
    mongoose.set('runValidators', true);
  }

  private connectDatabase(): void {
    mongoose.connect('mongodb+srv://quadriciclo4x4:hOLrrt5UwIWqrEPQ@cluster0.h0qc3a1.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  }

  // Express
  private initExpressJson(): void {
    this.app.use(express.json());
  }

  // Controllers
  private initControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  // Listen changes
  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`Aplicação iniciada na porta: ${port}`);
    });
  }
}

export default App;
