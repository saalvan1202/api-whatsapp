import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('--- Iniciando limpieza de Base de Datos ---');
  
  try {
    // El orden importa por las llaves foráneas
    console.log('Borrando sesiones...');
    await prisma.session.deleteMany({});
    
    console.log('Borrando instancias...');
    await prisma.instance.deleteMany({});
    
    console.log('✅ Base de Datos limpiada con éxito.');
  } catch (error) {
    console.error('❌ Error durante la limpieza:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
