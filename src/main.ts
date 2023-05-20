import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { useContainer } from 'class-validator'

async function NestApp() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,

      // Whitelist ignores all attributes that aren't listed on DTO class
      // If nothing is forwarded, then it'll throw error status 400 (Bad request)
      whitelist: true, 
      forbidNonWhitelisted: true
    })
  )


  useContainer(app.select(AppModule), { fallbackOnErrors: true }) // Dependencies resolver for class validator
  await app.listen(3333) // Server instance port
}

NestApp()