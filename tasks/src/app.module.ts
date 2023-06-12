import { Module } from '@nestjs/common'
import { DatabaseModule } from './infra/database/database.module'
import { TasksModule } from './app/tasks/tasks.module'
import { HttpModule } from './infra/http/http.module'
import { UsersModule } from './app/users/users.module'
import { ConfigModule } from '@nestjs/config'
import { TestResolver } from './app/test/test.resolver';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TasksModule,
    HttpModule,
    UsersModule,
  ],
  controllers: [],
  providers: [TestResolver],
})
export class AppModule {}
